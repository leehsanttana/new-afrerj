export default function whatsappPopup() {
  const btnWhatsapp = document.querySelector('.whatsapp');
  btnWhatsapp.classList.add('open');

  setTimeout(whatsappPopup, 2000);
}
