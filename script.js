const input = document.getElementById("rangeInput");
const container = document.getElementById("container");
const rowSize = document.querySelector(".rangeValue2");
const colSize = document.querySelector(".rangeValue");
const colorMode = document.getElementById('colorMode');
const rainbow = document.getElementById('rainbow');
const grey = document.getElementById('grey');
const eraser = document.getElementById('eraser');
const clear = document.getElementById('clear');
const divs = container.getElementsByTagName("div");
const buttons = document.querySelectorAll("button")

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

container.addEventListener("mouseover", (e) => {
    e.target.style.background = "black";
})

function newColor(){
    let theInput = document.getElementById("c-picker");

    theInput.addEventListener('input', ()=>{
        let theColor = theInput.value;
        container.addEventListener("mouseover", (e) => {
            e.target.style.background = theColor;
        })
    })

    let theColor = theInput.value;
        container.addEventListener("mouseover", (e) => {
            e.target.style.background = theColor;
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

function greyScale(e){
        e.target.style.backgroundColor = "black";
        e.target.style.opacity = (parseFloat(e.target.style.opacity) || 0) + 0.1; 
}

colorMode.addEventListener("click",()=>{
    container.removeEventListener("mouseover", greyScale);
    newColor();
})

rainbow.addEventListener("click", ()=>{
    container.removeEventListener("mouseover", greyScale);
    rainbowColor();
})

grey.addEventListener("click",()=>{
    container.addEventListener("mouseover", greyScale);
})

eraser.addEventListener('click', () => {
    container.removeEventListener("mouseover", greyScale);
    eraserButton();
})

clear.addEventListener('click', ()=>{
    container.removeEventListener("mouseover", greyScale);
    createGrid(parseInt(input.value));
})

buttons.forEach(button => {
    button.addEventListener('click',()=>{
       buttons.forEach(btn => {
        btn.classList.remove('active');
       });

       button.classList.add('active');
    })
})