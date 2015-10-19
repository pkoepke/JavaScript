function rowHeights(rows) { // At a high level, this returns an array with the larges min height in each row.
  return rows.map(function(row) { // run the reduce function on each row of cells. This will return an array with the largest min height in each row.
    return row.reduce(function(max, cell) { // get the largest minimum height from all the cells in this row. Explained below.
      return Math.max(max, cell.minHeight()); // Within the reduce() function, get each cell's minimum height and compare it to the largest min height kept in the max variable. Return whichever is larger, max or the current cell's height. This reduce() ends with a single value per row - the larges min height.
    }, 0); // zero is the initial value for comparison in reduce(). It's optional but useful here for clarity.
  });
}

function colWidths(rows) { // At a high level, returns an array with the min width of each column.
  return rows[0].map(function(_, i) { // map() passes an optional second parameter to the callback function: the index of the current item. We store this in i to ensure that as we look at each row array, we look at the correct column in that row.
    return rows.reduce(function(max, row) {
      return Math.max(max, row[i].minWidth()); // get the largest min width for all the cells in row i.
    }, 0); // zero is the initial value for comparison in reduce(). It's optional but useful here for clarity.
  });
}

function drawTable(rows) {
  var heights = rowHeights(rows);
  var widths = colWidths(rows);

  function drawLine(blocks, lineNo) { 
    return blocks.map(function(block) {
      return block[lineNo];
    }).join(" ");
  }

  function drawRow(row, rowNum) {
    var blocks = row.map(function(cell, colNum) {
      return cell.draw(widths[colNum], heights[rowNum]);
    });
    return blocks[0].map(function(_, lineNo) {
      return drawLine(blocks, lineNo);
    }).join("\n");
  }

  return rows.map(drawRow).join("\n");
}
