import sharp from "sharp";

export async function svgToPng(svg: string): Promise<Buffer> {
  const sharpInstance = sharp(Buffer.from(svg), { density: 72 }).resize(40, 40, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  });

  return sharpInstance.png().toBuffer();
}
