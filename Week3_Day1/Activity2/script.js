myImage.style.width = "200px"
myImage.style.height = auto

const myImageutft = document.getElementById(`myImage`)
const url = document.getElementById(`imageURL`)
const input = document.getElementById(`updateImage`)
url.addEventListener( `click`, () => {
    myImage.src = input.value
    myImage.style.width = "300px"
}
)