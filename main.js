// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx.canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	else{
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log(keyPressed);
	}
	if((keyPressed >=48 && keyPressed<=57))
		//write a code to check the type of key pressed
	else{
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number key";
		console.log(keyPressed);
	}
	if((keyPressed >=37 && keyPressed<=40))
		//write a code to check the type of key pressed
	else{
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow key";
		console.log(keyPressed);
	}
	if((keyPressed >=17 && keyPressed<=18)|| (keyPressed >=27 ))
		//write a code to check the type of key pressed
	else{
		specialkey();
		document.getElementById("d1").innerHTML="You pressed Special key";
		console.log(keyPressed);
	}
	if((keyPressed Symbol))
		//write a code to check the type of key pressed
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or Other key";
		console.log(keyPressed);
	}
}

function aplhabetkey()
{
	//upload respective image with the message.
	img_image="Alpkey.png"; 
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
