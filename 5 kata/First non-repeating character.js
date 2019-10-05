// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {

    const reducer = (acc, cur) => {
      let l = cur.toLowerCase();
      acc[l] ? acc[l][1] += 1 : acc[l] = [cur, 1];
      return acc;
    }
    
    const obj = s
      .split('')
      .reduce(reducer, {});
    
    const result = Object.values(obj).find(el => el[1] === 1);
      
    return result ? result[0] : '';
}