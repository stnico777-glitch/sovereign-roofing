# Portfolio media import

Assets from the client Drive folder:

https://drive.google.com/drive/folders/1QAZMqmcHeKFuZiuphbZE4PsE1bZpgR8W

## Option A — Download here (fastest)

1. Open the folder in Drive (signed in).
2. Select all files → **Download** (or drag the unzipped folder into `portfolio-import/raw/`).
3. From the project root, run:

   ```bash
   ./scripts/import-portfolio-media.sh
   ```

## Option B — Anyone with the link

1. In Drive: **Share** → **General access** → **Anyone with the link** (Viewer).
2. Run:

   ```bash
   ./scripts/import-portfolio-media.sh --drive
   ```

The script copies images into `public/portfolio/`, videos into `public/` for the on-site reel, and updates project carousel paths in `src/content/siteCopy.ts` and `src/content/siteCopyEs.ts`.

After import, refresh the site and adjust card titles/alt text in those files if needed.
