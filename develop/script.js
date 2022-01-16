// Assignment code here
var value;
var confirmUpper;
var confirmLower;
var confirmSpecial;
var confimNumber;

//Password var values
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
upper = [];

var choices;
// Found this cool function that converts the letters to uppercase.
var toUpper = function (x) {
    return x.toUpperCase();
};
alphabet2 = alphabet.map(toUpper);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    password = generatePassword();
    document.querySelector("#password");

});

// Password generator function
function generatePassword() {
    value = window.prompt("Please input the amount of characters you would like in your password in a value between '8' and '128'")
    if (value === "" || null) {
        window.alert("Please input a value.")
    } else if (value < 8 || value > 128) {
        value = window.prompt("Please input a value between 8 and 128");
    } else {
        confirmUppercase = window.confirm("Will this contain Uppercase letters?");
        confirmLowercase = window.confirm("Will this contain Lowercase letters?");
        confirmspecial = window.confirm("Will this contain special characters?");
        confirmNumber = window.confirm("Will this contain numbers?");
    };

    if (!confimNumber && !confirmLower && !confirmUpper && !confirmSpecial) {
        choices = window.alert("Please choose at least one variable for your password.");
    }

     // Else if for 4 positive options
     else if (confirmspecial && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = special.concat(number, alphabet, alphabet2);
    }
    // Else if for 3 positive options
    else if (confirmspecial && confirmNumber && confirmUppercase) {
        choices = special.concat(number, alphabet2);
    }
    else if (confirmspecial && confirmNumber && confirmLowercase) {
        choices = special.concat(number, alphabet);
    }
    else if (confirmspecial && confirmLowercase && confirmUppercase) {
        choices = special.concat(alphabet, alphabet2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphabet, alphabet2);
    }
    // Else if for 2 positive options 
    else if (confirmspecial && confirmNumber) {
        choices = special.concat(number);

    } else if (confirmspecial && confirmLowercase) {
        choices = special.concat(alphabet);

    } else if (confirmspecial && confirmUppercase) {
        choices = special.concat(alphabet2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alphabet.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alphabet.concat(alphabet2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphabet2);
    }
    // Else if for 1 positive option
    else if (confirmspecial) {
        choices = special;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphabet;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alphabet2);
    };


var writePassword = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < value; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    var password = writePassword.join("");
    UserInput(password);
    return password;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
