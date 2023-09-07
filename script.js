const cellBlocks = document.querySelectorAll('.cell');
const displayText = document.querySelector('.display-text');
const restartButton = document.querySelector('.restart-button');
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let cellChoices = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let playing = false;

startGame();

function startGame() {
    cellBlocks.forEach(cell => cell.addEventListener('click', cellClick, {once: true}));
    restartButton.addEventListener('click', restartGame);
    displayText.textContent = `${currentPlayer}'s turn`;
    playing = true;
}

function cellClick() {
    let cellIndex = this.getAttribute('id');

    /*if(cellChoices[cellIndex])*/
     
    placeMark(this, cellIndex);
    changePlayer();
    /*checkWinner();*/
}
 
function placeMark(cellBlock, index) {
    cellChoices[index] = currentPlayer;
    cellBlock.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    displayText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {

}

function restartGame() {

}