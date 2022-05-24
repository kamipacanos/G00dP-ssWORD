// Assignment code here
var characterLength = 8 > 128; 
var userChoice = [];
var symbols = ["!", "@", "#", "%", "^", "&", "*", "~"]; 
var lowerCase = ["a", "b", "c", "d", "e","f", "g", "h", "i","j", "k", "l", "m","n", "o", "p", "q","r", "s", "t", "u","v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E","F", "G", "H", "I","J", "K", "L", "M","N", "O", "P", "Q","R", "S", "T", "U","V", "W", "X", "Y", "Z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 



// Get references to the #generate element
// reference HTML line 28 
// We use this variable to target the red "generate Password" button 
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// when the user clicks the "generate password" button, it will call the writePassword function 
generateBtn.addEventListener("click", writePassword);


// My getResponsePassword Function 
function getResponse() {
  characterLength = prompt("Yo, Yo, Yo! How many characters do you want in your password? One rule! Choose a number between 8 - 128!")
  if (characterLength < 8 || characterLength >128){
    alert("Hey, hey, hey! Follow the rules! The amount of characters you can choose from is at least 8 character and no more than 128 chracters.");
    return false; 
  }

  if (confirm("Another question! Would you like lowercase letters in your password?")){
    userChoice = userChoice.concat(lowerCase); 
  }

  if (confirm("Another question! Would you like uppercase letters in your password?")){
    userChoice = userChoice.concat(upperCase); 
  }

  if (confirm("Another question! Would you like numbers in your password?")){
    userChoice = userChoice.concat(numbers); 
  }

  if (confirm("Another question! Would you like special characters in your password?")){
    userChoice = userChoice.concat(symbols); 
  }

  return true; 
}

//My generatePassword Function 
function generatePassword (){
  var password = ""; 
  for(var i = 0; i < characterLength; i++){ 
    var randomIndex = Math.floor(Math.random() * userChoice.length);  
    password = password + userChoice[randomIndex]; 
  }

  return password;
}


// Write password to the #password input
function writePassword() {
  var promptOptions = getResponse(); 
  var passwordText = document.querySelector("#password");

if(promptOptions){
  var newPassword = generatePassword(); 
  passwordText.value = newPassword;
  } else{
    passwordText.value = "";
  }
}