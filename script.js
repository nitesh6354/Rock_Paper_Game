let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const reference=document.querySelector("#ref");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice= () =>{
    const options = ["rock", "paper","scissors"];
    const randIdx=  Math.floor(Math.random() * 3);
    return options[randIdx];
};


//function for game draw 
const drawGame = () =>{
    // console.log("Game Was Draw !")
    msg.innerText="Game Was Draw ,Play Again !";
     msg.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("you win !");
        msg.innerText="you Win ! "; //${userChoice} Beats ${compChoice}
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose");
        msg.innerText="you lose ! "; //${compChoice} beats your ${userChoice}
        msg.style.backgroundColor="red";
    }
}


const playGame= (userChoice) =>{
    console.log("user choice = ",userChoice);
    //Generate Computer Choice ->moduler
    const compChoice=genCompChoice();
    console.log("computer Choice =",compChoice);


    if (userChoice===compChoice) {
        //draw game
        drawGame();
    } else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor ,paper
            userWin=compChoice==="paper" ? false :true;
        }else if(userChoice==="paper"){
            //rock,scissor
            userWin=compChoice==="scissors" ? false : true;
        }else{
            //rock ,paper
            userWin=compChoice==="rock" ? false : true;
        }
    
        showWinner(userWin,userChoice,compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

reference.addEventListener("click",()=>{
    userScore=0;
    userScorePara.innerText=userScore;
    compScore=0;
    compScorePara.innerText=compScore;
})