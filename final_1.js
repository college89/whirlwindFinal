let master_text = "";
let words = ["Smart", "Kind", "Amazing", "Bold", "Strong", "Confident",
      "Ambitious", "Brave", "Cool", "Funny"];
let input, button, greeting;
let submit_remove = 0;
let canvas;
let gifLength = 5;

let started = 0;

function setup() {

   var p5Canvas = createCanvas(windowWidth, windowHeight);
   canvas = p5Canvas.canvas;

  // frameRate(5);

  input = createInput();
  input.position(20, 230);
  button = createButton('submit');
  button.position(input.x + input.width, 230);
  button.mousePressed(update_words);


  fill(255);
  greeting = createElement('h2', 'What is your name?');
  greeting.style('color', '#ff0000');

  greeting.position(20, 180);

  //createCanvas(windowWidth, windowHeight);

	frameRate(5);
	//capturer.start();

}

function add_buttons_back(){
	input = createInput();
	input.position(20, 105);
	button = createButton('submit');
	button.position(input.x + input.width, 350);
	button.mousePressed(update_words);


	fill(255);
	greeting = createElement('h2', 'What is your name?');
	greeting.style('color', '#ff0000');

	greeting.position(20, 100);

}

function save_photo(){
     save('pix.jpg');
}

function save_video(){
	if(started != 1){
	 capturer.start();
	 started = 1;
	 console.log("Starting to save");
	 greeting.remove();
	 input.remove();
	 button.remove();
	 submit_remove = 1;
 }

draw() ;
}


function update_words(){
    const name = input.value();
    words.push(name);
    greeting.remove();
    input.remove();
    button.remove();
    submit_remove = 1;
}

let count = 0;
function draw() {

  background(0);

  console.log("sadfsad");
  fill(random(255), random(255), 10);
  textSize(30);
  translate(width/2, height/2);

  let ystep = 10;
  let lastx = 20;
  let lasty = 50;
  let y = 50;
  let border = 20;

  for (var x=border; x<=width-border; x+=10) {

    ystep = random(10)-15;
    y += ystep;
    line(x, y, lastx, lasty);
    lastx = x;
    lasty = y;

    text(master_text, 0,0);
    text(words[int(random(words.length-1))],x+50,y);
    text(words[int(random(words.length-1))],x,y+50);

    rotate(y);
  }

	if(started === 1 && count < 50){
		//capturer.start();

		capturer.capture(canvas);
		count++;
		console.log("started to capture");

	}else if (started === 1) {

		capturer.stop();
	 capturer.save();
	 started = 0;
	 count = 0;
	 console.log("done");
add_buttons_back();
	}

console.log("sdf");

}

//add this function make the text be dynamic
function keyReleased() {
 if (keyCode==8) {
   if (master_text.length>0) {
      master_text = master_text.substring(0, master_text.length-1);
   }
 }
 else if (keyCode>=65 && keyCode<=90 || keyCode==32 || keyCode==54) {
   master_text += str(key);
 }else if(keyCode == ENTER || keyCode == RETURN){
   console.log("hi");
   master_text = master_text + " " + master_text;
 }
}
