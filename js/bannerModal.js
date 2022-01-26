const container = document.querySelector(".container-banner img ");
const btnBanner = document.querySelector(".btn-banner");
const modal = document.querySelector(".modal");
const titulo = document.querySelector(".titulo-descricao");
const descricao = document.querySelector(".detalhes p");
const smallGenero = document.querySelector(".sinopse .fa-film small");
const smallLancamanto = document.querySelector(
  ".sinopse .fa-calendar-alt small"
);
const smallHora = document.querySelector(".fa-clock small");
const smallNota = document.querySelector(".sinopse  .fa-smile small");

const img = document.querySelector(".img img");
function initBannerModal(e) {
  if (e.type === "touchstart") e.preventDefault();
  const nome = e.target.dataset.nome;
  const desc = e.target.dataset.detalhes;
  const genero = e.target.dataset.genero;
  const lancamento = e.target.dataset.lancamento;
  const hora = e.target.dataset.duracao;
  const avaliacao = e.target.dataset.avalicao;

  smallHora.innerHTML = hora;
  smallGenero.innerHTML = genero;
  smallLancamanto.innerHTML = lancamento;
  img.src = `assets/disney-atuais/img16.jpg`;
  titulo.innerHTML = nome;
  descricao.innerHTML = desc;
  smallNota.innerHTML = avaliacao;

  modal.classList.add("active");
}
btnBanner.addEventListener("click", initBannerModal);
