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