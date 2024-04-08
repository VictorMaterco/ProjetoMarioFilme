//criando variavel da janela
const modal = document.querySelector('.modal');
//criando variaveis para os botões
const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
//criando variavel para o trailer
const video = document.getElementById('video');
//criando variavel para o link do trailher
const linkDoVideo = video.src;

//função para colocar e retirar a classe 'aberto' do modal
function alternarModal() {
    modal.classList.toggle('aberto');
}
//função para abrir modal no click
botaoTrailer.addEventListener('click', () => {
    video.setAttribute('src', linkDoVideo);
    alternarModal();
});
//funcao para fechar modal no click
botaoFecharModal.addEventListener('click', () => {
    video.setAttribute('src', '');
    alternarModal();
})