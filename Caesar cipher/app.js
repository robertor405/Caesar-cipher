function rot13(str) {
  // Initialize an empty string to store the solved message
  let solved = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code of the current character
    let asciiNum = str[i].charCodeAt(); // charCodeAt takes a letter and gives back the asciicode

    // Check if the ASCII code is within the range of 'A' to 'M'
    if (asciiNum >= 65 && asciiNum <= 77) {
      // If so, add 13 to the ASCII code and get the corresponding character
      solved += String.fromCharCode(asciiNum + 13);// fromCharCode takes the asciinumber and gives back the letter
    }
    // Check if the ASCII code is within the range of 'N' to 'Z'
    else if (asciiNum >= 78 && asciiNum <= 90) {
      // If so, subtract 13 from the ASCII code and get the corresponding character
      solved += String.fromCharCode(asciiNum - 13);
    } else {
      // If the character is not a letter, simply add it to the solved string as is
      solved += str[i];
    }
  }

  // Return the solved message
  return solved;
}

// Test the rot13 function with the input "SERR PBQR PNZC"
console.log(rot13("SERR PBQR PNZC"));



//[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
// change the inputs below to test
// rot13 ("SERR PBQR PNZC"))

console.log(rot13("SERR PBQR PNZC"))

//----------------Telephone Number Validator-------------------

function telephoneCheck(str) {
  // Regular expression pattern for validating a US phone number
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;

  // Test if the input string matches the regular expression pattern
  return regex.test(str);
}

// Test the telephoneCheck function with the input "555-555-5555"
console.log(telephoneCheck("555-555-5555"));

// ^ asserts the start of the string.
// 1? matches an optional "1" character (for country code).
// \s? matches an optional whitespace character.
// (\d{3}|\(\d{3}\)) matches either three digits or three digits enclosed in parentheses (area code).
// -? matches an optional hyphen.
// \s? matches an optional whitespace character.
// \d{3} matches three digits (first three digits of phone number).
// -? matches an optional hyphen.
// \s? matches an optional whitespace character.
// \d{4} matches four digits (last four digits of phone number).
// $ asserts the end of the string.
// g flag enables global matching.
// m flag enables multiline matching.