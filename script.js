var hardMode = document.querySelector("#hard");
var easyMode = document.querySelector("#easy");
var blocks = 6;

var colors = generateRandomColor(blocks);

//assign color to all the square
var square = document.querySelectorAll(".square");
for(var i = 0; i < colors.length ; i++ ){
	square[i].style.backgroundColor = colors[i];
	//click listener
	newEvent(square[i]);	
}

//easy mode
easyMode.addEventListener("click",function(){
	blocks = 3;
	easyMode.classList.add("active");
	hardMode.classList.remove("active");
	changeAttributes();
	for(var i = 0; i < colors.length ; i++ ){
		square[i].style.backgroundColor = colors[i];
		//click listener
		newEvent(square[i]);	
	}
	for(var j = 2; j > -1 ; j--){
		document.querySelectorAll(".erase")[j].classList.remove("square");
	}
}); 

hardMode.addEventListener("click",function(){
	blocks = 6;
	easyMode.classList.remove("active");
	hardMode.classList.add("active");
	for(var j = 0; j < 3 ; j++){
		document.querySelectorAll(".erase")[j].classList.add("square");
	}
	square = document.querySelectorAll(".square");
	changeAttributes();
	for(var i = 0; i < colors.length ; i++ ){
		square[i].style.backgroundColor = colors[i];
		//click listener
		newEvent(square[i]);	
	}
});


//******Genarating Random Colors*********
//assigning color to each element in array
function generateRandomColor(num){
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	} 
	return arr;
}
//generating a string with random colors
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + b + ", " + g + ")";
}
//*****************************************

var message = document.querySelector("#message");


//**************Shuffle***************
//selected color
var pickedColor = colors[pickColor()];

//pick a random color from the array of colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return random;
}
//*************************************

//synch heading with picked color
var heading = document.querySelector(".heading");
heading.textContent = pickedColor;
heading.classList.add("heading");

//for new game
var newGame = document.querySelector("#onleft");
newGame.addEventListener("click",function(){
	changeAttributes();
	this.textContent = "New Colors";
	for(var i = 0; i < colors.length ; i++ ){
		square[i].style.backgroundColor = colors[i];
		//click listener
		newEvent(square[i]);	
	}		
});


function changeAttributes(){
	colors = generateRandomColor(blocks);
	pickedColor = colors[pickColor()];
	document.querySelector("header").style.backgroundColor = "#0288D1";
	heading.textContent = pickedColor;
	heading.classList.add(".heading");
	document.querySelector("#message").textContent = "";
}

//new event click listener
function newEvent(square){

	square.addEventListener("click",function(){
		if(this.style.backgroundColor === pickedColor){
			console.log("Matched");
			message.textContent = "Correct!";
			changeColor(pickedColor);
			document.querySelector(".color").style.backgroundColor = pickedColor;
			newGame.textContent = "Play Again?";
		}
		else{
			console.log("not matched");
			this.style.backgroundColor = "black";
			message.textContent = "Try Again!";
		}
	});
}



function changeColor(color){
	for(var i = 0; i < square.length ; i++){
		square[i].style.backgroundColor = pickedColor;
	}
}