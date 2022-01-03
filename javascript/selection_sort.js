function selectionSort(arr) {
  // type your code here
  sortedArr = []
  sortedArr = arr.sort((a, b) => {return a - b})
  return sortedArr
}

selectionSort([1, 3, 2, -1])

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  for (let i = 0; i < 1000; ++i) {
  const longInput = [];
  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.floor(Math.random()*1000));
  }

  let startTime = new Date;

  selectionSort(longInput)

  let endTime = new Date;

  let benchMark = (endTime - startTime)

  console.log(benchMark)
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
  //create new array
  //assign given array to new array once sorted
  //return sorted array
// And a written explanation of your solution
