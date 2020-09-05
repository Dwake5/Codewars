// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


function iqTest(numbers){
  let numbs = numbers.split(' ')
  let odd = 0, oddFound, even = 0, evenFound
  
  for (let i = 0; i < numbs.length; i++) {
    numbs[i] % 2 === 0 ? even++ : odd++
    if (numbs[i] % 2 === 0 && even === 1) evenFound = numbs[i]
    if (numbs[i] % 2 === 1 && odd === 1) oddFound = numbs[i]
  }

  return odd == 1 ? numbs.indexOf(oddFound)+1 : numbs.indexOf(evenFound)+1
  
}
