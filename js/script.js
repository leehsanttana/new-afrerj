const liParcerias = document.querySelectorAll('.parcerias-nav li');
const sectionParcerias = document.querySelectorAll('.parcerias-list section');

liParcerias[0].classList.add('active');
sectionParcerias[0].classList.add('active');

function activeTab(i){
    liParcerias.forEach((li) =>{
        li.classList.remove('active')
    })

    sectionParcerias.forEach((section) =>{
        section.classList.remove('active');
    })

    liParcerias[i].classList.add('active');
    sectionParcerias[i].classList.add('active');
}

liParcerias.forEach((li, i) =>{
    li.addEventListener('click', () =>{
        activeTab(i);
    })
})

function modalLogin(){
    const btnLogin = document.querySelector('[data-login="btn"]');
    const modalLogin = document.querySelector('[data-login="modal"]');
    const btnClose = document.querySelector('[data-login="close"]');

    function openModalLogin(){
        modalLogin.classList.add('active');
    }

    function closeModalLogin(event){
        event.preventDefault();
        modalLogin.classList.remove('active');
    }

    function cliqueForaModal(event){
        if(event.target === this)
        closeModalLogin(event);
    }

    btnLogin.addEventListener('click', openModalLogin);
    btnClose.addEventListener('click', closeModalLogin);
    modalLogin.addEventListener('click', cliqueForaModal);
}

modalLogin();

function whatsappPopup(){
    const btnWhatsapp = document.querySelector('.whatsapp');
    btnWhatsapp.classList.add('open');
}

setTimeout(whatsappPopup, 2000);