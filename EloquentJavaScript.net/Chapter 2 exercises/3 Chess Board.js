var chessBoardString = ""; // holds the final string
var size = 8; // height and width of chessboard

// If you give it a number as an argument, the size becomes that number
if (process.argv[2]) {
    size = process.argv[2];
}

// chose to start counting at 1, despite the usual counting from zero.
for (var rows = 1; rows <= size; rows++) {
    for (var columns = 1; columns <= size; columns++) {
        if (rows % 2 == 1) { // odd rows
            if (columns % 2 == 1) {
                chessBoardString += " ";
            } else {
                chessBoardString += "#";
            }
        } else {
            if (columns % 2 == 1) {
                chessBoardString += "#";
            } else {
                chessBoardString += " ";
            }
        }
    }
    chessBoardString += "\n";
}

console.log(chessBoardString);