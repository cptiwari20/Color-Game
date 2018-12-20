var numSqares = 6;
var colors = selectRandomColors(numSqares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var colorSel = randomColor(); // sELECT A COLOR FROM ARRAY
var msgDisplay = document.getElementById("msg");
var playAgain = document.querySelector("#tryAgain");
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");
// var easyBtn = document.querySelector("#EasyBtn");
// var hardBtn = document.querySelector("#HardBtn");
for(var i = 0; i< modeBtn.length; i++){
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSqares = 3: numSqares = 6;
		// if (this.textContent === "Easy") {
		// 	numSqares = 3;
		// } else{
		// 	numSqares = 6;
		// }
		reset();
})
}
function reset(){
	colors = selectRandomColors(numSqares);
	colorSel = randomColor();
	colorDisplay.textContent = colorSel;
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";

		}// hide lower oyher three squares
		else{
			squares[i].style.display = "none";
		}
	}
	
	h1.style.backgroundColor = "steelblue";
	playAgain.textContent = "NEW COLORS"
	msgDisplay.textContent = "changed!!"

}


colorDisplay.textContent = colorSel;

// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	// select only three colors in the colors array
// 	numSqares = 3;
// 	colors = selectRandomColors(numSqares); 
// 	// pick a ramdom color from the array 
// 	colorSel = randomColor();
// 	// chandge the display color
// 	colorDisplay.textContent = colorSel;
// 	// change the color af three upper 3 squares
// 	for(var i =0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];

// 		}// hide lower oyher three squares
// 		else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// 		h1.style.backgroundColor = "steelblue";
// 		playAgain.textContent = "NEW COLORS"
// })

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	// select only three colors in the colors array
// 	colors = selectRandomColors(numSqares); 
// 	// pick a ramdom color from the array 
// 	colorSel = randomColor();
// 	// chandge the display color
// 	colorDisplay.textContent = colorSel;
// 	// change the color af three upper squares
//  	for(var i =0; i < squares.length; i++){
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 	}	h1.style.backgroundColor = "steelblue";
// 		playAgain.textContent = "NEW COLORS";
// 		msgDisplay.textContent = "changed!!";
	
// })

playAgain.addEventListener("click", function(){
// 	colors = selectRandomColors(numSqares);
// 	colorSel = randomColor();
// 	colorDisplay.textContent = colorSel;
// 	for(var i = 0; i < squares.length; i++){
// 	squares[i].style.backgroundColor = colors[i];
// }
// 	h1.style.backgroundColor = "steelblue";
// 	this.textContent = "NEW COLORS"
// 	msgDisplay.textContent = "changed!!"
 reset();
})

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(colorSel === clickedColor){
			msgDisplay.textContent = "Correct!!"
			colorChange(colorSel);
			h1.style.backgroundColor = colorSel;
			playAgain.textContent = "PLAY AGAIN!!!!"
		}else {
			msgDisplay.textContent = "Try Again!!"
			this.style.backgroundColor = "#251412";
		}
})
};
function colorChange(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colorSel;
	}
}
// slect a ram=ndom color from the color array;
function randomColor(){
	var randCol = Math.floor(Math.random() * colors.length);
	return colors[randCol];
}

function selectRandomColors(num){
	// create new arrar
	var arr = [];
	// add new random color to the array
	for( var i = 0; i< num; i++){
		arr.push(randomColorsNew());
	}
	// get the array with color;
	return arr;

}

function randomColorsNew(){
	// create random color for red;
	var r = Math.floor(Math.random() * 256);
	// green
	var g = Math.floor(Math.random() * 256);
	// blue
	var b = Math.floor(Math.random() * 256);
	// get an rgb pattern color code;
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
