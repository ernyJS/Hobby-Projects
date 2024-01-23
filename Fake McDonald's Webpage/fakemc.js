const btnBurger = document.querySelector('.fa-hamburger');
const btnQuit = document.querySelector('.fa-times');
const navBar = document.querySelector('nav');
const logoMc = document.querySelector('nav div.logo');
const social = document.querySelector('nav div.social');
const btnOrder = document.querySelector('nav div.order');
const barLogo = document.querySelector('nav input');
const menuSec = document.querySelector('.menu');
const yeah = document.querySelector('main');
const ads = document.querySelector('section.ads');
const footer = document.querySelector('footer');

this.window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY;
    const yeahHeight = yeah.clientHeight;
    const yeahOff = yeah.offsetTop;
    const adsHeight = ads.clientHeight;
    const footerHeight = footer.clientHeight;
    const footerOff = footer.offsetTop;
    if(scrollHeight >= yeahHeight + 250){
        yeah.classList.add('show')
    }
    if(scrollHeight >= adsHeight + 500){
        ads.classList.add('show')
    }
    if(scrollHeight >= footerHeight + 1800){
        footer.classList.add('show')
    }
})



btnBurger.addEventListener('click', function(){
    btnBurger.classList.add('active')
    btnQuit.classList.add('active')
    navBar.classList.add('active')
    logoMc.classList.add('active')
    social.classList.add('active')
    btnOrder.classList.add('active')
    barLogo.classList.add('active')
    menuSec.classList.add('active')
})

btnQuit.addEventListener('click', function(){
    btnBurger.classList.remove('active')
    btnQuit.classList.remove('active')
    navBar.classList.remove('active')
    logoMc.classList.remove('active')
    social.classList.remove('active')
    btnOrder.classList.remove('active')
    barLogo.classList.remove('active')
    menuSec.classList.remove('active')
})

