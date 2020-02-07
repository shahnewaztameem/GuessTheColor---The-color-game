//keep track the squars
var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
//select squars
var squars = document.querySelectorAll(".square");
//select colordisplay
var colorDisplay = document.getElementById("colorDisplay");
//random color  picked up
var pickedColor = pickColor();
//selector for message display
var messageDisplay = document.querySelector("#message");
//select reset button
var resetButton = document.getElementById("reset");


//diffculty buttons
var easyMode = document.querySelector("#easyMode");
var hardMode = document.querySelector("#hardMode");

easyMode.addEventListener("click",function(){
	easyMode.classList.add("selected");
	hardMode.classList.remove("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squars.length; i++) {
		if(colors[i]){
			squars[i].style.backgroundColor = colors[i];
		}
		else {
			squars[i].style.display = "none";
		}
	}
});

hardMode.addEventListener("click",function(){
	easyMode.classList.remove("selected");
	hardMode.classList.add("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squars.length; i++) {
		squars[i].style.backgroundColor = colors[i];
		squars[i].style.display = "block";
	}
});
//reset to random color after clicking
resetButton.addEventListener("click",function(){
	//generate all new colors
	//console.log(numberOfSquares);
	colors = generateRandomColors(numberOfSquares);
	
	//pick new colors from array
	pickedColor = pickColor();
	
	//change color display to matched picked color
	colorDisplay.textContent = pickedColor;
	
	//change colors of the squares
	for(var i = 0; i < colors.length; i++){
		squars[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
});

//clicking reset button will reset colors

var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;
for(var i = 0; i < squars.length; i++){
	//assign colors to individual squars
	squars[i].style.backgroundColor = colors[i];
	
	//add click listener to the squares
	squars[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			
			//change reset button text after guessing correct
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			//fade the color to the background color
			this.style.backgroundColor = "#232323";
			
			//display message
			messageDisplay.textContent = "Try Again!";
		}
	});
}

function changeColor(color) {
	// loop through all the squares
	for(var i = 0; i < squars.length; i++){
		
		//change to the matched color
		squars[i].style.background = color;
	}
}

// random colors from array
function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}

//generate random colors
function generateRandomColors(number){
	//make array 
	var arr = [];
	
	//add number of random colors to the array
	for(var i = 0 ; i < number; i++){
		// generate random color and push it to the array
		arr.push(randomColor());
	}
	// return the array
	return arr;
}

function randomColor(){
	// generate for red
	var r = Math.floor(Math.random() * 256);
	
	//generate for green
	var g = Math.floor(Math.random() * 256);
	
	//generate for blue
	var b = Math.floor(Math.random() * 256);
	
	//rgb(r, g, b);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}