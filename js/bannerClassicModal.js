const btnBanner = document.querySelector(".btn-banner");
const tituloBanner = document.querySelector(".titulo-descricao");
const modal = document.querySelector(".modal");
const descricao = document.querySelector(".detalhes p");
const img = document.querySelector(".img img");
const smallGenero = document.querySelector(".sinopse .fa-film small");
const smallLancamento = document.querySelector(
  ".sinopse .fa-calendar-alt small"
);
const smallHora = document.querySelector(".fa-clock small");
const smallNota = document.querySelector(".sinopse  .fa-smile small");

function initBannerBannerClassicModal(e) {
  const nome = e.target.dataset.nome;
  const desc = e.target.dataset.detalhes;
  const genero = e.target.dataset.genero;
  const lancamento = e.target.dataset.lancamento;
  const hora = e.target.dataset.duracao;
  const nota = e.target.dataset.avalicao;
  smallHora.innerHTML = hora;
  smallGenero.innerHTML = genero;
  smallLancamento.innerHTML = lancamento;
  img.src = `assets/classicos/img11.jpg`;
  tituloBanner.innerHTML = nome;
  descricao.innerHTML = desc;
  smallNota.innerHTML = nota;
  modal.classList.add("active");
}
btnBanner.addEventListener("click", initBannerBannerClassicModal);
