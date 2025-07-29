import { expect, test } from "vitest"
import { lengthOfLongestSubstring } from "./solution"

test.each([
  { input: " ", output: 1 },
  { input: "abcabcbb", output: 3 },
  { input: "bbbbb", output: 1 },
  { input: "pwwkew", output: 3 },
  { input: "abcddabc", output: 4 },
  { input: "dvdf", output: 3 },
])(`given $input, it returns $output}`, ({ input, output }) => {
  expect(lengthOfLongestSubstring(input)).toEqual(output)
})
