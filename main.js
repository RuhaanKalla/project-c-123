
function setup(){
    canvas = createCanvas(500,550);
    canvas.center();
    video = createCapture(VIDEO);
    

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses);
}

function modelLoaded(){
    console.log("Model Loaded!!");
}

function gotPoses(){

}