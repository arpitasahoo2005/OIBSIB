const inputBox = document.getElementById("inputBox");

const CtoF = document.getElementById("CtoF");

const FtoC = document.getElementById("FtoC");

const result = document.getElementById("result");
let temp, tempafter;

function convert() {
  event.preventDefault();
  if (CtoF.checked) {
    temp = Number(inputBox.value);
    tempafter = (temp * 9) / 5 + 32;
    result.textContent = `${temp}°C is ${tempafter}°F`;
  } 
  else if (FtoC.checked) {
    temp = Number(inputBox.value);
    tempafter = ((temp - 32) * 5) / 9;
    result.textContent = `${temp}°C is ${tempafter}°F`;
  }
   else {
    result.textContent = `Please select a unit`;
  }
}