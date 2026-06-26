let container = document.getElementById("container")

let button = document.querySelector("button")
button.addEventListener('click',(event) => {
    let size = prompt("enter grid size");
    generateGrid(size);

})

function generateGrid(size){
    for (let i = 0;i<size;i++){
        for (let j = 0;j<size;j++){
            let grid = document.createElement("div")
            grid.classList.add("grid")
            grid.addEventListener('mouseover',(event) =>{
            grid.style.backgroundColor = "red";
        });
            container.appendChild(grid)
        }
    }
}
