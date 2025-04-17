
const container = document.getElementsByClassName("container")[0];

let flagClick = false;
let flagDrag = false;
let gridR = 16;
let gridC = 16;


makeGrid();


function makeGrid(){
   gridSize = gridR*gridC;
 for(let i = 0; i < gridSize; i++){
    let grid = document.createElement("div");
    grid.style.width=(100/gridC).toString() + "%";
    grid.style.height=(100/gridR).toString() + "%";
    grid.style.backgroundColor = "white";
    grid.style.opacity="0.1";
    grid.classList.add("block");
    container.appendChild(grid);
 }

 setEvent();

}



function setEvent(){

   const blocks = document.getElementsByClassName("block");

   for(const block of blocks){
      block.addEventListener("click", (event) => {
         flagClick = !flagClick;
       });
   
       block.addEventListener("mousemove", (event) => {
         if(flagClick){
            let rando1 = Math.random() * 255;
            let rando2 = Math.random() * 255;
            let rando3 = Math.random() * 255;
            block.style.opacity = (Number(block.style.opacity) + 0.08).toString();
            let color = "rgb(" + (rando1).toString() + "," + (rando2).toString() + "," + (rando3).toString() + ")";
            block.style.backgroundColor=color;
         }
   
         //block.addEventListener("");
       });
      }
}

function destroyGrid(){

   while(container.lastElementChild){
      container.removeChild(container.lastElementChild);
   }

}

const reset = document.getElementsByTagName("button")[0];

reset.addEventListener("click", (event)=>{
   let R = prompt("Please enter in number of rows that is 100 or less");
   while(!R.match("^[0-9]+$") || !(R <= 100)){
      R = prompt("PLEASE enter in number of rows that is 100 or less");
   }
   gridR = Number(R);
   let C = prompt("Please enter in number of columns that is 100 or less");
   while(!C.match("^[0-9]+$") || !(C <= 100)){
      C = prompt("PLEASE enter in number of columns that is 100 or less");
   }
   gridC = Number(C);
   destroyGrid();
   makeGrid();
});


   


    
     
   




    