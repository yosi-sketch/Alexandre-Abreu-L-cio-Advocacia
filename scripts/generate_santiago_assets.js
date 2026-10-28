const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pLogo = 'C:/Users/matheus/.gemini/antigravity/brain/6abdafa0-53a2-4ee0-bab9-114ebb7931c0/.user_uploaded/media_1793212400824_d6311a02.png';
const pOffice = 'C:/Users/matheus/.gemini/antigravity/brain/6abdafa0-53a2-4ee0-bab9-114ebb7931c0/.user_uploaded/media_1793212404552_41ce6c41.jpg';
const pPartners = 'C:/Users/matheus/.gemini/antigravity/brain/6abdafa0-53a2-4ee0-bab9-114ebb7931c0/.user_uploaded/media_1793212538123_7a0b3872.jpg';

async function generateAssets() {
  const pubDir = path.resolve('public');
  const appDir = path.resolve('app');
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  console.log('Generating assets for Santiago, Silva & Santos Sociedade de Advogados...');

  // 1. Photos of Partners & Office
  await sharp(pPartners)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'socios-santiago-silva-santos.jpg'));

  await sharp(pPartners)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'hero-advogados.jpg'));

  await sharp(pOffice)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'sede-escritorio-lss.jpg'));

  await sharp(pOffice)
    .jpeg({ quality: 96, mozjpeg: true })
    .toFile(path.join(pubDir, 'escritorio-recepcao.jpg'));

  // 2. Full Horizontal Logo (Original with transparent bg)
  // Extract non-empty bounding box with balanced margins
  const trimmedLogo = await sharp(pLogo)
    .extract({ left: 125, top: 15, width: 770, height: 315 })
    .extend({ top: 16, bottom: 16, left: 24, right: 24, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ quality: 98 })
    .toBuffer();

  await sharp(trimmedLogo).toFile(path.join(pubDir, 'logo.png'));

  // 3. Medallion Symbol (Column in golden circular medallion)
  const medallionCrop = await sharp(pLogo)
    .extract({ left: 125, top: 15, width: 304, height: 315 })
    .toBuffer();

  // Standalone transparent symbol square (512x512)
  await sharp(medallionCrop)
    .resize(460, 460, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({ top: 26, bottom: 26, left: 26, right: 26, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(pubDir, 'logo-symbol.png'));

  // 4. White / Light text version of Logo for dark backgrounds
  const rawLogo = await sharp(trimmedLogo).raw().toBuffer({ resolveWithObject: true });
  const rawData = rawLogo.data;
  // In the right part (x > 330), replace dark navy text with silk white / ivory #f8fafc
  for (let y = 0; y < rawLogo.info.height; y++) {
    for (let x = 0; x < rawLogo.info.width; x++) {
      const idx = (y * rawLogo.info.width + x) * rawLogo.info.channels;
      const alpha = rawData[idx + 3];
      if (alpha > 20 && x > 330) {
        const r = rawData[idx], g = rawData[idx+1], b = rawData[idx+2];
        // If it's the dark navy text (r < 60, g < 70, b < 85)
        if (r < 70 && g < 75 && b < 90) {
          rawData[idx] = 248;     // R
          rawData[idx + 1] = 250; // G
          rawData[idx + 2] = 252; // B
        }
      }
    }
  }

  await sharp(rawData, {
    raw: {
      width: rawLogo.info.width,
      height: rawLogo.info.height,
      channels: rawLogo.info.channels,
    }
  })
    .png()
    .toFile(path.join(pubDir, 'logo-light.png'));

  // 5. Favicon Badge:
  // Circular / rounded luxury dark navy slate badge (#091a2b) with refined gold rim and the centered golden column medallion
  const badgeSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="navyBg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#14263e" />
          <stop offset="65%" stop-color="#091a2b" />
          <stop offset="100%" stop-color="#050e18" />
        </radialGradient>
        <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fdf2d8" />
          <stop offset="25%" stop-color="#d4a362" />
          <stop offset="60%" stop-color="#b38245" />
          <stop offset="85%" stop-color="#805624" />
          <stop offset="100%" stop-color="#462c0e" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="120" fill="url(#navyBg)" />
      <rect x="14" y="14" width="484" height="484" rx="106" fill="none" stroke="url(#goldRim)" stroke-width="16" stroke-opacity="0.95" />
    </svg>
  `;

  const symbolBadge = await sharp(medallionCrop)
    .resize(370, 370, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  const icon512 = await sharp(Buffer.from(badgeSvg))
    .composite([{ input: symbolBadge, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save favicon formats to public/
  await sharp(icon512).resize(512, 512).png().toFile(path.join(pubDir, 'icon-512x512.png'));
  await sharp(icon512).resize(192, 192).png().toFile(path.join(pubDir, 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(pubDir, 'apple-icon.png'));
  await sharp(icon512).resize(32, 32).png().toFile(path.join(pubDir, 'favicon-32x32.png'));
  await sharp(icon512).resize(16, 16).png().toFile(path.join(pubDir, 'favicon-16x16.png'));

  // Also save to app/ for Next.js App Router root route icons
  await sharp(icon512).resize(192, 192).png().toFile(path.join(appDir, 'icon.png'));
  await sharp(icon512).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));

  // Multi-resolution ICO (16x16 + 32x32 + 48x48)
  const png16 = await sharp(icon512).resize(16, 16).png().toBuffer();
  const png32 = await sharp(icon512).resize(32, 32).png().toBuffer();
  const png48 = await sharp(icon512).resize(48, 48).png().toBuffer();

  const images = [
    { size: 16, buffer: png16 },
    { size: 32, buffer: png32 },
    { size: 48, buffer: png48 },
  ];

  function createIco(images) {
    const numImages = images.length;
    const headerSize = 6;
    const dirEntrySize = 16;
    let offset = headerSize + dirEntrySize * numImages;

    const header = Buffer.alloc(headerSize);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // ICO type
    header.writeUInt16LE(numImages, 4);

    const entries = [];
    const buffers = [];

    for (const img of images) {
      const entry = Buffer.alloc(dirEntrySize);
      entry.writeUInt8(img.size === 256 ? 0 : img.size, 0); // width
      entry.writeUInt8(img.size === 256 ? 0 : img.size, 1); // height
      entry.writeUInt8(0, 2); // color palette
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // image size in bytes
      entry.writeUInt32LE(offset, 12); // image offset

      entries.push(entry);
      buffers.push(img.buffer);
      offset += img.buffer.length;
    }

    return Buffer.concat([header, ...entries, ...buffers]);
  }

  const icoBuffer = createIco(images);
  fs.writeFileSync(path.join(pubDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);

  console.log('✅ All assets generated successfully in public/ and app/!');
}

generateAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
