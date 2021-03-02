export default function modalMenu() {
  const btnMenu = document.querySelector('[data-menu="btn"]');
  const modalMenu = document.querySelector('[data-menu="modal"]');

  function openModalMenu() {
    modalMenu.classList.toggle('active');
  }

  function closeModalMenu(event) {
    event.preventDefault();
    modalMenu.classList.remove('active');
  }

  function cliqueForaModal(event) {
    if (event.target === this) closeModalMenu(event);
  }

  btnMenu.addEventListener('click', openModalMenu);
  modalMenu.addEventListener('click', cliqueForaModal);
}
