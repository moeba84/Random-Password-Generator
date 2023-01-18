// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
  var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+{}[|]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 8;
  var password = ("");
  passwordText.value = password;
    for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password +=chars.substring(randomNumber,randomNumber +1)
  }  
  passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
  alert ( "generatePassword");
}