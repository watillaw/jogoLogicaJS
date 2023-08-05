let imagemEstrada;
let personagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let somTrilha;
let somColisao;
let somPontos;

function preload(){
  imagemEstrada = loadImage("images/estrada.png")
  personagem = loadImage("images/ator-1.png")
  imagemCarro1 = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro1,imagemCarro2,imagemCarro3];
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPontos = loadSound("sons/pontos.wav");
}
