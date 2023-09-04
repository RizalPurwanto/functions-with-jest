const sumAllEvenNumberOnObject = require('./sumAllEvenNumOnObj')

test('sum all even numbers from input object', () => {
    expect(sumAllEvenNumberOnObject({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
          }
        }
      })).toBe(6)
  })

  test('sum all even numbers from input object', () => {
    expect(sumAllEvenNumberOnObject({
        a: 2,
        b: {b: 2, bb: {b: 3, bb: {b: 2}}},
        c: {c: {c: 2}, cc: 'ball', ccc: 5},
        d: 1,
        e: {e: {e: 4}, ee: 'car'}
      })).toBe(12)
  })