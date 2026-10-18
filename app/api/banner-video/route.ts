import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const VIDEO_EXTENSIONS = [".mp4", ".webm", ".mov", ".m4v", ".ogg"];

export async function GET() {
  try {
    const cwd = process.cwd();
    const publicVideoDir = path.join(cwd, "public", "video");

    if (!fs.existsSync(publicVideoDir)) {
      fs.mkdirSync(publicVideoDir, { recursive: true });
    }

    // Also check if user uploaded a video file to root directory by mistake and copy it into public/video
    const rootFiles = fs.readdirSync(cwd);
    for (const file of rootFiles) {
      const ext = path.extname(file).toLowerCase();
      if (VIDEO_EXTENSIONS.includes(ext)) {
        const srcPath = path.join(cwd, file);
        const destPath = path.join(publicVideoDir, file);
        if (fs.statSync(srcPath).isFile() && !fs.existsSync(destPath)) {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }

    const files = fs.readdirSync(publicVideoDir);
    const videos = files
      .filter((file) =>
        VIDEO_EXTENSIONS.includes(path.extname(file).toLowerCase())
      )
      .sort()
      .map((file) => `/video/${encodeURIComponent(file)}`);

    return NextResponse.json({ videos });
  } catch {
    return NextResponse.json({ videos: [] });
  }
}
