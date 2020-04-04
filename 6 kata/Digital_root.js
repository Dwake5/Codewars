A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n.
If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
This is only applicable to the natural numbers.

Essentially sum of the digits of a number, if thats a single digit return it,
otherwise call this function recursively until it is a single digit.


const digital_root = n => {
  let digits = (n + '').split('')
  let answer = digits.reduce((a,b) => parseInt(a) + parseInt(b), 0)
  
  if (answer.toString().length === 1) {
    return answer
  } else {
    return digital_root(answer)
  }
}

// digital_root(142)
// => 7

// digital_root(196)
// => 16
// digital_root(16)
// => 7
