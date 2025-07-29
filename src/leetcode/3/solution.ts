export function lengthOfLongestSubstring(input: string): number {
  const letters = input.split("");
  let maxLength = 0;
  let scanWindow = "";

  for (const letter of letters) {
    const index = scanWindow.indexOf(letter);

    if (index != -1) {
      scanWindow = scanWindow.substring(index + 1);
    }

    scanWindow += letter;

    if (scanWindow.length > maxLength) {
      maxLength = scanWindow.length;
    }
  }

  return maxLength;
}
