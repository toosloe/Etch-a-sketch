
const container = document.getElementsByClassName("container")[0];

let flagClick = false;
let flagDrag = false;
let gridR = 60;
let gridC = 60;
gridSize = gridR*gridC;
 for(let i = 0; i < gridSize; i++){
    let grid = document.createElement("div");
    grid.style.width=(100/gridC).toString() + "vw";
    grid.style.height=(100/gridR).toString() + "vh";
    grid.style.backgroundColor = "white";
    grid.classList.add("block");
    container.appendChild(grid);
 }

 const blocks = document.getElementsByClassName("block");

for(const block of blocks){
   block.addEventListener("click", (event) => {
      flagClick = !flagClick;
    });

    block.addEventListener("mousemove", (event) => {
      if(flagClick){
         block.style.backgroundColor="black";
      }
      else block.style.backgroundColor="white";

      //block.addEventListener("");
    });
   }
   


    

     
   




    