const hamburger = document.querySelector('.hamburger');
const container = document.querySelector('.mobile-cont');

hamburger.addEventListener('click', () => {
container.classList.toggle('show-menu')
});

function dropDown() {
    let menuMobile = document.querySelector('.producty-m')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').style = "transform: rotate(0deg);";
    }else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').style = "transform: rotate(180deg);";
    }

};

function dropDown2() {
    let menuMobile = document.querySelector('.company-m')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon-2').style = "transform: rotate(0deg);";
    }else {
        menuMobile.classList.add('open')
        document.querySelector('.icon-2').style = "transform: rotate(180deg);";
    }

};

function dropDown3() {
    let menuMobile = document.querySelector('.connect-m')

    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon-3').style = "transform: rotate(0deg);";
    }else {
        menuMobile.classList.add('open')
        document.querySelector('.icon-3').style = "transform: rotate(180deg);";
    }

};