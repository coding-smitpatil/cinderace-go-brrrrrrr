nosex=0;
nosey=0;

function preload(){
    clownnose=loadImage("https://i.postimg.cc/fySdV4dW/ror-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",getposes);
}

function draw(){
    image(video,0,0,300,300);
image(clownnose,nosex,nosey,30,30);
}

function takesnapshot(){
    save("filterpic.png");
}

function modelloaded(){
    console.log("posenet is initialized");
}

function getposes(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x= "+results[0].pose.nose.x);
        console.log("nose y= "+results[0].pose.nose.y);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y-100;
    }
}