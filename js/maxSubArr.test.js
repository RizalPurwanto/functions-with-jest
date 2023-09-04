const maxSubArray =require('./maxSubArr')
test('return the maximum sum of the sub-arrays from an array', () => {
  expect(maxSubArray( [100, 200, 300, 400], 2)).toBe(700)
})

test('return the maximum sum of the sub-arrays from an array', () => {
  expect(maxSubArray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39)
})

test('return the maximum sum of the sub-arrays from an array', () => {
  expect(maxSubArray([-3, 4, 0, -2, 6, -1], 2)).toBe(5)
})