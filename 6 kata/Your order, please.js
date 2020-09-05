// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words){
  words = words.split(' ')
  let results = new Array(words.length).fill(0)
  words.forEach( word => {
    let wordLetters = word.split('')
    wordLetters.forEach( letter => {
      if (typeof +letter === "number") {
        results[+letter-1] = word
      }
    })
  })
  return results == '0' ? '' : results.join(' ')
}
