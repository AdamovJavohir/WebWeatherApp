const ApiKey = "f310da290e17a50873d02781cf8f8257";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let inputText = document.querySelector(".input-style");
let buttonClich = document.querySelector(".search-button-style");


async function weatherData(city){

    // API dan ma'lumot olish
     response = await fetch(ApiUrl + city + "&appid=" + ApiKey + "&units=metric");
    var data = await response.json();
     console.log(data);

    // HTML elementlariga API qiymatlarini kiritish
    document.querySelector(".weather h1").innerHTML = data.main.temp + "°C";
    document.querySelector(".weather h2").innerHTML = data.name;
    document.querySelector(".hum-text h3").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-text h3").innerHTML = data.wind.speed + " km/h";

    // Rasmni o'zgartirish 
    if (data.weather[0].main == "Rain"){
        document.querySelector(".weather img").src = "./images/rain.png";

    }else if (data.weather[0].main == "Clouds"){
        document.querySelector(".weather img").src = "./images/clouds.png";

    }else if (data.weather[0].main == "Mist"){
        document.querySelector(".weather img").src = "./images/mist.png";

    }else if (data.weather[0].main == "Drizzle"){
        document.querySelector(".weather img").src = "./images/drizzle.png";

    }else if (data.weather[0].main == "Rain"){
        document.querySelector(".weather img").src = "./images/rain.png";

    }
}

buttonClich.addEventListener("click", ()=>{
    weatherData(inputText.value);
})