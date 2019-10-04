// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]


function wave(str){
    let result = []  
    for (let i = 1; i <= str.length; i++) {
      str2 = str.slice(0,i-1) + str.slice(i-1,i).toUpperCase()+ str.slice(i)
      result.push(str2)
    }
    return result.filter( word => word !== word.toLowerCase())
}