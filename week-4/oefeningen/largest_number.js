const arr = [33, 235, 345, 412, 87, 234, 768, 43, 23];

function findLargestNumber(arr) {
  let output = null;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > output) {
      output = arr[i];
    }
  }
  return output;
}

console.log(findLargestNumber(arr));
