/* OBJETIVO 1 - quando o usuario clicar no botao de ver trailer, devemos abrir o modal com o video do trailer
OBJETIVO 2 - quando o usuario clicar no x devemos fechar a modal

OBJETIVO 1 - quando o usuario clicar no botao de ver trailer, devemos abrir o modal com o video do trailer
passo 1: dar um jeito de pegar o elemento que representa o botão na tela usando o js
passo 2: dar um jeito de identificar quando o usuario clicar no botao
passo 3; dar um jeito de pegar o elemento da modal no js
passo 4: abrir a modal na tela 

OBJETIVO 2 - quando o usuario clicar no x devemos fechar a modal
passo 1: dar um jeito de pegar o elemento de fechar modal usando o js
passo 2: dar um jeito de identificar quando o usuario clicar no x
passo 3: fechar a modal
 */


const botaoTrailer = document.querySelector(".botao-trailer"); 
const video = document.getElementById("video");
const modal= document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = "https://www.youtube.com/embed/Cb4WV4aXBpk";

function alternarModal(){
    modal.classList.toggle("aberto");
};

botaoTrailer.addEventListener("click",() => {
    
    alternarModal();
    video.setAttribute("src", linkDoVideo)
});

botaoFecharModal.addEventListener("click", () => {
    
    alternarModal();
    video.setAttribute("src" , "");
    
});
