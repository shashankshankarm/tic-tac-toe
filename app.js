let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let GameBtn=document.querySelector("#new-btn");
let msgConteiner=document.querySelector(" .msg-container");
let msg=document.querySelector("#msg")

let turn0=true;

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const restGame=()=>{
    turn0=true;
    enableBoxes();
    msgConteiner.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if (turn0) {
            box.innerText="0";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;

        checkWinner()
    });
});

const disableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(Winner)=>{
    msg.innerText=`congratulations winnner is ${Winner}`;
    msgConteiner.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
for( let pattern of winPattern){
             let pos1val=boxes[pattern[0]].innerText;
             let pos2val=boxes[pattern[1]].innerText;
             let pos3val=boxes[pattern[2]].innerText;
             if(pos1val !=""&&pos2val !=""&&pos3val !=""){
                if(pos1val===pos2val && pos2val==pos3val){
                    console.log("Winner",pos1val);

                    showWinner(pos1val)
                }
             }
}
};

GameBtn.addEventListener("click",restGame);
resetBtn.addEventListener("click",restGame);
