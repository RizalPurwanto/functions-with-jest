function manualSort(array) {
    let sorted = false; // to check whether while loop is still need to done
  
    while (!sorted) {
      // loop repeated if array still not sorted
      sorted = true;
  
      //set true first
  
      for (let i = 0; i < array.length; i++) {
        //loop through all the array elements
  
        let prevValue = array[i - 1];
        let currentValue = array[i];
  
        if (prevValue < currentValue) {
          //if undesired value, such as previous value is lesser than current,
          // set sorted  to false to signal that while loop need to be done again until all sorted
  
          sorted = false;
          let newCurrentValue = prevValue;
          //declare newCurrent value
  
          array[i - 1] = currentValue;
          array[i] = newCurrentValue;
          //swap the elements involved in this for loop
        }
      }
    }
  
    // console.log(array)
    return array;
  }
  
  const testSort1 = [1, 2, 4, 3, 5, 3, 2, 1];
  const testSort2 = [-3, 4, 0, -2, 6, -1];
  
  //manualSort(testSort2)

  module.exports = manualSort  