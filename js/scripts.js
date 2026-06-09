// ========== CARROSSEL ==========
let botaoAvancar;
let btnVoltar;
let imagem;
let i = 0;
const src = './img/';
const ex = '.jpg';
const fotos = ["foto1", "foto2", "foto3"];

window.onload = iniciar;

function iniciar() {
    // Carrossel
    botaoAvancar = document.getElementById('botaoAvancar');
    btnVoltar = document.getElementById('botaoVoltar');
    imagem = document.getElementById('fotogamer');
    botaoAvancar.onclick = avancarFoto;
    btnVoltar.onclick = voltarFoto;

    // Menu hamburguer
    const toggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');

    toggle.onclick = function () {
        menu.classList.toggle('aberto');
    };

    // Fecha o menu ao rolar
    window.addEventListener('scroll', function () {
        menu.classList.remove('aberto');
    });
}

function avancarFoto() {
    i++;
    if (i > fotos.length - 1) i = 0;
    mostrarFoto();
}

function voltarFoto() {
    i--;
    if (i < 0) i = fotos.length - 1;
    mostrarFoto();
}

function mostrarFoto() {
    imagem.src = src + fotos[i] + ex;
}