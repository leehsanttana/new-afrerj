export default function modalLogin() {
  const btnLogin = document.querySelector('[data-login="btn"]');
  const modalLogin = document.querySelector('[data-login="modal"]');
  const btnClose = document.querySelector('[data-login="close"]');

  function openModalLogin() {
    modalLogin.classList.add('active');
  }

  function closeModalLogin(event) {
    event.preventDefault();
    modalLogin.classList.remove('active');
  }

  function cliqueForaModal(event) {
    if (event.target === this) closeModalLogin(event);
  }

  btnLogin.addEventListener('click', openModalLogin);
  btnClose.addEventListener('click', closeModalLogin);
  modalLogin.addEventListener('click', cliqueForaModal);
}
