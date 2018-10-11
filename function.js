//sound winner

var Flip_Sound = new Audio();
Flip_Sound.src = "flip.mp3";


//black has value 2 and red has value 1

player = 1; // this control who is play first red or black

board = [[0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0]];

console.log(board);
function myFunction(row, col) {

    // get the first empty place in the columns
    for (i = 5; i >= 0; i--) {
        if (document.getElementById("board").rows[i].cells[col.cellIndex].getElementsByTagName('button')[0].innerHTML == '') {
            row = i;
            break;
        }
    }

    // these conditions to prevent replacing colors of the same button
    if (player == 1 &&
        document.getElementById("board").rows[row].cells[col.cellIndex].getElementsByTagName('button')[0].innerHTML == "") {
        
		document.getElementById("board").rows[row].cells[col.cellIndex].getElementsByTagName('button')[0].innerHTML = 
		'<img src="images/player1.png" style="margin-left:-7px; width: 75px;height: 75px; position: abslute;"/>';
        
        board[row][col.cellIndex] = 1; // fill board with player values
		
        if (DiagonalWin() == true || CheckWinH() == 1 || CheckWinV() == 1) {
            alert("player 1 Wins")

            Background_Track.muted = true;
            /*Play the Winning Sound */
            Flip_Sound.src = "SMALL.mp3";
            Flip_Sound.play();

        }
		player = 2;
    } else if (player == 2 &&
	           document.getElementById("board").rows[row].cells[col.cellIndex].getElementsByTagName('button')[0].innerHTML == "")
    {
        
	    document.getElementById("board").rows[row].cells[col.cellIndex].getElementsByTagName('button')[0].innerHTML = 
		'<img src="images/player2.png" style="margin-left:-7px; width: 75px;height: 75px; position: abslute;"/>';
        
        board[row][col.cellIndex] = 2; // fill board with player values
		
        if (DiagonalWin() == true || CheckWinH() == 2 || CheckWinV() == 2) {
            alert("player 2 Wins")

            Background_Track.muted = true;
            /*Play the Winning Sound */
            Flip_Sound.src = "SMALL.mp3";
            Flip_Sound.play();
        }
		
		player = 1;
    }
	console.clear();
    console.log(board);
}

function DiagonalWin() {
    var j = 0;
    for (var i = 5; i > 2; i--) {
        for (var j = 0; j < 4 ; j++) {
            if (board[i][j] == player && board[i - 1][j + 1] == player && board[i - 2][j + 2] == player
                && board[i - 3][j + 3])
                return true;
        }
    }

    for (var i = 5; i > 2; i--) {
        for (var j = 6; j > 2; j--) {
            if (board[i][j] == player && board[i - 1][j - 1] == player && board[i - 2][j - 2] == player &&
                board[i - 3][j - 3] == player)
                return true;
        }
    }
    return false;
}

function  CheckWinH( ){  
count = 0;
for (var y = 5 ;  y >= 0; y--) {
        for (var x = 6; x >= 0; x--) {
            if (board[y][x] != 0)
            {
                if (board[y][x] === board[y][x + 1])
                {
                    count = count + 1;
                }
                else
                {
                    count = 0;
                }
                if (count === 3 && board[y][x] === 1)
                {//player1 wins
                    return 1;
                }
                if (count === 3 && board[y][x] === 2)
                {//player2 wins
                    return 2;

                }
               
            } 
        }

}
                    return 0;

}

function CheckWinV() {
    count = 0;
    for (var y = 6 ; y >= 0; y--) {
        for (var x = 5; x >= 0; x--) {
            if (board[x][y] != 0) {
                if (board[x][y] === board[x - 1][y ]) {
                    count = count + 1;
                }
                else {
                    count = 0;
                }
                if (count === 3 && board[x][y] === 1) {//player1 wins
                    return 1;
                }
                if (count === 3 && board[x][y] === 2) {//player2 wins
                    return 2;

                }

            }
        }

    }
    return 0;

}


/*Enable and Disaple Background music sound */

var Background_Track = new Audio();
Background_Track.src = "FullTrack.mp3";
Background_Track.play();
var BackgroundTrack = document.getElementById("BackgroundTrack");


BackgroundTrack.onclick = function () {
    if (Background_Track.muted) {
        Background_Track.muted = false;
        BackgroundTrack.src = "SoundON.png";
    } else {
        Background_Track.muted = true;
        BackgroundTrack.src = "SoundOFF.png";
    }
}


