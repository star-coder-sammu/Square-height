noseX=0;
noseY=0;
difference = 0;
rightWristX=0;
leftWristX=0;

function preload(){
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;


        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX +"rightWristX" + rightWristX+ "difference = " + difference);
    }
}


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log('poseNet is Initialised !');
}

function draw() {
    background('#90FFFF');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
    fill('#ff66b3');
    stroke('#ff198d');
    square(noseX, noseY, difference);

}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}