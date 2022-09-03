img="";
var status="";
objects=[];
function preload() {
   img = loadImage("cat and bird.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
}

function modelLoaded() {
    console.log('Model Loaded!');
   var status = true;
    objectDetector.detect(img , gotResult);
}

function draw() {
image(img ,0 ,0 ,640 ,420);

 if (status = !"") 
 {
      
 
 for (i = 0; i < objects.length; i++)
 {
  document.getElementById("status").innerHTML = "Status:Detecting Objects";

  fill("#008080");
  percent = floor(objects[i].confidence * 100);
  text(objects[i].label + " " +percent+ "%" +object[i].y + 15 +object[i].x + 15);
  noFill();
  stroke("#008080");
  rect(object[i].y ,object[i].x ,object[i].height , object[i].width);
 }
}

}

function gotResult(error, results) {
    if(error) 
    {
        console.log(error);

         console.log(results);

        object = results;

    }
} 