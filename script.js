const gameBoard = (function() {
    const board = [null, null, null, null, null, null, null, null, null];

    const clearBoard =function(){
        boardoard = [null, null, null, null, null, null, null, null, null]
    };

    return ({board: board, sayHello: sayHello, clearBoard: clearBoard});

})();;


function createPlayer(){
    const greet = function (){
        console.log("hello world")
    }

    const setMarker = function(){}

    return ({greet})

} 

function createGameControls() {
    const clearBoard =function(){
        gameBoard.board = [null, null, null, null, null, null, null, null, null]
    };

    const playRound = function(){
        createPlayer(player1, player2)

    }

    return {clearBoard}
    
}





