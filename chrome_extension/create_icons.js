import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const iconsDir = path.resolve('./chrome_extension/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate SVG Icon first
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#1B2E24"/>
      <stop offset="100%" stop-color="#080C0A"/>
    </radialGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCE8AA"/>
      <stop offset="50%" stop-color="#D4AF37"/>
      <stop offset="100%" stop-color="#997A15"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Outer Ring -->
  <rect x="4" y="4" width="120" height="120" rx="28" fill="url(#bg)" stroke="url(#gold)" stroke-width="3"/>
  <circle cx="64" cy="64" r="50" fill="none" stroke="url(#gold)" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.6"/>

  <!-- Stylized Camellia Leaf & Teardrop -->
  <g transform="translate(64, 64) scale(1.1)">
    <!-- Main Leaf -->
    <path d="M 0,-30 C 22,-18 28,10 0,32 C -28,10 -22,-18 0,-30 Z" fill="url(#gold)" filter="url(#glow)"/>
    <!-- Leaf Vein -->
    <path d="M 0,-24 L 0,26" stroke="#080C0A" stroke-width="2" stroke-linecap="round"/>
    <path d="M 0,-10 L 10,-3" stroke="#080C0A" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 0,0 L -10,7" stroke="#080C0A" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M 0,10 L 8,16" stroke="#080C0A" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent);

// Function to generate raw uncompressed PNG data with RGBA buffer
function createPngBuffer(width, height) {
  const bytesPerPixel = 4;
  const rowSize = width * bytesPerPixel + 1; // +1 for filter byte
  const rawData = Buffer.alloc(rowSize * height);

  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.45;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0; // Filter type 0 (None)

    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * bytesPerPixel;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background rounded obsidian box
      const isCorner = Math.abs(dx) > width*0.38 && Math.abs(dy) > height*0.38 && dist > radius*1.1;

      if (!isCorner) {
        // Leaf shape test
        const nx = dx / (width / 2);
        const ny = dy / (height / 2);
        const inLeaf = (nx*nx*1.8 + (ny - 0.1)*(ny - 0.1)*0.9 < 0.28);

        if (inLeaf) {
          // Gold #D4AF37
          rawData[pixelOffset] = 212;     // R
          rawData[pixelOffset + 1] = 175; // G
          rawData[pixelOffset + 2] = 55;  // B
          rawData[pixelOffset + 3] = 255; // A
        } else {
          // Dark Emerald #0E1612
          const bgShade = Math.floor(14 + (1 - dist / radius) * 15);
          rawData[pixelOffset] = Math.max(8, bgShade);
          rawData[pixelOffset + 1] = Math.max(18, bgShade + 12);
          rawData[pixelOffset + 2] = Math.max(14, bgShade + 6);
          rawData[pixelOffset + 3] = 255;
        }
      } else {
        // Transparent
        rawData[pixelOffset] = 0;
        rawData[pixelOffset + 1] = 0;
        rawData[pixelOffset + 2] = 0;
        rawData[pixelOffset + 3] = 0;
      }
    }
  }

  // Compress raw data with zlib
  const compressed = zlib.deflateSync(rawData);

  // Helper for PNG chunk creation
  function createChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    
    const checkBuf = Buffer.concat([typeBuf, data]);
    const crc = calcCrc32(checkBuf);
    crcBuf.writeUInt32BE(crc, 0);

    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  // PNG Header signature
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  // IHDR Chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 6; // Color type: 6 (RGBA)
  ihdrData[10] = 0; // Compression
  ihdrData[11] = 0; // Filter
  ihdrData[12] = 0; // Interlace
  const ihdrChunk = createChunk('IHDR', ihdrData);

  // IDAT Chunk
  const idatChunk = createChunk('IDAT', compressed);

  // IEND Chunk
  const iendChunk = createChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Simple CRC32 function for PNG chunk validation
function calcCrc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      if (crc & 1) {
        crc = (crc >>> 1) ^ 0xEDB88320;
      } else {
        crc = crc >>> 1;
      }
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

[16, 48, 128].forEach(size => {
  const pngBuffer = createPngBuffer(size, size);
  fs.writeFileSync(path.join(iconsDir, `icon${size}.png`), pngBuffer);
  console.log(`Generated icon${size}.png`);
});
