const gameBoard = (function() {
    const board = ["x", "x", "x", null, null, null, null, null, null];

    const clearBoard = function(){
        boardoard = [null, null, null, null, null, null, null, null, null]
    };

    const hi = function(){
        return ("hello");
    }

    

    return ({board: board,  clearBoard: clearBoard, hi: hi});

})();


function createPlayer(){
    const greet = function (){
        console.log("hello world")
    }

    const setMarker = function(){}

    return ({greet: greet})

} 

const gameControls = (function () {
    
    const checkForWinner = function(gameBoard){

        Array.prototype.allValuesSame = function() {
            for (let i = 1; i < this.length; i++) {
            if (this[i] !== this[0]) {
                return false;
            }
            }
            return true;
        }


        const topRow = [gameBoard[0], gameBoard[1], gameBoard[2]];
        const middleRow = [gameBoard[4], gameBoard[5], gameBoard[6]];
        const bottomRow = [gameBoard[7], gameBoard[8], gameBoard[9]];
        const leftCol = [gameBoard[1], gameBoard[4], gameBoard[7]];    
        const midCol = [gameBoard[2], gameBoard[5], gameBoard[8]];
        const rightCol = [gameBoard[3], gameBoard[6], gameBoard[9]];   
        const leftDiag = [gameBoard[1], gameBoard[5], gameBoard[9]]; 
        const rightDiag = [gameBoard[3], gameBoard[5], gameBoard[7]]; 
        
        const winCombinations = [topRow, middleRow, bottomRow, leftCol, midCol, rightCol, leftDiag, rightDiag]
        
        for (let i = 0; i < winCombinations.length; i++){
            if (winCombinations[i].allValuesSame() === true){
                return (winCombinations[i][0])
            }
            else{}
        }
        
    }

    return ({checkForWinner: checkForWinner})



})();



console.log(gameControls.checkForWinner(gameBoard.board));

