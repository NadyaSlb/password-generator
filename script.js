// Assignment code here
// Global variables
var allcharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']", "^", "_", "`", "{", "|", "}", "~"];

var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']", "^", "_", "`", "{", "|", "}", "~"];

// Functions
//Generate password
function generatePassword(){
  var password = "";
  var length = passwordlength();
  var symbols = passwordCharacter();
  for (var i = 0; i < length; i++){
    var random = symbols[Math.floor(Math.random() * symbols.length)];
    console.log(random);
password += random;
console.log(password);
  }
return password;
}
//Select length
var passwordlength = function(){
  var length = "";

length = window.prompt("Please, choose the length of your password. Enter the number from 8 to 128.");

if (length >= 8 && length <= 128){
  window.alert("The password length is " + length);

}else{
  window.alert("You need to provide a valid answer! Please, try again.");
 
  return passwordlength();
}
return length;
}
//Select characters
var passwordCharacter = function(){
  var symbols = [];
  window.alert("Please confirm at least one character type.");

  var confLow = window.confirm("Confirm if you want to include lowercase characters.");{
  if (confLow){
   symbols = symbols.concat(lowercases);}
  console.log(symbols);
}
  var confUp = window.confirm("Confirm if you want to include uppercase characters.");{
    if (confUp){
  symbols = symbols.concat(uppercase);}
    console.log(symbols);
  }

  var confnum = window.confirm("Confirm if you want to include numeric characters.");{
    if (confnum){
      symbols = symbols.concat(numeric);}
    console.log(symbols);
  }

  var confspec = window.confirm("Confirm if you want to include special characters.");{
    if (confspec){
      symbols = symbols.concat(special);}
    console.log(symbols);
  }

  if (symbols.length === 0){
    window.alert("You need to provide a valid answer! Please, try again.");
    return passwordCharacter();
}
return symbols;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);