const manualSort = require('./manualSort')

test('sort elements of array of numbers, from highest value to lowest value', () => {
  expect(manualSort( [1, 2, 4, 3, 5, 3, 2, 1])).toStrictEqual([5, 4, 3, 3, 2, 2, 1, 1])
})
