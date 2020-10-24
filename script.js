var lowerCasedCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var upperCasedCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var specialCharacters = ["!","@","#","$","%","&", "(",")","_","-","+","}","{","[","]","^",".",",","/","~","`"];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


function getPasswordOptions() {
  //parseInt() is to turn any string into an interger.   
  var length = parseInt(
    prompt('How many characters would you like your password to contain?')
  );


  if (isNaN(length) === true) {
    alert('Password length must be provided as a number');
    return;
  }

 if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

 if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

  var hasLowerCasedCharacters = confirm(
    "Click OK to confirm including lowercase characters."
  );

  var hasUpperCasedCharacters = confirm(
    "Click OK to confirm including uppercase characters."
  );

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  if (
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasSpecialCharacters === false &&
    hasNumericCharacters === false
    
  ) {
    alert('Must select at least one character type');
    return;
  }


  var passwordOptions = {
    length: length,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters
    
  };
  return passwordOptions;
}


function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}


function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];


  // these conditional statements are repeated to assure that we get atleast one character from each set
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }


  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
 

  // options variable equals function getPasswordOptions which is basically to verify. length of number you chose 
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
// result stores the possible character once and pushes the next
    result.push(possibleCharacter);
  }
console.log(possibleCharacter);
console.log(possibleCharacters);
  
  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }
//
  
  return result.join("");//joint string
  
}


var generateBtn = document.querySelector('#generate');


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}


generateBtn.addEventListener('click', writePassword);

