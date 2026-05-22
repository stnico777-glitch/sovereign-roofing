#!/usr/bin/env bash
# Import client project photos/videos into public/ and sync carousel paths in site copy.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
RAW="$ROOT/portfolio-import/raw"
IMPORT_TMP="$ROOT/portfolio-import/.download"
PUBLIC_PORTFOLIO="$ROOT/public/portfolio"
DRIVE_FOLDER_ID="1QAZMqmcHeKFuZiuphbZE4PsE1bZpgR8W"
USE_DRIVE=0

for arg in "$@"; do
  case "$arg" in
    --drive) USE_DRIVE=1 ;;
    -h | --help)
      echo "Usage: $0 [--drive]"
      echo "  default: read portfolio-import/raw/"
      echo "  --drive: download folder (requires Anyone with the link)"
      exit 0
      ;;
  esac
done

mkdir -p "$RAW" "$PUBLIC_PORTFOLIO"

if [[ "$USE_DRIVE" -eq 1 ]]; then
  echo "Downloading Drive folder…"
  rm -rf "$IMPORT_TMP"
  mkdir -p "$IMPORT_TMP"
  if ! gdown --folder "https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}" -O "$IMPORT_TMP" --remaining-ok; then
    echo "Drive download failed. Share the folder as Anyone with the link (Viewer), or use Option A in portfolio-import/README.md"
    exit 1
  fi
  rm -rf "$RAW"/*
  # Flatten one level if Drive nests a subfolder
  shopt -s nullglob
  items=("$IMPORT_TMP"/*)
  if [[ ${#items[@]} -eq 1 && -d "${items[0]}" ]]; then
    cp -R "${items[0]}"/* "$RAW/"
  else
    cp -R "$IMPORT_TMP"/* "$RAW/"
  fi
fi

shopt -s nullglob
files=("$RAW"/*)
if [[ ${#files[@]} -eq 0 ]]; then
  echo "No files in portfolio-import/raw/. Add downloads from Drive, then re-run."
  exit 1
fi

node "$ROOT/scripts/sync-portfolio-media.mjs"

echo "Done. Check /projects and the home page carousel + On site reel."
