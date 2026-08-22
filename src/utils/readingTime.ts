export function estimateReadingTime(source: string): number {
  const plainText = source
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#>*_`$[\](){|}\\-]/g, " ");

  const cjkCharacters =
    plainText.match(/[\u3400-\u9fff\uf900-\ufaff]/g)?.length ?? 0;
  const latinWords = plainText
    .replace(/[\u3400-\u9fff\uf900-\ufaff]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(latinWords / 220 + cjkCharacters / 400));
}
