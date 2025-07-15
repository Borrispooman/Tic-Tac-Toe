export const UIrender = (function () {
	const placeMarker = function(marker, boardSpaceClass){
		const spaceToDisplaySym = document.querySelector(`.${boardSpaceClass}`);
		spaceToDisplaySym.textContent = `${marker}`
	}
	
	const displayWinner = function(winner){
        const displayArea = document.querySelector(".player-turn");
        displayArea.textContent = `Player ${winner} wins! 🥳`
  }

  const displayDraw = function(){
        const displayArea = document.querySelector(".player-turn");
        displayArea.textContent = `It's a Draw! 🤝`
	}

	const displayTurn = function(){
        const displayArea = document.querySelector(".player-turn")
        displayArea.textContent = `Player ${Player.getPlayerTurn()}'s turn`
    }

	return {
		placeMarker,
		displayWinner,
		displayDraw,
		displayTurn
	}

	
})();
