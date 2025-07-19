const Board = (function() {
    const boardArr = [null, null, null, null, null, null, null, null, null];

    

		const insertSymbol =  function(index, marker){
			boardArr.splice(index, 1, marker)
		}
		
			




    return ({boardArr: boardArr, insertSymbol});

})();

export default Board;
