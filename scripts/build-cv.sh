#!/usr/bin/env bash
# Regenerates public/cv.pdf from the print-ready source in scripts/cv.html.
# Requires Google Chrome (or Chromium) and a POSIX shell.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BROWSER="${BROWSER:-google-chrome}"

"$BROWSER" \
  --headless=new \
  --disable-gpu \
  --no-sandbox \
  --no-pdf-header-footer \
  --print-to-pdf="$ROOT/public/cv.pdf" \
  "file://$ROOT/scripts/cv.html"

echo "Wrote $ROOT/public/cv.pdf"
