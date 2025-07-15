import { Board } from "./board.js"
import { UIrender } from "./UI-renderer.js"
import { Player } from "./player-manager.js"
import { checkWinner } from "./win-checker.js"
import { Game } from "./game-controller.js" 

const boardSquares = document.querySelector(".game-board").children;
for(let i = 0; i < boardSquares.length; i++){
		const square = boardSquares[i];
		square.addEventListener("click", function(){

				if (square.textContent === "" && Player.playerX.isWinner === false && Player.playerY.isWinner === false){
						const currentIndex = parseInt(square.id);
						UIrender.placeMarker(`${Player.getPlayerMarker}`, currentIndex);	
						Board.boardArr.splice(currentIndex, 1, `${Player.getPlayerMarker()}`)
						Player.swapPlayerTurns()
						UIrender.displayTurn();
						let winCheck = checkWinner(Board.boardArr)
						if (winCheck == "X"){
							UIrender.displayWinner("X")
						}

						if (winCheck == "O"){
							UIrender.displayWinner("Y")
						}

						if (winCheck == "draw"){
							UIrender.displayDraw
						}
						
						if (winCheck == null){
							Player.swapPlayerTurns();
							UIrender.displayTurn();
						}
						
				}

				else{}
		})
}


const restartBtn = document.querySelector(".restart")
restartBtn.addEventListener("click", function(){	
	const boardSquares = document.querySelector(".game-board").children;
	for(let i = 0; i < boardSquares.length; i++){
			Board.boardArr[i] = null;
			const square = boardSquares[i];
			square.textContent="";
			Player.playerX.isTurn = true;
			Player.playerY.isTurn = false;
			Player.playerX.isWinner = false;
			Player.playerY.isTurn = false;
			UIrender.displayTurn();
	};
});
