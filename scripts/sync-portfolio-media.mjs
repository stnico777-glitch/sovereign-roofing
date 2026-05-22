#!/usr/bin/env node
/**
 * Copies portfolio-import/raw → public paths and updates portfolio card / reel src in site copy.
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rawDir = path.join(root, "portfolio-import", "raw");
const publicPortfolio = path.join(root, "public", "portfolio");
const publicRoot = path.join(root, "public");

const IMAGE_EXT = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".heic",
  ".heif",
]);
const VIDEO_EXT = new Set([".mp4", ".mov", ".webm", ".m4v"]);

function listMedia(dir) {
  const images = [];
  const videos = [];
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = path.join(dir, name);
    if (!fs.statSync(full).isFile()) continue;
    const ext = path.extname(name).toLowerCase();
    const entry = { full, name, mtime: fs.statSync(full).mtimeMs };
    if (IMAGE_EXT.has(ext)) images.push(entry);
    else if (VIDEO_EXT.has(ext)) videos.push(entry);
  }
  images.sort((a, b) => a.name.localeCompare(b.name) || a.mtime - b.mtime);
  videos.sort((a, b) => a.name.localeCompare(b.name) || a.mtime - b.mtime);
  return { images, videos };
}

function toJpegIfNeeded(srcPath, destPath) {
  const ext = path.extname(srcPath).toLowerCase();
  if (ext === ".heic" || ext === ".heif") {
    execSync(`sips -s format jpeg "${srcPath}" --out "${destPath}"`, {
      stdio: "inherit",
    });
    return destPath;
  }
  fs.copyFileSync(srcPath, destPath);
  return destPath;
}

function pad(n) {
  return String(n).padStart(2, "0");
}

function updateSrcList(filePath, arrayName, newSrcs) {
  let text = fs.readFileSync(filePath, "utf8");
  const re = new RegExp(
    `(export const ${arrayName} = \\[[\\s\\S]*?)(\\];)`,
    "m",
  );
  const block = text.match(re);
  if (!block) throw new Error(`Could not find ${arrayName} in ${filePath}`);

  const srcRe = /src:\s*"[^"]*"/g;
  let i = 0;
  const updated = block[1].replace(srcRe, () => {
    const src = newSrcs[i++];
    if (!src) return `src: "${newSrcs[newSrcs.length - 1]}"`;
    return `src: "${src}"`;
  });

  if (i === 0) throw new Error(`No src fields in ${arrayName}`);
  text = text.replace(re, `${updated}$2`);
  fs.writeFileSync(filePath, text);
}

function updateReelPaths(filePath, src1, src2) {
  let text = fs.readFileSync(filePath, "utf8");
  text = text.replace(
    /reelVideoSrc:\s*"[^"]*"/,
    `reelVideoSrc: "${src1}"`,
  );
  text = text.replace(
    /reelVideoSrc2:\s*"[^"]*"/,
    `reelVideoSrc2: "${src2}"`,
  );
  fs.writeFileSync(filePath, text);
}

const { images, videos } = listMedia(rawDir);
if (images.length === 0) {
  console.error("No images found in portfolio-import/raw");
  process.exit(1);
}

fs.mkdirSync(publicPortfolio, { recursive: true });

const imagePublicPaths = [];
for (let i = 0; i < images.length; i++) {
  const slug = `project-${pad(i + 1)}`;
  const dest = path.join(publicPortfolio, `${slug}.jpg`);
  toJpegIfNeeded(images[i].full, dest);
  imagePublicPaths.push(`/portfolio/${slug}.jpg`);
  console.log(`image → ${imagePublicPaths[i]}`);
}

const cardCount = 5;
const cardSrcs = imagePublicPaths.slice(0, cardCount);

if (cardSrcs.length < cardCount) {
  console.warn(
    `Only ${cardSrcs.length} images (expected up to ${cardCount}); reusing last image for remaining cards.`,
  );
  while (cardSrcs.length < cardCount) {
    cardSrcs.push(cardSrcs[cardSrcs.length - 1]);
  }
}

const siteCopy = path.join(root, "src", "content", "siteCopy.ts");
const siteCopyEs = path.join(root, "src", "content", "siteCopyEs.ts");

updateSrcList(siteCopy, "portfolioCards", cardSrcs);
updateSrcList(siteCopyEs, "portfolioCardsEs", cardSrcs);

function ffmpegToMp4(src, dest) {
  execSync(
    `ffmpeg -y -i "${src}" -vf "scale=1080:-2,setsar=1" -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -an -movflags +faststart "${dest}"`,
    { stdio: "inherit" },
  );
}

if (videos.length > 0) {
  const reel1Name = "selected-work-reel-top.mp4";
  const reel2Name = "selected-work-reel-reversed.mp4";
  const reel1Dest = path.join(publicRoot, reel1Name);
  const reel2Dest = path.join(publicRoot, reel2Name);
  ffmpegToMp4(videos[0].full, reel1Dest);
  console.log(`video → /${reel1Name}`);

  const reel1 = `/${reel1Name}`;
  const reel2 = `/${reel2Name}`;
  const reel2Src =
    videos.length > 1 ? videos[1].full : videos[0].full;
  if (videos.length === 1) {
    console.warn("One video only — using same clip for both reel strips.");
  }
  ffmpegToMp4(reel2Src, reel2Dest);
  console.log(`video → /${reel2Name}`);
  updateReelPaths(siteCopy, reel1, reel2);
  updateReelPaths(siteCopyEs, reel1, reel2);
} else {
  console.warn("No videos in import folder; reel paths unchanged.");
}

console.log(
  `\nImported ${images.length} image(s) and ${videos.length} video(s). Edit alt/title copy in siteCopy*.ts if needed.`,
);
