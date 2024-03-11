img = "";
status = "";

function preload()
{
    img = loadImage("./fotos/televisao.jpg");
}

function setup()
{
    canvas = createCanvas(400, 300);
    canvas.position(windowWidth/2 -200, windowHeight/2 -100);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
}

function modelLoaded()
{
    console.log("Modelo Carregado!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function draw(){
    image(img, 0, 0, 400, 300);
}


function gotResult(error,results)
{
    if (error)
    {
        console.log(error);
    }
    console.log(results); 
}
