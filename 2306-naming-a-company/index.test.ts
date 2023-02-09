import { distinctNames } from './index';

test('test1', () => {
  expect(distinctNames(['coffee', 'donuts', 'time', 'toffee'])).toEqual(6);
});

test('test2', () => {
  expect(distinctNames(['lack', 'back'])).toEqual(0);
});

test('test3', () => {
  expect(distinctNames(['a', 'back'])).toEqual(2);
});


xtest('massive list', async () => {
  const inputs = await import("./words.json")
  expect(distinctNames(inputs.ideas)).toEqual(inputs.expected);
});
