const input = document.getElementById("rangeInput");
const container = document.getElementById("container");
const rowSize = document.querySelector(".rangeValue2");
const colSize = document.querySelector(".rangeValue");
const color = document.getElementById('color');
const rainbow = document.getElementById('rainbow');
const gray = document.getElementById('gray');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const divs = container.getElementsByTagName("div");

// Update rowSize and colSize values on input change
input.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);
    rowSize.textContent = value;
    colSize.textContent = value;
    createGrid(value);
});

function createGrid(size) {
    // Clear previous grid
    container.innerHTML = "";

    container.style.setProperty("--size", size);

    // Create grid cells
    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        container.appendChild(cell);
        cell.classList.add("cell");
    }
}

createGrid(parseInt(input.value));

function blackColor(){
    container.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
    })
}

function rainbowColor(){
    container.addEventListener("mouseover", (e) => {
        e.target.style.background = "#" + (Math.random()*0xFFFFFF<<0).toString(16);
    })
}

function eraserButton(){
    container.addEventListener("mouseover", (e) => {
        e.target.style.background = "white";
    })
}

function clearContainer(){
    
}

color.addEventListener("click",()=>{
    blackColor();
})

rainbow.addEventListener("mouseover", ()=>{
    rainbowColor();
})

gray.addEventListener("click",()=>{
    alert("Gray Scale Clicked!")
})

eraser.addEventListener('click', () => {
    eraserButton();
})

clear.addEventListener('click', ()=>{
    clearContainer();
})