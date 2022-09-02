// Выбор типов помещений
let allBtn = document.querySelector('.flats__btn-link-all')
let livedBtn = document.querySelector('.flats__btn-link-lived')
let comersBtn = document.querySelector('.flats__btn-link-comers')

let flatsCards = document.querySelectorAll('.flats__card')
let flatsCardsLived = document.querySelectorAll('.flats__card-lived')
let flatsCardsComers = document.querySelectorAll('.flats__card-comers')

allBtn.onclick = function () {
    allBtn.classList.add('flats__btn-link-active')
    livedBtn.classList.remove('flats__btn-link-active')
    comersBtn.classList.remove('flats__btn-link-active')
    flatsCards.forEach(function (card){
        card.style.display = 'block'
    })
}

livedBtn.onclick = function () {
    allBtn.classList.remove('flats__btn-link-active')
    livedBtn.classList.add('flats__btn-link-active')
    comersBtn.classList.remove('flats__btn-link-active')
    flatsCardsLived.forEach(function (card){
        flatsCards.forEach(function (card){
            card.style.display = 'none'
        })
        flatsCardsLived.forEach(function (card){
            card.style.display = 'block'
        })
    })
}

comersBtn.onclick = function () {
    allBtn.classList.remove('flats__btn-link-active')
    livedBtn.classList.remove('flats__btn-link-active')
    comersBtn.classList.add('flats__btn-link-active')
    flatsCardsComers.forEach(function (card){
        flatsCards.forEach(function (card){
            card.style.display = 'none'
        })
        flatsCardsComers.forEach(function (card){
            card.style.display = 'block'
        })
    })
}


//Слайдер
var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".carousel__nav-btn-next",
        prevEl: ".carousel__nav-btn-prev",
    },
    loop:true
});


//Карта
var map;

DG.then(function () {
    map = DG.map('map', {
        center: [51.126882, 71.434959],
        zoom: 13
    });
    myIcon = DG.icon({
        iconUrl: './src/images/map__icon.png',
        iconSize: [70, 70],
        className: 'map_icon'
    });
        DG.marker([51.126882, 71.434959], {icon: myIcon, label : 'DELUXE HOUSE design studio'}).addTo(map).bindPopup('тел.: 8 (700) 300-03-40');;
});

let burger = document.querySelector('.burger__menu')
let headerList = document.querySelector('.header__list')

burger.onclick = function (){
    burger.classList.toggle('burger__menu-active')
    headerList.classList.toggle('header__list-active')
}
