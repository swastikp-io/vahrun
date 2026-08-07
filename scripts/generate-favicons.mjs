import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceImagePath = path.join(process.cwd(), 'public', '작업가능 도안들입니다🙂___._#타투 #대구타투 #미니타투 #낙서타투 #라인타투');

async function generateFavicons() {
  if (!fs.existsSync(sourceImagePath)) {
    console.error('Source image file not found:', sourceImagePath);
    process.exit(1);
  }

  console.log('Processing source image:', sourceImagePath);

  const appDir = path.join(process.cwd(), 'app');
  const publicDir = path.join(process.cwd(), 'public');

  // 1. Generate 32x32 PNG icon
  const icon32Buffer = await sharp(sourceImagePath)
    .resize(32, 32, { fit: 'cover' })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'icon.png'), icon32Buffer);
  fs.writeFileSync(path.join(appDir, 'icon.png'), icon32Buffer);

  // 2. Generate 180x180 Apple Touch Icon
  const appleIconBuffer = await sharp(sourceImagePath)
    .resize(180, 180, { fit: 'cover' })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'apple-icon.png'), appleIconBuffer);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), appleIconBuffer);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), appleIconBuffer);

  // 3. Generate favicon.ico (32x32 PNG renamed to ico or ICO format)
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icon32Buffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icon32Buffer);

  // 4. Generate 192x192 PWA Icon
  const icon192Buffer = await sharp(sourceImagePath)
    .resize(192, 192, { fit: 'cover' })
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(publicDir, 'icon-192.png'), icon192Buffer);

  console.log('Successfully generated all favicons!');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
