let container = document.getElementById("container")
for (let i = 0;i<16;i++){
    for (let j = 0;j<16;j++){
        let grid = document.createElement("div")
        grid.classList.add("grid")
        grid.addEventListener('mouseover',(event) =>{
        grid.style.backgroundColor = "red";
    });
        container.appendChild(grid)
    }
}

