img = ""
status1 = "";
objects = [];

 function preload()
{
    img = loadImage("cars.jpg")
}

function setup()
{
canvas = createCanvas(640 , 420)
canvas.center()
objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log(" Model Loaded!")
    status1 = true;
    objectDetector.detect(img , gotResult)
}

function gotResult(error , result)
{
if (error) {
    console.log(error)
}
else {
console.log(result)
objects = result;
}
}

function draw()
{
    image(img , 0 , 0 , 640 , 420)

    if(status1 != "")
    {
        for (i = 0; i < objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Objects Detected ";

            fill("red")
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
            console.log("Hi!")
            noFill()
            stroke("red")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            console.log("Hi Again!")
        }
    }
}