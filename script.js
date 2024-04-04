let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;
let count = 0; // To Track Draw
let timerDuration = 10; // Duration of each turn in seconds
let remainingTime = timerDuration; // Remaining time for the current turn
let timerInterval; // Interval ID for the timer

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

const resetGame = () => {
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    clearInterval(timerInterval);
    remainingTime = timerDuration;
    updateTimerDisplay();
}

const startTimer = () => {
    remainingTime = timerDuration;
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        remainingTime--;
        updateTimerDisplay();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            switchTurns();
        }
    }, 1000);
}

// Function to update the timer display
const updateTimerDisplay = () => {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.innerText = `Time left: ${remainingTime} seconds`;
};



const switchTurns = () => {
    turn = !turn;
    startTimer();
}

const gameDraw = () => {
    count = 0;
    turn = true;
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    clearInterval(timerInterval);
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    clearInterval(timerInterval);
}

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                return true;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!box.disabled) {
            if (turn) {
                box.innerText = "O";
                turn = false;
            } else {
                box.innerText = "X";
                turn = true;
            }
            box.disabled = true;
            count++;
            let isWinner = checkWinner();
            if (count === 9 && !isWinner) {
                gameDraw();
            } else {
                remainingTime = timerDuration;
                updateTimerDisplay();
                turn = !turn;
                switchTurns();
            }
        }
    });
});

startTimer(); // Start the timer for the first player's turn
updateTimerDisplay(); // Update timer display initially
