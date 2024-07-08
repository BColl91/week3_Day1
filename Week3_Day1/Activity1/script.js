

const button = document.getElementById('toggleButton');
const image = document.getElementById('myImage');

image.style.width = "300px";

button.addEventListener('click', () => {
    console.log("testing")
    if (image.style.display === 'none') {
        image.style.display = 'block';
        button.textContent = 'Hide Image';
    } else {
        image.style.display = 'none';
        button.textContent = 'Show Image';
    }
});