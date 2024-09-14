const boxes = document.querySelectorAll(".box");
const rstbtn = document.querySelector("#rstbtn");
const newbtn = document.querySelector("#new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const credit = document.querySelector(".credit");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];



boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;

    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});



const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val)
                showWinner(pos1Val);
            }
        }
    }
}



const disabled = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}



const showWinner = (winner) =>{
    msg.innerText = `Congratulations,Winner is ${winner}`
    msgContainer.classList.remove("hide");
    credit.style.display = "block"
    disabled();
}



const enabled = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const resetGame = () =>{
    turnO = true;
    enabled();
    msgContainer.classList.add("hide")
}


rstbtn.addEventListener("click",resetGame);
newbtn.addEventListener("click",resetGame);