const Board = (function() {
    let boardArr = [null, null, null, null, null, null, null, null, null];

    const boardSquares = document.querySelector(".game-board").children;
    for(let i = 0; i < boardSquares.length; i++){
        const square = boardSquares[i];
        square.addEventListener("click", function(){

            if (square.textContent === "" && Player.playerX.isWinner === false && Player.playerY.isWinner === false){
                square.textContent=`${Player.getPlayerTurn()}`
                const currentIndex = parseInt(square.className)
                Board.boardArr.splice(currentIndex, 1, `${Player.getPlayerTurn()}`)
                Player.swapTurns()
                Game.displayTurn();
                Game.checkWinner(Board.boardArr)
                ;
            }

            else{}
        })
    }
    const boardSpacesFull = function(){
        if(boardArr.includes(null)){
            return false;
        }

        else{
            return true;
        }
    }




    return ({boardArr: boardArr, boardSpacesFull});

})();


const Player = (function(){

    const playerX = {
        isTurn: true,
        isWinner: false
    }

    const playerY = {
        isTurn: false,
        isWinner: false
    }

    const getPlayerTurn = function(){
        if (playerX.isTurn === true){
            return ("X")
        }

        else{
            return("O")
        }
    }

    const swapTurns = function(){
        if (playerX.isTurn === true){
            playerX.isTurn = false;
            playerY.isTurn = true;
        }

        else{
            playerX.isTurn = true;
            playerY.isTurn = false;
        }


    }

    return({playerX, playerY, getPlayerTurn, swapTurns});
    
})();

const Game = (function () {
   
    const displayWinner = function(winner){
        const displayArea = document.querySelector(".player-turn");
        displayArea.textContent = `Player ${winner} wins!`
    }

    const displayDraw = function(){
        displayArea = document.querySelector(".player-turn");
        displayArea.textContent = `It's a Draw!`
    }


    const checkWinner = function(gameBoard){

        Array.prototype.allValuesSame = function() {
            for (let i = 1; i < this.length; i++) {
            if (this[i] !== this[0]) {
                return false;
            }
            }
            return true;
        }

        const topRow = [gameBoard[0], gameBoard[1], gameBoard[2]];
        const middleRow = [gameBoard[3], gameBoard[4], gameBoard[5]];
        const bottomRow = [gameBoard[6], gameBoard[7], gameBoard[8]];
        const leftCol = [gameBoard[0], gameBoard[3], gameBoard[6]];    
        const midCol = [gameBoard[1], gameBoard[4], gameBoard[7]];
        const rightCol = [gameBoard[2], gameBoard[5], gameBoard[8]];   
        const leftDiag = [gameBoard[0], gameBoard[4], gameBoard[8]]; 
        const rightDiag = [gameBoard[2], gameBoard[4], gameBoard[6]]; 
        
        const winCombinations = [topRow, middleRow, bottomRow, leftCol, midCol, rightCol, leftDiag, rightDiag]
        
        for (let i = 0; i < winCombinations.length; i++){

            if(winCombinations[i][0]=== null ){
                    continue;
                }

            if (winCombinations[i].allValuesSame() === true){
                    console.log(i)
                    console.log(Board.boardArr);
                    displayWinner(winCombinations[i][0])
                    if (winCombinations[i][0]==="X"){
                        Player.playerX.isWinner = true;
                    }

                    else{
                        Player.playerY.isTurn = true;
                    }
            }
            if (winCombinations[i].allValuesSame() === true && Board.boardSpacesFull()===true){
                displayDraw();
            }

        }
        
    }

    const displayTurn = function(){
        displayArea = document.querySelector(".player-turn")
        displayArea.textContent = `Player ${Player.getPlayerTurn()}'s turn`
    }

    restartBtn = document.querySelector(".restart")
    restartBtn.addEventListener("click", function(){
        Board.boardArr = [null, null, null, null, null, null, null, null, null]
        const boardSquares = document.querySelector(".game-board").children;
        for(let i = 0; i < boardSquares.length; i++){
            const square = boardSquares[i];
            square.textContent="";
            Player.playerX.isTurn = true;
            Player.playerY.isTurn = false;
            Player.playerX.isWinner = false;
            Player.playerY.isTurn = false;
            
            displayTurn();
        }
        
    })


    return ({checkWinner, displayTurn, displayWinner, displayDraw})


})();

















//if checkForWinner returns undefined, its a tie

//if it returns null, theres no winner yet
