const heading = document.getElementById('myHeading');
const coordinatesDisplay = document.createElement('p');
coordinatesDisplay.id = 'coordinates';
coordinatesDisplay.textContent = 'Click anywhere on the page to see the coordinates';
document.body.appendChild(coordinatesDisplay);


document.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
});

// //Act4
// const heading = document.getElementById('myHeading');
// const coordinatesDisplay = document.createElement('p');
// coordinatesDisplay.id = 'coordinates';
// coordinatesDisplay.textContent = 'Click anywhere on the page to see the coordinates';
// document.body.appendChild(coordinatesDisplay);


// document.addEventListener('click', (event) => {
//     const x = event.clientX;
//     const y = event.clientY;

//     coordinatesDisplay.textContent = `X: ${x}, Y: ${y}`;
// });



//     utft.src = input.value
//    utft.style.width = "300px"
