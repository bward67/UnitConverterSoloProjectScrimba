const displayLength = document.querySelector(".length-p");
const displayVolume = document.querySelector(".volume-p");
const displayMass = document.querySelector(".mass-p");
const convertBtn = document.querySelector(".convert-btn");
const inputEl = document.getElementById("input");

// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

convertBtn.addEventListener("click", conversion);

function conversion() {
  let inputValue = inputEl.value;

  displayLength.textContent = `${inputValue} meters = ${(
    inputValue * 3.28084
  ).toFixed(3)} feet | ${inputValue} feet = ${(inputValue * 0.3048).toFixed(
    3
  )} meters`;

  displayVolume.textContent = `${inputValue} liters = ${(
    inputValue * 0.264172
  ).toFixed(3)} | ${inputValue} gallons = ${(inputValue * 3.785412).toFixed(
    3
  )}`;

  displayMass.textContent = `${inputValue} kilos = ${(
    inputValue * 2.205
  ).toFixed(3)} pounds | ${inputValue} pounds = ${(
    inputValue * 0.45359237
  ).toFixed(3)} kilos`;
}
