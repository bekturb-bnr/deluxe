//Аккордион
let accordions = document.querySelectorAll('.about__tips-item');

accordions.forEach(function (el) {
    el.addEventListener('click', function (){
        accordions.forEach(function (item){
            if (el != item || el.classList.contains('about__tips-item-open')) {
                item.classList.remove('about__tips-item-open');
            } else {
                item.classList.add('about__tips-item-open');
            }
        });
    });
});