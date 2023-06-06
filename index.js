const apikey = "b49533be070882ed4d77e77fdb29b44c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "clouds") {
        weatherIcon.src="E:\github\Weather_app\Weather_app\cloud.png"
    }
    else if (data.weather[0].main == "clear") {
        weatherIcon.src = "E:\github\Weather_app\Weather_app\clear.png";
    }
    else if (data.weather[0].main == "rain") {
        weatherIcon.src = "E:\github\Weather_app\Weather_app\weather rain image.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "E:\github\Weather_app\Weather_app\drizzle.png";
    }
    else if (data.weather[0].main == "mist") {
        weatherIcon.src = "E:\github\Weather_app\Weather_app\misty.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

}



searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
