let yAtor = 366;
let xAtor = 80;
let colisao = false;
let pontos = 0;

function mostraAtor(){
  image(personagem,xAtor,yAtor,30,30);
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
    if(posicaoAtor()){
       yAtor = 366;
       }
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function posicaoAtor(){
  return yAtor >366;
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i=0; i<imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],cCarros,lCarros,xAtor,yAtor,15)
    if (colisao){
      colidiu();
    }
  }
}

function colidiu(){
  yAtor = 366;
  xAtor = 10;
  somColisao.play()
  if(pontosPositivos()){
    pontos -=1;
  }
  

}

function atualizaPontos(){
  textAlign(CENTER);
  fill(color(255,230,0));
  textSize(25)
  text(pontos,width /5, 25);
  
  if(yAtor < 15){
    pontos += 1;
    somPontos.play();
    yAtor =366;
    xAtor = 10;
  }

}
function pontosPositivos(){
  return pontos > 0;
}