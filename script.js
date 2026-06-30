
let container = document.getElementById("container");
let gridBox = document.getElementById("gridBox");
let button = document.querySelector("button");
button.addEventListener('click',() => {
    let Size = prompt("enter size");
    generateGrid(Size);
})


function generateGrid(Size){

for (let i = 0;i<Size*Size;i++){
        let grid =  document.createElement("div");
        grid.classList.add("Grid");
        gridBox.appendChild(grid);
    }
    let gridSize = Size*Size;
    let gridBoxSize = 1000*1000/gridSize;
    let gridDimension = Math.sqrt(gridBoxSize) + "px";
    console.log(gridDimension);
}