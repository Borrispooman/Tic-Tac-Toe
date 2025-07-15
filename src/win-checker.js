export function checkWinner(gameBoard){

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
                    console.log(i);
                    console.log(Board.boardArr);
                    if (winCombinations[i][0]==="X"){
												return("X");
                    }

                    else{
												return("O");
                    }
            }
            if (winCombinations[i].allValuesSame() === true && Board.boardSpacesFull()===true){
            	return("draw"); 
            }
						
						else {
							return(null);
        		}
        
    		}
};
