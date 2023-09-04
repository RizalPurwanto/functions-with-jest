function maxSubArray(array, num) {
    let max = Number.MIN_VALUE;
    //declare max value, using JS' Number.MIN_VALUE
  
    for (let i = 0; i < array.length; i++) {
      // loop through all the array's elements
  
      let subArray = array.slice(i, i+num)
      // get sub-array suing slice function, and using the number input
  
      let sumOfSubArray = subArray.reduce((accumulator, value) => accumulator + value)
      // get the sum of all sub-array's elements using reduce function
  
      // console.log(subArray, sumOfSubArray)
  
      sumOfSubArray > max ? max = sumOfSubArray : ''
      //if the sum is higher than current 'max' variable value, set the sum as the current 'max' value
    }
    console.log('maximum sum of subarray, ', max)
    return max
  }
  
  const testMaxSubArray1 = {
    arr: [100, 200, 300, 400],
    num: 2,
  };
  
  const testMaxSubArray2 = {
    arr: [1, 4, 2, 10, 23, 3, 1, 0, 20],
    num: 4,
  };
  
  const testMaxSubArray3 = {
    arr: [-3, 4, 0, -2, 6, -1],
    num: 2,
  };
  
  // maxSubArray(testMaxSubArray1.arr, testMaxSubArray1.num)
  // maxSubArray(testMaxSubArray2.arr, testMaxSubArray2.num)
  // maxSubArray(testMaxSubArray3.arr, testMaxSubArray3.num)
  
module.exports = maxSubArray  