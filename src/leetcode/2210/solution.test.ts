import { expect, test } from "vitest";
import { countHillValley } from "./solution";

test.each([
  { input: [], output: 0 },
  { input: [1, 2], output: 0 },
  { input: [1, 1, 1], output: 0 },
  { input: [1, 2, 1], output: 1 },
  { input: [2, 1, 2], output: 1 },
  { input: [2, 1, 1, 2], output: 1 },
  { input: [2, 4, 1, 1, 6, 5], output: 3 },
  { input: [6, 6, 5, 5, 4, 1], output: 0 },
])(`given $input, it returns $output}`, ({ input, output }) => {
  expect(countHillValley(input)).toEqual(output);
});
