var grid1 = [
	["white", 6],
	["blue", 6],
	["blue", 2],
	
	["red", 3],
	["yellow", 4],
	["white", 3],
	
	["blue", 3],
	["green", 4],
	["white", 5]
];

var grid2 = [
	["pink", 6],
	["yellow", 5],
	["pink", 1],
	
	["red", 1],
	["blue", 5],
	["yellow", 6],
	
	["green", 1],
	["red", 5],
	["yellow", 1]
];

var grid3 = [
	["pink", 5],
	["pink", 2],
	["pink", 3],
	
	["red", 6],
	["red", 4],
	["yellow", 3],
	
	["blue", 4],
	["green", 5],
	["green", 3]
];

var grid0 = [
	["yellow", 2],
	["white", 1],
	["blue", 1],
	
	["white", 2],
	["green", 2],
	["red", 2],
	
	["pink", 4],
	["green", 6],
	["white", 4]
];

// var grids = [];
// grids.push(grid1);
// grids.push(grid2);
// grids.push(grid3);
// grids.push(grid4);

var screenWidth = $(window).width();
var screenHeight = $(window).height();
var cellSize = 0;
if (screenWidth > screenHeight) {
	cellSize = screenHeight / 6;
} else {
	cellSize = screenWidth / 6;
}
cellSize = cellSize * .95;
$('th').height(cellSize + 'px');
$('th').width(cellSize + 'px');



var rotateGrid = function(target){
	var newGrid = [];
	var rowLength = Math.sqrt(target.length);
	newGrid.length = target.length

	for (var i = 0; i < target.length; i++) {
		//convert to x/y
		var x = i % rowLength;
		var y = Math.floor(i / rowLength);

		//find new x/y
		var newX = rowLength - y - 1;
		var newY = x;

		//convert back to index
		var newPosition = newY * rowLength + newX;
		newGrid[newPosition] = target[i];
	}
	return newGrid;
}

var randomRotate = function(target){
	var count = Math.floor(Math.random() * 4);
	for(var i=0;i<count;i++) {
		target = rotateGrid(target);		
	}
	return target;
}
grid0 = randomRotate(grid0);
grid1 = randomRotate(grid1);
grid2 = randomRotate(grid2);
grid3 = randomRotate(grid3);


for (var i = 0; i < grid0.length; i++) {
	$('table:eq(0) th:eq(' + i + ')')
		.addClass(grid0[i][0])
		.append('<span>' + grid0[i][1] + '</span>');
}
for (var i = 0; i < grid1.length; i++) {
	$('table:eq(1) th:eq(' + i + ')')
		.addClass(grid1[i][0])
		.append('<span>' + grid1[i][1] + '</span>');
}
for (var i = 0; i < grid2.length; i++) {
	$('table:eq(2) th:eq(' + i + ')')
		.addClass(grid2[i][0])
		.append('<span>' + grid2[i][1] + '</span>');
}
for (var i = 0; i < grid3.length; i++) {
	$('table:eq(3) th:eq(' + i + ')')
		.addClass(grid3[i][0])
		.append('<span>' + grid3[i][1] + '</span>');
}


$('span').css('font-size', cellSize * .6 + 'px');

//randomize start and start/goal
function reset(){
	$('span').each(function(){
		$(this).removeClass('goal');
	});
	while($('.goal').length < 3) {
		var position = Math.floor(Math.random() * $('span').length);
		$('span:eq('+position+')').addClass('goal');
	}	
}

reset();



$('.timer').width(cellSize * 6 + 'px');
var count = 90;

var timer = setInterval(function() {
	count--;
    $(".timer").width(count / 90 * cellSize * 6 +'px');
    if(count == 1) {reset(); count = 90;}
}, 1000);
var hrCounter = 60 * 10;
var hrTimer = setInterval(function() {
	hrCounter--;
    if(hrCounter == 1) {location.reload();};
}, 1000);

$('body').click(function(){
	count = 90;
	reset();
});
$(window).resize(function(){location.reload();});