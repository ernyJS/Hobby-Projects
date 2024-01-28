

const input = document.querySelector("input");
const button = document.querySelector("button");
const locInfo = document.querySelector("span.location");
const tempInfo = document.querySelector("span.temp");
const pressInfo = document.querySelector("span.press");
const emojiInfo = document.querySelector("span.emoji");
const box = document.querySelector('div');

let temp;
let press;

const getWeatherInfo = (e) => {
    e.preventDefault();
    let text = input.value;
    const API_REQUEST = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text}?unitGroup=metric&key=Y2QY4ARF9Q95MB979CH67SQ7A&contentType=json`;
        fetch(API_REQUEST)
            .then((res) => res.json())
            .then((weatherRaw) => {
                temp = weatherRaw.currentConditions.temp;
                press = weatherRaw.currentConditions.pressure;
                locInfo.innerHTML = text;
                tempInfo.innerHTML = `${temp} °C`;
                pressInfo.innerHTML = `${press} hPa`;
                if(temp <= 3){
                    box.classList.remove("hot");
                    emojiInfo.innerHTML = "⛄";
                } else if(temp >= 4 && temp <= 15){
                    box.classList.remove("hot");
                    emojiInfo.innerHTML = "☁";
                } else if(temp >= 16){
                    box.classList.add("hot");
                    emojiInfo.innerHTML = "🌞";
                }
                })
}



button.addEventListener('click', getWeatherInfo);


