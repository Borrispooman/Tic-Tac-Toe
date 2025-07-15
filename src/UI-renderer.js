export const UIrender = (function () {
	const placeSymbol = function(symbol, boardSpaceClass){
		const spaceToDisplaySym = document.querySelector(`.${boardSpaceClass}`);
		spaceToDisplaySym.textContent = `${symbol}`
	}
	
	const displayWinner = function(winner){
        const displayArea = document.querySelector(".player-turn");
        displayArea.textContent = `Player ${winner} wins! 🥳`
  }

  const displayDraw = function(){
        displayArea = document.querySelector(".player-turn");
        displayArea.textContent = `It's a Draw! 🤝`
	}

	const displayTurn = function(){
        displayArea = document.querySelector(".player-turn")
        displayArea.textContent = `Player ${Player.getPlayerTurn()}'s turn`
    }

	return {
		placeSymbol,
		displayWinner,
		displayDraw,
		displayTurn
	}

	
})();
