
let container = document.getElementById("container");
let gridBox = document.getElementById("gridBox");
let button = document.querySelector("button");

button.addEventListener('click',() => {
    let Size = prompt("enter size");
    generateGrid(Size);
})

for (let j = 0;j<256;j++){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    let defaultGrid = document.createElement("div")
    gridBox.appendChild(defaultGrid)
    defaultGrid.style.width = "60px";
    defaultGrid.style.height = "60px";
    defaultGrid.style.border = "1px solid black";
    defaultGrid.addEventListener('mouseover',() => {
        defaultGrid.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    });
    button.addEventListener('click',() => {
        defaultGrid.remove();
    })
}

function generateGrid(Size){
    let gridSize = Size*Size;
    let gridBoxSize = 1000*1000/gridSize;
    let gridDimension = Math.round(Math.sqrt(gridBoxSize)-2.5) + "px" ;
for (let i = 0;i<Size*Size;i++){
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        let grid =  document.createElement("div");
        grid.style.width = gridDimension;
        grid.style.height = gridDimension;
        grid.classList.add("Grid");
        gridBox.appendChild(grid);
        grid.addEventListener('mouseover',(event) => {
        grid.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    });
    }

}