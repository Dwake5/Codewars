// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

function sortArray(array) {
    let oddArr = []
    let maxMore = Math.max(...array)+1
    array.forEach( (el, index) => {
      if(el % 2 !== 0) {
        oddArr.push(el)
        array[index] = maxMore
      }
    })
    
    oddArr.sort(function(a, b) { return a > b ? 1 : -1});
    let oddArrPos = 0
    
    array.forEach( (el,index) => {
      if(el === maxMore){
        array[index] = oddArr[oddArrPos]
        oddArrPos++
      }
    })
    
    return array
}