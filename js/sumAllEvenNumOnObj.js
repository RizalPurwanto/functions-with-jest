


function sumAllEvenNumberOnObject(object) {
    let evenNumArr = []
    function loopObjAndPushEvenNumbers(obj) {
        for (let key in obj) {
            if(Number.isInteger(obj[key]) &&  obj[key]%2 === 0 ) {
                evenNumArr.push(obj[key])
            } else if (typeof obj[key] == 'object') {
                loopObjAndPushEvenNumbers(obj[key])
            }
        }
    }

    loopObjAndPushEvenNumbers(object)
    const sum = evenNumArr.reduce((accumulator, value) => accumulator + value)
    console.log(evenNumArr, sum)
    return sum
}

const testSumAllEvenNumberOnObject1 ={
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }

const testSumAllEvenNumberOnObject2 ={
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
}

sumAllEvenNumberOnObject(testSumAllEvenNumberOnObject2)

module.exports = sumAllEvenNumberOnObject