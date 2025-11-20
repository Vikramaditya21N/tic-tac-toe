let boxes =document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let turnO=true;//turnO=true means O's turn, false means x's turn
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const reset=() => {
    turnO = true;
    enableboxes();
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    });
});
   
   const checkwin=() => {
    for (let pattern of winpatterns) {
        let [a, b, c] = pattern;
        if (
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText &&
            boxes[a].innerText !== ""
        ) {
            alert(` CONGRATULATIONS Player ${boxes[a].innerText} wins!`);
            disableboxes();
            return;
        }
    }
   };
   const disableboxes=() => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
   };
   const enableboxes=() => {
    boxes.forEach((box) => {
        box.disabled=false;
        box.innerText="";
    });
   }
    resetbtn.addEventListener("click", () => {
     reset();
    });
    
      
      
    