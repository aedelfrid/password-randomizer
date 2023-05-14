var generateBtn = document.querySelector("#generate");
var password = undefined;
var passLen = undefined;
var criteria = ["lowercase", "uppercase", "numeric", "special"];

const lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const uppercaseCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const specialCharacters = ["!","@","#","$","%","&","*","(",")","-","_","=","+","'",".","/","<"]

function writePassword() {
  checkCriteria();
  document.getElementById("password").innerHTML = password;

  criteria = ["lowercase", "uppercase", "numeric", "special"];
  password = null;
}

generateBtn.addEventListener("click", writePassword);

function checkCriteria() {
  alert("Welcome to the password generator wizard!");

  passLen = prompt("How long would you like the password to be?\nBe aware it must be at least 8 and at most 128 characters.")

  if (!confirm("Would you like the password to include special characters?\nYou must select at least one password criteria.")) {
      criteria.pop()
  };
  if (!confirm("Would you like the password to include numeric characters?\nYou must select at least one password criteria.")) {
      criteria.pop()
  };
  if (!confirm("Would you like the password to include uppercase characters?\nYou must select at least one password criteria.")) {
      criteria.pop()
  };
  if (!confirm("Would you like the password to include lowercase characters?\nYou must select at least one password criteria.")) {
      criteria.pop()
  };

  validateLen();
}

function validateLen() {
  if (passLen >= 8 && passLen <= 128) {
    validate()
  } else {
    alert("Your password must be at least 8 and at most 128 characters!\nPlease try again.")
  }
}

function validate() {
  if (criteria.length >= 1) {
    generate()
  } else {
    alert("You must select at least one password criteria!\nPlease try again.")
  }
}

function generate() {
  let determiner = null;
  determiner = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      if (determiner == 0) {
          var lower = Math.floor(Math.random() * (25 - 0 + 1)) + 0
          password = lowercaseCharacters[lower];
      } else if (determiner == 1) {
          var upper = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
          password = uppercaseCharacters[upper];
      } else if (determiner == 2) {
          password = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
      } else if (determiner == 3) {
          var special = Math.floor(Math.random() * (16 - 0 + 1)) + 0;
          password = specialCharacters[special];
      }
    
  for (let i = 0; i < passLen; i++) {
      determiner = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
      if (determiner == 0) {
          var lower = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
          password += lowercaseCharacters[lower];
          continue
      } else if (determiner == 1) {
          var upper = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
          password += uppercaseCharacters[upper];
          continue
      } else if (determiner == 2) {
          password += Math.floor(Math.random() * (9 - 0 + 1)) + 0;
          continue
      } else if (determiner == 3) {
          var special = Math.floor(Math.random() * (16 - 0 + 1)) + 0;
          password += specialCharacters[special];
          continue
      }
    }
}

