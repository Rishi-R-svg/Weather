const apikey  = "2b00f7f6f5844b1b82c032f083b10f5e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input")
const btn = document.querySelector(".search button")

const whethericon = document.querySelector(".icon")



async function checkwhether(city) {
    

    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".content").style.display = "none"

    } else {
        var data = await response.json()

    

    document.querySelector(".city").innerHTML = data.name 
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".Wind").innerHTML = data.wind.speed + "km/h"

    if (data.weather[0].main == "Clear") {
        whethericon.src = "clear.png"
    }
    else if (data.weather[0].main == "Clouds"){
        whethericon.src = "clouds.png"
    }
    else if (data.weather[0].main == "Rain"){
        whethericon.src = "rains.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        whethericon.src = "drizzle.png"
    }

    else if (data.weather[0].main == "Mist"){
        whethericon.src = "mist.png"
    }

    document.querySelector(".content").style.display = "block"
    document.querySelector(".error").style.display = "none"
    }

    


}


btn.addEventListener("click", ()=> {

    checkwhether(searchbox.value)
})




// checkwhether();



 