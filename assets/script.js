// Assignment Code
var generateBtn = document.querySelector("#generate");


// Create variables for what the generated password can choose from


var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharArray =  ["@", "?", "$", "#"];


// Making the selection in each array random


    // Making a list of questions to ask

function generatePassword() {
  var finalPassword = "";
  var possibleCharacters = [];
    var answers = parseInt (prompt ("How many characters do you want your password?"));
      
      if (answers < 8 || answers > 128) {
      alert("Character must be between 8 and 128")
      return
      
  }
  // console.log(hasUpperCaseArray)
    hasUpperCaseArray = confirm("Do you want uppercase?")
    hasLowerCaseArray = confirm("Do you want lowercase")
    hasNumericArray = confirm ("Do you want numbers?")
    hasSpecialCharArray = confirm ("Do you want special characters?")
    console.log(hasUpperCaseArray)
    
    if (hasUpperCaseArray === true) {
      finalPassword += upperCaseArray[Math.floor(Math.random()*upperCaseArray.length)];
      possibleCharacters = possibleCharacters.concat(upperCaseArray);
    }
        
    if (hasLowerCaseArray === true){
      finalPassword += lowerCaseArray[Math.floor(Math.random()*lowerCaseArray.length)];
      possibleCharacters = possibleCharacters.concat(lowerCaseArray);
    }

    if (hasSpecialCharArray === true){
      finalPassword += specialCharArray[Math.floor(Math.random()*specialCharArray.length)];
      possibleCharacters = possibleCharacters.concat(specialCharArray);
    }

    if (hasNumericArray === true){
      finalPassword += numericArray[Math.floor(Math.random()*numericArray.length)];
      possibleCharacters = possibleCharacters.concat(numericArray);
    }

    if (hasUpperCaseArray + hasLowerCaseArray + hasNumericArray + hasSpecialCharArray === 0) {
        alert("Please enter fields")
        return
    }
    console.log("final password", finalPassword)
    console.log(possibleCharacters)

    for (i = finalPassword.length; i < answers; i++) {
      finalPassword += possibleCharacters[Math.floor(Math.random()*possibleCharacters.length)];
    }
    console.log("at the end of the function", finalPassword);
    console.log(finalPassword.length);
    return finalPassword;

  }
  

  // Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
