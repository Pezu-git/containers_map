/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import ErrorRepository from '../index.js';

test('first findErrorText_test', () => {
  const errMap = new ErrorRepository();
  expect(errMap.translate(1)).toBe('первая ошибка');
});
test('second findErrorText_test', () => {
  const errMap = new ErrorRepository();
  expect(errMap.translate(5)).toBe('пятая ошибка');
});
test('unknownError test', () => {
  const errMap = new ErrorRepository();
  expect(errMap.translate(6)).toBe('Unknown error');
});
