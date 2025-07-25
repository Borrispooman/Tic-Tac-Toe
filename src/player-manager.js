const Player = (function(){

    const playerX = {
        isTurn: true,
        isWinner: false
    }

    const playerO = {
        isTurn: false,
        isWinner: false
    }

    const getPlayerMarker = function(){
        if (playerX.isTurn === true){
            return ("X")
        }

        else{
            return("O")
        }
    }

    const swapPlayerTurns = function(){
        if (playerX.isTurn === true){
            playerX.isTurn = false;
            playerO.isTurn = true;
        }

        else{
            playerX.isTurn = true;
            playerO.isTurn = false;
        }


    }

    return({playerX, playerO, getPlayerMarker, swapPlayerTurns});
    
})();

export default Player;
