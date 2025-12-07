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

function exibir() {
    let tabela = `<table cellpadding="10" border="1">`;
    for(let t = 0; t < 3; t++){
        tabela += "<tr>"
        tabela += "<td>1</td>"
        tabela += "<td>2</td>"
        tabela += "<td>3</td>"
        tabela += "</tr>"
    }
    tabela += "<table>"
    board.innerHTML = tabela
    
}

function jogar() { }

function checar() { }