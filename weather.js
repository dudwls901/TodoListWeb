const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "75e3d5d68154ec30fff878a68e6aef2a";


<<<<<<< HEAD
function clickWeather(event){
    console.log(event);
    
}
=======
>>>>>>> 65b5f8872d19819156ad0e6ff9fe6e537c5a1f1f
function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
<<<<<<< HEAD
        weather.innerText = ` ${place}`+'\n'+`${temperature}º`;
=======
        weather.innerText = `${temperature} @ ${place}`;
>>>>>>> 65b5f8872d19819156ad0e6ff9fe6e537c5a1f1f
        console.log(json);
    });
    //then 데이터가 우리한테 완전히 넘어 왔을 때! 다음 함수 호출
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj ={
        // latitude: latitude,
        // longitude : longitude
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}


function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords ===null){
    askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords)
        console.log(parseCoords.latitude, parseCoords.longitude);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init(){
loadCoords();
}

init();