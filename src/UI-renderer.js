const UIrender = (function () {
	const placeMarker = function(marker, boardSpaceClass){
		const spaceToDisplaySym = document.querySelector(`#\\3${boardSpaceClass}`);
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

	const displayTurn = function(mark){
        const displayArea = document.querySelector(".player-turn")
        displayArea.textContent = `Player ${mark}'s turn`
	}

	return {
		placeMarker,
		displayWinner,
		displayDraw,
		displayTurn
	}

	
})();

export default UIrender;
