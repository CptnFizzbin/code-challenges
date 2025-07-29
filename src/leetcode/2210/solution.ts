export function countHillValley(nums: number[]): number {
  type ScanWindow = [number, number, number]

  function filterConsecutive<Data>() {
    let lastSeen: Data
    return (item: Data) => {
      if (item === lastSeen) return false
      lastSeen = item
      return true
    }
  }

  const shiftWindow = (scanWindow: ScanWindow, next: number) => {
    scanWindow.shift()
    scanWindow.push(next)
  }

  const isHill = (window: [number, number, number]): boolean => {
    const [left, item, right] = window
    return item > left && item > right
  }

  const isValley = (window: [number, number, number]): boolean => {
    const [left, item, right] = window
    return item < left && item < right
  }

  nums = nums.filter(filterConsecutive())
  if (nums.length <= 2) {
    // Early return since there needs to be at least 3 items to form a hill or valley
    return 0
  }

  let count = 0

  const scanWindow: [number, number, number] = [nums[0], nums[1], nums[2]]
  let scanIndex = 3

  while (scanIndex <= nums.length) {
    if (isHill(scanWindow) || isValley(scanWindow)) count += 1

    shiftWindow(scanWindow, nums[scanIndex])
    scanIndex += 1
  }

  return count
}
