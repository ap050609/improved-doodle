function setup(){
    video = createCapture(VIDEO);
    video.size(300,300);
    video.position(200,200)

    canvas = createCanvas(300,300);
    canvas.position(630,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#800000');
}
function modelLoaded(){
    console.log('PoseNet Load Status: YES, FUNCTIONAL')
}
function gotPoses (results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}