let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectColorHexCodeElement = document.getElementById("selectedColorHexCode");

function colorChangetoGrey() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectColorHexCodeElement.textContent = "#e0e0e0";
}

function colorChangetoGreen() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectColorHexCodeElement.textContent = "#6fcf97";
}

function colorChangetoBlue() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectColorHexCodeElement.textContent = "#56ccf2";
}

function colorChangetoPurple() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectColorHexCodeElement.textContent = "#bb6bd9";
}