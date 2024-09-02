const passwordBox = document.getElementById("password");
const length = 11;

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList = "1234567890";
const uniqueSymbols = "!@#$%^&*()_+{}<>?";

function createPassword() {
  let password = "";

  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += uniqueSymbols[Math.floor(Math.random() * uniqueSymbols.length)];
  password += numberList[Math.floor(Math.random() * numberList.length)];

  let totalValues = lowerCase + upperCase + uniqueSymbols + numberList;

  while (length > password.length) {
    password += totalValues[Math.floor(Math.random() * totalValues.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}

let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");
eyeicon.onclick = function () {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "rpg_img/images//eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "rpg_img/images/eye-close.png";
  }
};
