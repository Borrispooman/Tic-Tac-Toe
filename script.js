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


const Game = (function () {
   
    
        

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


















