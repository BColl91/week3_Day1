const heading = document.getElementById('myHeading');
const colorInput = document.getElementById('colorInput');
const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', () => {
    const newColor = colorInput.value;

    heading.style.color = newColor;
});