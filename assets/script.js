// Assignment Code
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var symbol = "~!@#$%^&*()_?><"
var number = "1234567890"
var generateBtn = document.querySelector("#generate");
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function() {
  var select = 0;

  var select = prompt("Choose between 8-128 charters for you're password");

  if(select < 8 || select > 128 || isNaN(select)|| null){
    alert("Please select a number between 8-128");
    return("You failed to enter a number between 8-128 try again ");
  }


  var getPassword = ""; 

  var locateupper = confirm ("Would you like capital letters in the password");
  if (locateupper) {
    getPassword = upper.concat(getPassword);
  }

  var locatelower = confirm ("Would you like lowercase letters in the password");
  if (locatelower) {
    getPassword = lower.concat(getPassword);
  }

  var locatesymbol = confirm ("Would you like symbol's in the password");
  if (locatesymbol) {
    getPassword = symbol.concat(getPassword);
  }

  var locatenumber = confirm ("Would you like numbers in the password");
  if (locatenumber) {
    getPassword = number.concat(getPassword);
  }
  
  let arr = Array.from(getPassword);
  console.log(arr);
  let result = "";

  for (let i = 0; i< select; i++) {
    result += arr[Math.floor(Math.random() * arr.length)];
  }
  return result;
}







  


var listitems  ={
    lower: getlowercase,
    upper: getuppercase,
    number: getnumber,
    symbol: getsymbol
};


function getlowercase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getuppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}


function getnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getsymbol() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);