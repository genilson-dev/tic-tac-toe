let tabuleiro;
let board;
let aviso;
let jogador;
let linha;
let coluna;


function start() {
    tabuleiro = [];
    board = document.getElementById("board")
    aviso = document.getElementById("aviso")
    jogador = 1;
    for(let i = 0; i < 3; i++){
        tabuleiro[i] = [];
        // console.log(tabuleiro);
        for(let t = 0; t < 3; t++){
            tabuleiro[i][t] = 0
            // console.log(tabuleiro);
            
        }
    }
    console.table(tabuleiro);   
    exibir()     
}

function exibir() { }

function jogar() { }

function checar() { }