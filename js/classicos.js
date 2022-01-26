function initClassicos() {
  const cards = document.querySelectorAll(" .item ");
  // modal tags
  const modal = document.querySelector(".modal");
  const btnFechar = document.querySelector(".fechar i");
  const titulo = document.querySelector(".titulo-descricao");
  const descricao = document.querySelector(".detalhes p");
  const smallGenero = document.querySelector(".sinopse .fa-film small");
  const smallNota = document.querySelector(".sinopse  .fa-smile small");
  const smallLancamanto = document.querySelector(
    ".sinopse .fa-calendar-alt small"
  );
  const smallHora = document.querySelector(".fa-clock small");
  const img = document.querySelector(".img img");

  function abrirDetalhes(e) {
    const nome = e.target.dataset.nome;
    const url = e.target.dataset.img;
    const sinopse = e.target.dataset.detalhes;
    const genero = e.target.dataset.genero;
    const lancamento = e.target.dataset.lancamento;
    const avaliacao = e.target.dataset.avalicao;
    const hora = e.target.dataset.duracao;
    img.src = `assets/classicos/${url}`;
    titulo.innerHTML = nome;
    descricao.innerHTML = sinopse;
    smallHora.innerHTML = hora;
    smallGenero.innerHTML = genero;
    smallLancamanto.innerHTML = lancamento;
    descricao.innerHTML = sinopse;
    smallNota.innerHTML = avaliacao;
    modal.classList.add("active");
  }

  function fecharModal(e) {
    if (e.target.classList[0] === "modal") {
      modal.classList.remove("active");
    }
  }
  function btnFecharModal() {
    modal.classList.remove("active");
  }
  cards.forEach((card) => {
    card.addEventListener("click", abrirDetalhes);
    card.addEventListener("touchStart", abrirDetalhes);
  });
  btnFechar.addEventListener("click", btnFecharModal);
  modal.addEventListener("click", fecharModal);
}
window.addEventListener("load", initClassicos);
