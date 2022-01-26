function initFilmesAtuais(e) {
  const cards = document.querySelectorAll(" .item ");

  // modal tags
  const modal = document.querySelector(".modal");
  const btnFechar = document.querySelector(".fechar i");
  const titulo = document.querySelector(".titulo-descricao");
  const descricao = document.querySelector(".detalhes p");
  const smallGenero = document.querySelector(".sinopse .fa-film small");
  const smallNota = document.querySelector(".sinopse  .fa-smile small");
  const smallLancamento = document.querySelector(
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
    titulo.innerHTML = nome;
    descricao.innerHTML = sinopse;

    img.src = `assets/disney-atuais/${url}`;
    smallHora.innerHTML = hora;
    smallGenero.innerHTML = genero;
    smallLancamento.innerHTML = lancamento;
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
  });
  modal.addEventListener("click", fecharModal);
  btnFechar.addEventListener("click", btnFecharModal);
}

window.addEventListener("load", initFilmesAtuais);
window.addEventListener("resize", initFilmesAtuais);
