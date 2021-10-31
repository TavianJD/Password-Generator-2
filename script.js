// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_+-={}[]:;";
var userChoice = "";
var password = "";


// Write password to the #password input
function writePassword() {

  var PasswordLength = parseInt(prompt("How many characters do you want in your password? (Please choose between 8-128)"))
  console.log("passwordLength", PasswordLength);
  if (PasswordLength < 8) {
    alert("Please choose a number greater than 8 and less than 128")
    return;
  } else if (PasswordLength > 128) {
    alert("Please choose a number greater than 8 and less than 128")
    return;
  } else {

    var littleLetters = window.confirm("Would you like lowercase letters in your password?")
    console.log("little letters", littleLetters)
    var bigLetters = window.confirm("Would you like uppercase letters in your password?")

    var nums = window.confirm("Would you like numberss in your password?")

    var specialCharacters = window.confirm("Would you like special characters in your password?")

    if (littleLetters === true) {
      userChoice += lowercase;
      // += is the same as userChoice + lowercase = userChoice    
    }

    if (bigLetters === true) {
      userChoice += uppercase;
    }

    if (nums === true) {
      userChoice += numbers;
    }

    if (specialCharacters === true) {
      userChoice += specialChar;
    }
    console.log("USERCHOICE", userChoice)

     for(var i = 0; i < PasswordLength; i++) {
      
      var randomizer = Math.floor(userChoice.length * Math.random())
      console.log("randomizer", randomizer)
      password += userChoice.charAt(randomizer)
      console.log(password)
    } 

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//var fruits = ["apple", "orange", "banana", "grapes", "mangos"]

//for(var i = 0; i < fruits.length; i++){
  //console.log(i)
  //console.log(fruits[i])

//}

// IF STATEMENT

// if(userChoice === "View All Employees"){
  // fire off viewAllEmployees() function
//}

// SWITCH STATEMENT

// switch(userChoice){
// case "View All Employees":
// fire off viewAllEmployees() function
//}