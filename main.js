noseX = 0;
noseY = 0;




function preload(){
    mustache_img = loadImage('https://i.postimg.cc/ZnBKsbsj/7-2-moustache-png-image-thumb.png')
}
function setup(){
   canvas= createCanvas(400,400);
   canvas.center();
   //wecam setup here long.......//
   video = createCapture(VIDEO);
   video.size(400,400);
   video.hide();

   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function draw(){
    image(video ,0,0,400,400);
    image(mustache_img,noseX,noseY,80,40);
}
function take_snapshot(){
    save('mustasche-deleto.png');
}
function modelLoaded(){
console.log("poseNet model iSss activated , initialized and ready to GO");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y= " + results[0].pose.nose.y);
    }
   
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}


































    
