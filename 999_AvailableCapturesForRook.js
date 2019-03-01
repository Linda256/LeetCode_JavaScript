/*
999 Available Captures for Rook
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rookPosition = findRook(board);
    let i=rookPosition[0];
    let j=rookPosition[1];
    let count=0;
    let left=j-1, right=j+1, up=i-1, down=i+1;
    while(left>=0){
        if(board[i][left]==='p'){
            count++;
            break;
        }
        if(board[i][left]==='B') break;
        left--;
    }
    while(right<=7){
        if(board[i][right]==='p'){
            count++;
            break;
        }
        if(board[i][right]==='B') break;
        right++;
    }
    while(up>=0){
        if(board[up][j]==='p') {
            count++;
            break;
        };
        if(board[up][j]==='B') break;
        up--;
    }
    while(down<=7){
        if(board[down][j]==='p') {
            count++;
            break;
        };
        if(board[down][j]==='B') break;
        down++;
    }
    return count;
};

//find Rook
var findRook=function(board){
    let position=[];
    for (let i=0;i<8;i++){
        let j=board[i].indexOf('R');
        if(j>-1){
            position.push(i,j);
        }
        if(position.length>0) break;
    }
    return position;
}

let board =[[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
console.log(numRookCaptures(board));