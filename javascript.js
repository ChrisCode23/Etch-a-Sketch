const container = document.querySelector(".container");

let square = document.createElement("div");
square.classList.add("square");

let row = document.createElement("div");
row.classList.add("row");

// Default value for grid size
let size = 16;

// Clones row inside container a certain amount of times based on size argument
function cloneRow(size) {
    for (let i = 0; i < size; i++){
        container.appendChild(row.cloneNode(true));
    }
}

cloneRow(size);



// Each row will append a certain number of cloned squares based on size argument
function cloneSquare(size) {
    // Selects all rows
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
        for (let i = 0; i < size; i++){
            row.appendChild(square.cloneNode(true));
        }
    });
}

cloneSquare(size);



// NodeList of all squares
const squares = document.querySelectorAll(".square");

// Colors a square whenever mouse is over
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("selected");
    })
})



const button = document.querySelector("#prompt");
button.addEventListener("click", () => {
    size = parseInt(prompt("Enter the size of the new grid", "16"));
    
    container.replaceChildren();
    cloneRow(size);
    cloneSquare(size);
})





