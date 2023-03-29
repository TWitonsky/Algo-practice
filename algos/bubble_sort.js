/*
Write a function that takes in an array of integers and returns a sorted version of that array.
Use the Bubble Sort algorithm to sort the array in place.

SAMPLE:
array = [8, 2, 9, 5, 6, 3]

output: [2, 3, 5, 5, 6, 8, 9]
*/

function bubble_sort(array) {
  for(var i = 0; i < arr.length; i++){
    
    // Last i elements are already in place 
    for(var j = 0; j < ( arr.length - i -1 ); j++){
       
      // Checking if the item at present iteration
      // is greater than the next iteration
      if(arr[j] > arr[j+1]){
         
        // If the condition is true then swap them
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j+1] = temp
      }
    }
  }
  // Print the sorted array
  console.log(arr);
}

module.exports = { bubble_sort };
