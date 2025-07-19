export default function checkWinner(gameBoard){

       const allValuesSame = arr => arr.every(val => val === arr[0]);

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

            if (winCombinations[i].includes(null)){
								if(i == winCombinations.length - 1){
									return(null);
								}
								else{
									continue;
								}
            }
						else if (allValuesSame(winCombinations[i])){
							return (winCombinations[i][0]);							
            }
						else if (!(gameBoard.includes(null))){
							if(i == winCombinations.length -1){
            		return("draw"); 
							}
            }
    	}
			
};
