noseX = 0;
noseY = 0;

function preload(){
 mustache = loadImage("https://i.postimg.cc/P5GGJ7nb/2-2-moustache-png-file-thumb.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 60, 40);
}

function takeSnapshot(){
    save("mustache_filter_image.png");
}

function modelLoaded(){
    console.log('poseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0){
    
    console.log(results);
    noseX = results[0].pose.nose.x-30;
    console.log("nose x = " + results[0].pose.nose.x);
    noseY = results[0].pose.nose.y;
    console.log("nose y = " + results[0].pose.nose.y);
 }
}