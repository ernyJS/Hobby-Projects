// burger menu --
const burger = document.querySelector('main i');
const menu = document.querySelector('section');
burger.addEventListener('click', function(){
    menu.classList.toggle('active')
    burger.classList.toggle('active')
})

// mercury
const radiusMercury = document.querySelector('.radiusMercury');
const buttonMercury = document.querySelector('.buttonMercury');
buttonMercury.addEventListener('click', function(){
    radiusMercury.classList.toggle('active')
    if(radiusMercury.classList.contains('active') === true){
        buttonMercury.classList.add('blue')
    }
    if(radiusMercury.classList.contains('active') === false){
        buttonMercury.classList.remove('blue')
    }
})

// venus
const radiusVenus = document.querySelector('.radiusVenus');
const buttonVenus = document.querySelector('.buttonVenus');
buttonVenus.addEventListener('click', function(){
    radiusVenus.classList.toggle('active')
    if(radiusVenus.classList.contains('active') === true){
        buttonVenus.classList.add('blue')
    }
    if(radiusVenus.classList.contains('active') === false){
        buttonVenus.classList.remove('blue')
    }
})

// earth
const radiusEarth = document.querySelector('.radiusEarth');
const buttonEarth = document.querySelector('.buttonEarth');
buttonEarth.addEventListener('click', function(){
    radiusEarth.classList.toggle('active')
    if(radiusEarth.classList.contains('active') === true){
        buttonEarth.classList.add('blue')
    }
    if(radiusEarth.classList.contains('active') === false){
        buttonEarth.classList.remove('blue')
    }
})

// mars
const radiusMars = document.querySelector('.radiusMars');
const buttonMars = document.querySelector('.buttonMars');
buttonMars.addEventListener('click', function(){
    radiusMars.classList.toggle('active')
    if(radiusMars.classList.contains('active') === true){
        buttonMars.classList.add('blue')
    }
    if(radiusMars.classList.contains('active') === false){
        buttonMars.classList.remove('blue')
    }
})

// jupiter
const radiusJupiter = document.querySelector('.radiusJupiter');
const buttonJupiter = document.querySelector('.buttonJupiter');
buttonJupiter.addEventListener('click', function(){
    radiusJupiter.classList.toggle('active')
    if(radiusJupiter.classList.contains('active') === true){
        buttonJupiter.classList.add('blue')
    }
    if(radiusJupiter.classList.contains('active') === false){
        buttonJupiter.classList.remove('blue')
    }
})

// saturn
const radiusSaturn = document.querySelector('.radiusSaturn');
const buttonSaturn = document.querySelector('.buttonSaturn');
buttonSaturn.addEventListener('click', function(){
    radiusSaturn.classList.toggle('active')
    if(radiusSaturn.classList.contains('active') === true){
        buttonSaturn.classList.add('blue')
    }
    if(radiusSaturn.classList.contains('active') === false){
        buttonSaturn.classList.remove('blue')
    }
})

// uranus
const radiusUranus = document.querySelector('.radiusUranus');
const buttonUranus = document.querySelector('.buttonUranus');
buttonUranus.addEventListener('click', function(){
    radiusUranus.classList.toggle('active')
    if(radiusUranus.classList.contains('active') === true){
        buttonUranus.classList.add('blue')
    }
    if(radiusUranus.classList.contains('active') === false){
        buttonUranus.classList.remove('blue')
    }
})

// neptun
const radiusNeptun = document.querySelector('.radiusNeptun');
const buttonNeptun = document.querySelector('.buttonNeptun');
buttonNeptun.addEventListener('click', function(){
    radiusNeptun.classList.toggle('active')
    if(radiusNeptun.classList.contains('active') === true){
        buttonNeptun.classList.add('blue')
    }
    if(radiusNeptun.classList.contains('active') === false){
        buttonNeptun.classList.remove('blue')
    }
})

//move all
const radiusAll = document.querySelectorAll('.radiusMercury, .radiusVenus, .radiusEarth, .radiusMars, .radiusJupiter, .radiusSaturn, .radiusUranus, .radiusNeptun');
const buttonAll = document.querySelector('.buttonAll');

buttonAll.addEventListener('click', function(){
    for(let i = 0; i < radiusAll.length; i++){
        if(radiusAll[i].classList.contains('active') === false){
            radiusAll[i].classList.add('active')
        }
        if(radiusMercury.classList.contains('active') === true){
            buttonMercury.classList.add('blue')
        }
        if(radiusVenus.classList.contains('active') === true){
            buttonVenus.classList.add('blue')
        }
        if(radiusEarth.classList.contains('active') === true){
            buttonEarth.classList.add('blue')
        }
        if(radiusMars.classList.contains('active') === true){
            buttonMars.classList.add('blue')
        }
        if(radiusJupiter.classList.contains('active') === true){
            buttonJupiter.classList.add('blue')
        }
        if(radiusSaturn.classList.contains('active') === true){
            buttonSaturn.classList.add('blue')
        }
        if(radiusUranus.classList.contains('active') === true){
            buttonUranus.classList.add('blue')
        }
        if(radiusNeptun.classList.contains('active') === true){
            buttonNeptun.classList.add('blue')
        }
    }
})

//stop all
const buttonStopAll = document.querySelector('.buttonStopAll');

buttonStopAll.addEventListener('click', function(){
    for(let i = 0; i < radiusAll.length; i++){
        if(radiusAll[i].classList.contains('active') === true){
            radiusAll[i].classList.remove('active')
        }
        if(radiusMercury.classList.contains('active') === false){
            buttonMercury.classList.remove('blue')
        }
        if(radiusVenus.classList.contains('active') === false){
            buttonVenus.classList.remove('blue')
        }
        if(radiusEarth.classList.contains('active') === false){
            buttonEarth.classList.remove('blue')
        }
        if(radiusMars.classList.contains('active') === false){
            buttonMars.classList.remove('blue')
        }
        if(radiusJupiter.classList.contains('active') === false){
            buttonJupiter.classList.remove('blue')
        }
        if(radiusSaturn.classList.contains('active') === false){
            buttonSaturn.classList.remove('blue')
        }
        if(radiusUranus.classList.contains('active') === false){
            buttonUranus.classList.remove('blue')
        }
        if(radiusNeptun.classList.contains('active') === false){
            buttonNeptun.classList.remove('blue')
        }
    }
})

const buttonAbout = document.querySelector('.buttonAbout');
const aboutSection = document.querySelector('.about');
const buttonQuit = document.querySelector('.quit');

buttonAbout.addEventListener('click', function(){
    aboutSection.classList.add('active')
})

buttonQuit.addEventListener('click', function(){
    aboutSection.classList.remove('active')
})