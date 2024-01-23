const start = document.querySelector('.start');
const reset = document.querySelector('.reset');
const result = document.querySelector('.result');
const spanM = document.querySelector('.minute');
const spanT = document.querySelector('.time');
let time = 0;
let minute = 0;
let flag = false;


const count = () => {
    time += 0.01;
    if(Math.floor(time * 100)/100 < 10){
        spanT.textContent = `0${time.toFixed(2)}`;
    } else {
        spanT.textContent = `${time.toFixed(2)}`;
        if(Math.floor(time * 100)/100 % 60 === 0){
            minute += 1;
            time = 0;
            if(minute < 10){
                spanM.textContent = `0${minute}.`;
            } else {
                spanM.textContent = `${minute}.`;
            }
        }
    }
}


const startPause = () => {
    if(flag === false){
        flag = true;
        id = setInterval(count, 10);
        start.textContent = 'Pause';
    } else{
        flag = false;
        start.textContent = 'Start';
        clearInterval(id);
    }
}

const resetAll = () => {
    flag = false;
    clearInterval(id);
    time = 0;
    start.textContent = 'Start';
    spanT.textContent = '00.00';
    spanM.textContent = '00.';
}

start.addEventListener('click', startPause);
reset.addEventListener('click', resetAll);