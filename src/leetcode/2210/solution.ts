export function countHillValley(nums: number[]): number {
  if (nums.length <= 2) return 0;
  let hills = 0;
  const valleys = 0;

  const isHill = (window: [number, number, number]): boolean => {
    const [left, item, right] = window;
    return item > left && item > right;
  };

  const isValley = (window: [number, number, number]): boolean => {
    const [left, item, right] = window;
    return item < left && item < right;
  };

  const scanWindow: [number, number, number] = [nums[0], nums[1], nums[2]];
  let scanIndex = 3;

  console.log({ nums });
  while (scanIndex <= nums.length) {
    console.log({ scanWindow });

    if (isHill(scanWindow)) hills += 1;
    else if (isValley(scanWindow)) hills += 1;

    scanWindow.shift();
    scanWindow.push(nums[scanIndex]);
    scanIndex += 1;
  }

  return hills + valleys;
}
