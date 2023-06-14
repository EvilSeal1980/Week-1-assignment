/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var arr1 = str.split("");
  // Here we take a copy of arr1 and reverse it
  // if we write arr1.reverse() it will not change the original array 
  var arr2 = [...arr1].reverse();
  var str1 = arr1.join("").toLowerCase();
  var str2 = arr2.join("").toLowerCase(); 
  if (str1 === str2) {
    return true;
  }
  else {
    return false;
  }

}

const str = "Nan";

console.log(isPalindrome(str));

module.exports = isPalindrome;
