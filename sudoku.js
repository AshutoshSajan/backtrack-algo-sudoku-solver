let board = [
    [7,8,0,4,0,0,1,2,0],
    [6,0,0,0,7,5,0,0,9],
    [0,0,0,6,0,1,0,7,8],
    [0,0,7,0,4,0,2,6,0],
    [0,0,1,0,5,0,9,3,0],
    [9,0,4,0,6,0,0,0,5],
    [0,7,0,3,0,0,0,1,2],
    [1,2,0,0,0,7,4,0,0],
    [0,4,9,2,0,6,0,0,7]
]

function printBoard(board) {
    let row = [];
    let col = [];

    for(let i = 0; i < board.length; i++){
        if(i % 3 == 0 && i != 0){
            console.log("__________________");
        }

        for(var j = 0; j < board[0].length; j++){
            if(j % 3 == 0 && j != 0){
                console.log(" | ")
            }
            if(j == 8){
                row.push(board[i][j])
                // console.log(board[i][j])
            }
            else {
                console.log(String(board[i][j]))
            }
        }
    }
    console.log(row.split(","))
}

printBoard(board)
