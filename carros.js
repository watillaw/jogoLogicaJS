let xCarros = [600,400,550,330,500,120];
let yCarros = [40,98,156,210,270,318];
let cCarros = 50;
let lCarros = 40;
let velocidadeCarros = [3,2,4,5,2.5,7];

function mostraCarro(){
  for( i =0; i< imagemCarros.length; i++){
    image(imagemCarros[i],xCarros[i],yCarros[i],cCarros,lCarros);
  }
};

function movimentoCarros(){
  for(i=0; i< xCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarPosicaoCarros(){
  for(i=0; i< xCarros.length; i++){
    // se minha funcao returnar true ele executa o posicionamento inicial dos carros
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

// essa funcao retorna um true
function passouTodaATela(xCarro){
  return xCarro < -50;
}