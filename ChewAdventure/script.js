const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //nos dara acceso a los metodos de construccion del canvas
canvas.width = 800;
canvas.height = 500;

const keys = []; //matriz para saber que teclas presiono el usuario

const player ={
  x:0,
  y:0,
  width:40,
  height:72,
  frameX:0, //almacenan las coordenadas del fotograma en x
  frameY:0, //almacena las coordenadas del fotograma en y
  speed: 9,
  moving: false
}

/*como calcular el ancho* y el alto del personaje?*/
const playerSprite = new Image(); //esta imagen creara una instancia que construira una imagen
playerSprite.src = "images/chewie.png"; //establezco su valor src en la ruta a nuestra hoja de sprites
const background = new Image();
background.src = "images/background.png";

//funcion para dinujar al personaje
const drawSprite = (img,sX,sY,sW,sH,dX,dY,dW,dH) =>{
  ctx.drawImage(img,sX,sY,sW,sH,dX,dY,dW,dH);
}



//loop de animacion para dibujar el fondo
const animate = () =>{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//el primer argumento es la imagen, el 2do y 3r sus coordenada en las esquinas, y el 4to y 5to las dimensiones para que cubra el espacio
  drawSprite(playerSprite,0,0,player.width,player.height,200,260,player.width, player.height);
  requestAnimationFrame(animate); 

}

animate();