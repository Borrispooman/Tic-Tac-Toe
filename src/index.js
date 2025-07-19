import  Board  from "./board.js"
import  UIrender  from "./UI-renderer.js"
import  Player  from "./player-manager.js"
import  checkWinner  from "./win-checker.js"
import  Game  from "./game-controller.js" 
import "./style.css";


const marker = Player.getPlayerMarker();
UIrender.displayTurn(marker);


const boardSquares = document.querySelector(".game-board").children;
for(let i = 0; i < boardSquares.length; i++){
		const square = boardSquares[i];
		square.addEventListener("click", function(){

				if (square.textContent === "" && Player.playerX.isWinner === false && Player.playerO.isWinner === false){
						const currentIndex = parseInt(square.id);
						UIrender.placeMarker(`${Player.getPlayerMarker()}`, currentIndex);	
						Board.boardArr.splice(currentIndex, 1, `${Player.getPlayerMarker()}`)
						const marker = Player.getPlayerMarker();
						UIrender.displayTurn(marker);
						let winCheck = checkWinner(Board.boardArr)
						if (winCheck == "X"){
							UIrender.displayWinner("X")
						}

						if (winCheck == "O"){
							UIrender.displayWinner("O")
						}

						if (winCheck == "draw"){
							UIrender.displayDraw();
						}
						
						if (winCheck == null){
							Player.swapPlayerTurns();
							UIrender.displayTurn(Player.getPlayerMarker());
						}
						
			}
		})
}


const restartBtn = document.querySelector(".restart")
restartBtn.addEventListener("click", function(){	
	const boardSquares = document.querySelector(".game-board").children;
	for(let i = 0; i < boardSquares.length; i++){
			Board.boardArr[i] = null;
			const square = boardSquares[i];
			square.textContent="";
	};
	Player.playerX.isTurn = true;
	Player.playerO.isTurn = false;
	Player.playerX.isWinner = false;
	Player.playerO.isTurn = false;
	UIrender.displayTurn(Player.getPlayerMarker());
});
