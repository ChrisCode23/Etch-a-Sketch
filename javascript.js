const container = document.querySelector(".container");

let square = document.createElement("div");
square.classList.add("square");

const row = document.createElement("div");
row.classList.add("row");

// Clones row 16 times inside container
for (let i = 0; i < 16; i++){
    container.appendChild(row.cloneNode(true));
}

// Selects all rows
const rows = document.querySelectorAll(".row");

// Each row will append 16 cloned squares
rows.forEach((row) => {
    for (let i = 0; i < 16; i++){
        row.appendChild(square.cloneNode(true));
    }
});

const squares = document.querySelectorAll(".square");


squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("selected");
    })
})

/*
const squareDebug = document.createElement("div");
squareDebug.classList.add("square");

document.body.appendChild(squareDebug);

squareDebug.addEventListener("mouseover", () => {
    squareDebug.classList.add("selected");
})
*/

//There are 16 rows, each one has the square which is cloned by 16. Square is child of row. Row is child of container


