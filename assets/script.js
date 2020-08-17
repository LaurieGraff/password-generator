// Assignment code here
// generates a random password

// ability to select criteria to include in the password
// prompted for length of password
// 8-128 characters

// at least one character type selected
// when all prompts are answered, password is generated
// password displayed in alert or written to page

//var alpha = "abcdefghijklmnopqrstuvwxyz";
  //var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //var numeric = "0123456789";


var alpha = confirm("Do you want to include lowercase letters in your password?"); 
var caps = confirm("Do you want to include uppercase letters in your password?");
var numeric = confirm("Do you want to include numbers in your password?");
var special = confirm("Do you want to include special characters in your password?");
var length = prompt("How many characters would you like your password to be? (8-128)")

function createPassword (length) {
  var alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numeric = ['0','1','2','3','4','5','6','7','8','9'];
  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  if (alpha) {
    finalCharacters = finalCharacters.concat(getRandom(alphaCharacters));
  }
  if (caps) {
    finalCharacters = finalCharacters.concat(getRandom(capsCharacters));
  }
  if (numeric) {
    finalCharacters = finalCharacters.concat(getRandom(numericCharacters));
  }
  if (special) {
    finalCharacters = finalCharacters.concat(getRandom(specialCharacters));
  } else {
    alert("Must select at least one type of character!");
  }
}
// Get references to the #generate element




var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
