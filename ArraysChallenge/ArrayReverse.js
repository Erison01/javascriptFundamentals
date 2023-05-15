function reverse(arr) {
    // your code here
    arr.reverse();
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

// another solution using for loop
/*
function reverse(arr) {
  var reverseArr = [];

  for (var i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }

  return reverseArr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // Output: ["e", "d", "c", "b", "a"]
*/
