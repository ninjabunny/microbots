var grid = [
	["white", 6], ["blue", 6], ["blue", 2],
	["red", 3], ["yellow", 4], ["white", 3],
	["blue", 3], ["green", 4], ["white", 5]
];

//display a quad
var screenWidth = $(window).width();
var screenHeight = $(window).height();
var cellSize = 0;
if(screenWidth < screenHeight) {
	cellSize = screenHeight / 9;
} else {
	cellSize = screenWidth / 9;
}
cellSize = cellSize * .85;
$('th').height(cellSize + 'px');
$('th').width(cellSize + 'px');


// console.log(grid)

var newGrid = [];
var rowLength = Math.sqrt(grid.length);
newGrid.length = grid.length

for (var i = 0; i < grid.length; i++) {
	//convert to x/y
	var x = i % rowLength;
	var y = Math.floor(i / rowLength);

	//find new x/y
	var newX = rowLength - y - 1;
	var newY = x;

	//convert back to index
	var newPosition = newY * rowLength + newX;
	newGrid[newPosition] = grid[i];
}

for (var i = 0; i < newGrid.length; i++) {
	// console.log(newGrid);
}

console.log(newGrid);