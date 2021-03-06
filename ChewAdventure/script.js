
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //nos dara acceso a los metodos de construccion del canvas
canvas.width = 800;
canvas.height = 500;

const keys = []; //matriz para saber que teclas presiono el usuario

const player ={
  x:200,
  y:200,
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

/*  setInterval(function(){ 
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//el primer argumento es la imagen, el 2do y 3r sus coordenada en las esquinas, y el 4to y 5to las dimensiones para que cubra el espacio
  drawSprite(playerSprite,player.width * player.frameX,player.height * player.frameY,player.width,player.height,player.x,player.y,player.width, player.height);
  movePlayer();
  handlePlayerFrame();

},70);  */ 

window.addEventListener("keydown",function(e){
  keys[e.keyCode] = true;
  player.moving = true;
});


window.addEventListener("keyup",function(e){
  delete keys[e.keyCode];
  player.moving = false;
});

//ESTA FUNCION HACE QUE CHEWBACCA SE MUEVA
function movePlayer(){
    //Para que se mueva hacia arriba(EJE Y NEGATIVO)
    if(keys[38] && player.y > 100){ //para que no se salga de la pantalla
      player.y -= player.speed;
      player.frameY = 3;
      player.moving = true;
    }
    //Para que se mueva hacia la izquierda(EJE X NEGATIVO)
    if(keys[37] && player.x > 0){
      player.x -= player.speed;
      player.frameY = 1;
      player.moving = true;

    }
    //Para que se mueva hacia abajo(EJE Y POSITIVO)
    if(keys[40] && player.y < canvas.height - player.height){
        player.y += player.speed;
        player.frameY = 0;
        player.moving = true;
      } 
    //Para que se mueva a la derecha(EJE X POSITIVO)
    if(keys[39] && player.x < canvas.width - player.width){
      player.x += player.speed;
      player.frameY = 2;
      player.moving = true;
    }
}

//Cambiar las coordenadas horizontales del area de recortes para alterar entre cuadros
function handlePlayerFrame(){
  if(player.frameX < 3 && player.moving) player.frameX++
  else player.frameX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;

//loop de animacion para dibujar el fondo

function startAnimating(fps){
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate (){
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if(elapsed > fpsInterval){
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);//el primer argumento es la imagen, el 2do y 3r sus coordenada en las esquinas, y el 4to y 5to las dimensiones para que cubra el espacio
    drawSprite(playerSprite,player.width * player.frameX,player.height * player.frameY,player.width,player.height,player.x,player.y,player.width, player.height);
    movePlayer();
    handlePlayerFrame();
    //requestAnimationFrame(animate); 
  }
}


startAnimating(20);















































/*const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //nos dara acceso a los metodos de construccion del canvas
canvas.width = 800;
canvas.height = 500;

const keys = []; //matriz para saber que teclas presiono el usuario

const player ={
  x:200,
  y:300,
  width:40,
  height:72,
  frameX:0, //almacenan las coordenadas del fotograma en x
  frameY:0, //almacena las coordenadas del fotograma en y
  speed: 9,
  moving: false
}

/*como calcular el ancho* y el alto del personaje?
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
  drawSprite(playerSprite,0,0,player.width,player.height,player.x,player.y,150,player.width, player.height);
  movePlayer();
  requestAnimationFrame(animate); 

}

animate();

//seguimiento de las teclas que presione el usuario
window.addEventListener("keydown",function(e){
  keys[e.keyCode] = true;
  //console.log(keys);
});

window.addEventListener("keyup",function(e){
  delete keys[e.keyCode];
});

const movePlayer = () =>{
  if(keys[38] && player.y > 100){
    player.y -= player.speed;
    player.frameY = 3;
  }
}
 */
 
