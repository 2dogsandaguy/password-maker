// Assignment Code
var generateBtn = document.querySelector("#generate");
var password =

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword ) 


  


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
console.log(getlowercase());

console.log(getuppercase());

console.log(getnumber());

console.log(getsymbol());

