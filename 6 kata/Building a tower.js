// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Ruby: returns an Array;
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]


function towerBuilder(n) {
    let arr = []
  
    for (let i = 0; i < n; i++) {
      let str = repeat('*', ((n*2)-1))
      for( let j = 0; j < i; j++) {
        str = str.replaceAt(j, " ")
        str = str.replaceAt(str.length-1-j, " ")
      }
      arr.unshift(str)
    }
    return arr
}
  
const repeat = (str,x) => {return Array(x+1).join(str) }

String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}