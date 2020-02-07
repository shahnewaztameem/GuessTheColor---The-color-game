var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
];

//select squars
var squars = document.querySelectorAll(".square");
//select colordisplay
var colorDisplay = document.getElementById("colorDisplay");
//color that picked
var pickedColor = pickColor();

var messageDisplay = document.querySelector("#message")

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
	for(var i = 0; i < squars.length; i++){
		squars[i].style.background = color;
	}
}

// random colors from array
function pickColor(){
	var randomColor = Math.floor(Math.random() * colors.length);
	return colors[randomColor];
}