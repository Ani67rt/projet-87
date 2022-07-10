canvas = document.getElemntById('myCanvas')
ctx = canvas.getContext("2d")

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	greencar_imgTag = newImage();
	greencar_imgTag.onload = uploadimg;
	greencar_imgTag.src = green_image; 

	background_imgTag = newImage();
  background_imgTag.onload = uploadimg;
 background_imgTag.src = green_image; 
 }
 


function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		
	{
		aplhabetkey();
		otherkey();
		document.getElementById("d1").innerHTML="You placed Alphabet key";
		console.log("alphabet Key")
	}
	else if(keyPressed >=48 && keyPressed<=57)
	{
     numberkey();
	 document.getElementById("d1").innerHTML="You pressed Number key"
	 console.log("Number Key")
    }
	else if(keyPressed >=37 && keyPressed<=40)
	{
      arrowkey();
	  document.getElementById("d1").innerHTML="You pressed Arrow key"
	  console.log("Arrow Key")
    }
	else if("keyPressed ==17")  (keyPressed ==18 || keyPressed ==27)
	{
      specialkey();
	  document.getElemntById("d1").innerHTML="You pressed ctrl/esc/alt";
	  console.log("Special Key")
    }
	else if(keyPressed >=20 && keyPressed<)
	{
		specialkey();
		document.getElemntById("d1").innerHTML="You pressed ctrl/esc/alt";
		console.log("Special Key")
	  }
}

function aplhabetkey()
{
	img_image="Alpkey.png"
	add();
}
function numberkey()
{
	img_image="numkey.png"
	add();
}
function arrowkey()
{
	img_image="Arrkey.png"
	add();
}
function specialkey()
{
	img_image="spkey.png"
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
