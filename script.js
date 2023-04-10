// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
 // ASK the user for length
 // (Minimum of 8 characters, Maximum of 128)
 let passwordLength = parseInt(prompt("How long should the password be?"));
 // Validate length
 if (passwordLength < 8 || passwordLength > 128) {
  alert("Error, invalid password length.\nPlease choose a password greater than 8 and less than 128 characters.");
  return "";
 }
 
 // ASK the user for wich characters to include
 var includeLowerCase = confirm("Include lowercase letters in password?");
 var includeUpperCase = confirm("Include uppercase letters in password?");
 var includeNumbers = confirm("Include numbers in password?");
 var includeSpecialCharacters = confirm("Include special characters in password?");
 // Validate types of characters
 if (!includeLowerCase && !includeUpperCase && !includeNumbers && !includeSpecialCharacters) {
    alert("Error, invalid character types. \nPlease include at least one type of character.");
    return "";
  }

 // GENERATE a random password
 let passwordCharacters = [];
 const specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

 // TODO handle other character types

 if (includeSpecialCharacters){
   passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
 }

 let results = "";
 for (var i = 0; i < passwordLength; i++) {
   let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
   let randomCharcter = passwordCharacters[randomIndex];
    results += randomCharacter;
 }

// RETURN generated password at the end
return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
