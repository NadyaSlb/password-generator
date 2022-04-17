// Assignment code here
var criteria = function(){
  var criteriaOption = window.prompt("Would you like to choose password criteria? Please enter one 1 for password length, 2 for character types, 3 for both, 4 for random ctiteria.");

  criteriaOption = parseInt(criteriaOption);

  switch(criteriaOption){
    case 1:
      passwordlength();
      break;
    case 2:
      passwordCharacter();
    case 3:
      bothcriteria();
    case 4:
      randomcriteria();
    default:
      window.alert("You did not pick a valid option. Try again.");
      criteria();
  }
}
var passwordlength = function(){

  var length = window.prompt("Please, choose the length of your password. Enter the number from 8 to 128.");

if (length === ""||length === null){
  window.alert("You need to provide a valid answer! Please, try again.");

  return passwordlength();

}else if (length >= 8||length <= 128){
  window.alert("The password length is " + length);

}else{
  window.alert("You need to provide a valid answer! Please, try again.");
 
  return passwordlength();
}
}

//"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']", "^", "_", "`", "{", "|", "}", "~"//

var lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ']", "^", "_", "`", "{", "|", "}", "~"];


var passwordCharacter = function(){
  window.alert("Please confirm at least one character type.");
  var confLow = window.confirm("Confirm if you want to include lowercase characters.");{
  if (confLow){
    lowercases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  }else{
    lowercases=[];
  }
  console.log(lowercases);
}
  var confUp = window.confirm("Confirm if you want to include uppercase characters.");{
    if (confUp){
      arr1 = lowercases.concat(uppercase);
    }else{
      arr1 = lowercases;
    }
    console.log(arr1);
  }
  window.confirm("Confirm if you want to include numeric characters.");
  window.confirm("Confirm if you want to include special characters.");
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