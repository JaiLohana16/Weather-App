let apikey="00cce56c33ce6d8585738a3c3e8b22c5"
let apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

//  https://api.openweathermap.org/data/2.5/weather?q=cityname&appid=00cce56c33ce6d8585738a3c3e8b22c5&units=metric 
//  https://api.openweathermap.org/data/2.5/weather?&appid=00cce56c33ce6d8585738a3c3e8b22c5&units=metric&q=cityname
//  will work both ways city name in between or at the end
let inputbox=document.querySelector(".search input")
let inputbtn=document.querySelector(".search button")
let weatherimg=document.querySelector(".weather-img")

async function getweather(city) {
    const response=await fetch(apiurl+city+`&appid=${apikey}`)
    var data = await response.json()
    console.log(data)

    document.querySelector(".cityname").innerHTML=data.name +","+ data.sys.country
    document.querySelector(".temp").innerHTML=Math.ceil(data.main.temp) +"°c"
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr"

    if (data.weather[0].main=="Clouds") {
        weatherimg.src='clouds.png'      
    }
    else if (data.weather[0].main=="Clear") {
        weatherimg.src='clear.png'      
    }
    else if (data.weather[0].main=="Drizzle") {
        weatherimg.src='drizzle.png'      
    }
    else if (data.weather[0].main=="Mist") {
        weatherimg.src='mist.png'      
    }
    else if (data.weather[0].main=="Rain") {
        weatherimg.src='rain.png'      
    }
    else if (data.weather[0].main=="Snow") {
        weatherimg.src='snow.png'      
    }
}
inputbtn.addEventListener("click",()=>{
    getweather(inputbox.value)
    
})
inputbox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if(inputbox.value ==''){
            alert("Please Enter the city name")
        }
        else{
            getweather(inputbox.value)
        }
    }
})
