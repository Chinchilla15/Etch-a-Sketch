const input = document.querySelector("#rangeInput");
const container = document.querySelector("#container");
const rowSize = document.querySelector(".rangeValue2");
const colSize = document.querySelector(".rangeValue");


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
