// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// Examples
// A size 3 diamond:

//  *
// ***
//  *
// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *
// ...that is: " *\n ***\n*****\n ***\n *\n"

function diamond(n){
    let diam
    
    if ( n <= 0 || n % 2 === 0) return null
    
      let asteriskAmount = n
      let spaces = 0    
      let diamArr = []
      
      while (asteriskAmount >= 1) {
        if (asteriskAmount === n) {
          let initialString = ""
          
          for (i = 0; i < asteriskAmount; i++) {
            initialString += "*"
          }
          initialString += "\n"
          
          diamArr.push(initialString)
          
          asteriskAmount -= 2
          spaces += 1
        } else {
          let stringTemp = ""
          
          for (j = 0; j < spaces; j++) {
            stringTemp += " "
          }
          for (l = 0; l < asteriskAmount; l++) {
            stringTemp += "*"
          }
          stringTemp += "\n"
          
          diamArr.unshift(stringTemp)
          diamArr.push(stringTemp)
          
          asteriskAmount -= 2
          spaces += 1
        }
      }
      
      diam = diamArr.join('')
    
    return diam
}