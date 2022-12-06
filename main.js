const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generatePassword = document.querySelector("#generate-pass");
let radioBtns = document.querySelectorAll('input[name="len"]');

generatePassword.addEventListener("click", () => {
  let len;
  for (const radioBtn of radioBtns) {
    if (radioBtn.checked) {
      len = radioBtn.value;
      break;
    }
  }
  passLength(len);
});

function passLength(passLen) {
  generatePass("pass1", passLen);
  generatePass("pass2", passLen);
}

function generatePass(id, passLen) {
  let password = "";
  for (let i = 0; i < passLen; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }
  document.getElementById(id).textContent = password;
}


