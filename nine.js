let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let winmessage = document.querySelector("#winmsg");

let turnO = true; // O starts first

let winningPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";  // Place 'O'
            turnO = false;   // Switch to 'X'
        } else {
            box.innerText = "X";  // Place 'X'
            turnO = true;         // Switch to 'O'
        }
        box.disabled = true; // Disable box after click
        checkWinner();  // Check if anyone won
    });
});


const checkWinner = () => {
    for (let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            disableBoxes();
            showWinner(pos1);
            return;
        }
    }
};

const showWinner = (winner) => {
    winmessage.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide"); //Removes hide class to show the message.
};

const disableBoxes = () => {
    boxes.forEach((box) => box.disabled = true);
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

const resetGame = () => {
    turnO = true;  // Reset turn to 'O'
    enableBoxes(); // Enable all boxes
    msgContainer.classList.add("hide"); // Hide winner message
    winmessage.innerText = "Winner";
};

newgame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
