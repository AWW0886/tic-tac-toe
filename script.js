const cellBlocks = document.querySelectorAll('.cell');
const gameRound = document.querySelector('.round-text');
const score = document.querySelector('.score-text');
const turnText = document.querySelector('.turn-text');
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
let scoreX = 0;
let scoreO = 0;
let round = 1;

startGame();

restartButton.addEventListener('click', startGame);

function startGame() {
    cellChoices = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    cellBlocks.forEach(cell => {
        cell.textContent = ''; 
        cell.addEventListener('click', cellClick, {once: true});
    });
    gameRound.textContent = `Round: ${round}`;
    score.textContent = `X: ${scoreX} / O: ${scoreO}`;
    turnText.textContent = `${currentPlayer}'s turn`;
}

function cellClick() {
    let cellIndex = this.getAttribute('index');
    placeMark(this, cellIndex);
    checkWinner();
}
 
function placeMark(cellBlock, index) {
    cellChoices[index] = currentPlayer;
    cellBlock.textContent = currentPlayer;
}

function changePlayer() {
    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X';
    turnText.textContent = `${currentPlayer}'s turn`;
}

function checkWinner() {
    let winRound = false;

    for (let i = 0; i < winningCombos.length; i++) {
        let combo = winningCombos[i];
        let cellOne = cellChoices[combo[0]];
        let cellTwo = cellChoices[combo[1]];
        let cellThree = cellChoices[combo[2]];

        if (cellOne == '' || cellTwo == '' || cellThree == '') {
            continue;
        }
        if (cellOne == cellTwo && cellTwo == cellThree) {
            winRound = true;
            break;
        } 
    }

    if (winRound) {
        turnText.textContent = `${currentPlayer} wins!`;
        cellBlocks.forEach(cell =>
            cell.removeEventListener('click', cellClick));
        round++;

        if (currentPlayer == 'X') {
            scoreX++;
        } else {
            scoreO++;
        }

    } else if (!cellChoices.includes('')) {
        turnText.textContent = `Draw!`;
        round++;
    } else {
        changePlayer();
    }
}