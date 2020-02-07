var colors = generateRandomColors(6);

//select squars
var squars = document.querySelectorAll(".square");
//select colordisplay
var colorDisplay = document.getElementById("colorDisplay");
//random color  picked up
var pickedColor = pickColor();

//selector for message display
var messageDisplay = document.querySelector("#message");

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