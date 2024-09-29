let boxes = document.querySelectorAll(".box");
let restbtn= document.querySelector(".reset-btn");
let newGameBtn= document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let h2= document.querySelector("h2")
let turn0 = true; // playerX, player0;

const winPatterns = [
    [0,  1, 2 ],
    [0,  3, 6 ],
    [0,  4, 8 ],
    [1,  4, 7 ],
    [2,  5, 8 ],
    [2,  4, 6 ],
    [3,  4, 5 ],
    [6,  7, 8 ],
];

const restgame= ()=>{
    true0=true;
    enbledBtn();
    msgContainer.classList.add("hide");

}
h2.style.color="Green";
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was cliked");
        if (turn0){
            box.innerText="O";
            turn0=false;
          }  else{
                box.innerText="X";
                turn0=true;
            }
        box.disabled=true;
        cheackWinner();
    })
});


const disabledBtn=()=>{
    for(let box of boxes)
    box.disabled=true;
}
const enbledBtn=()=>{
    for(let box of boxes){
    box.disabled= false;
    box.innerText="";
    }
}
const shoWinner=(winner)=>{
   h2.innerText= `Congratulations The Player ${winner} is Winner `  ;
   msgContainer.classList.remove("hide");
   disabledBtn();
}
const cheackWinner =  () =>{
    for(let pattern of winPatterns){
        let pos1= boxes[pattern[0]].innerText;
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

    if(pos1 !="" && pos2!="" && pos3!= ""){
        if(pos1=== pos2 && pos2 === pos3){
            console.log("winner" , pos1);
            shoWinner(pos1);
        }
      }
    }
};

// newGameBtn.aadEventListener("click" , restgame);
// restbtn.addEventListener("click ", restgame);
newGameBtn.addEventListener("click", restgame );
restbtn.addEventListener("click", restgame);


const drawGame=()=>{
    
}