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

  var select = prompt("make password 8 - 128");

  if(select < 8 || select > 128 || isNaN(select)|| null){
    alert("you failed");
    return("you failed");
  }


  var getPassword = ""; 

  var locateupper = confirm ("do you want caps");
  if (locateupper) {
    getPassword = upper.concat(getPassword);
  }

  var locatelower = confirm ("do you want caps");
  if (locatelower) {
    getPassword = lower.concat(getPassword);
  }

  var locatesymbol = confirm ("do you want caps");
  if (locatesymbol) {
    getPassword = symbol.concat(getPassword);
  }

  var locatenumber = confirm ("do you want caps");
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