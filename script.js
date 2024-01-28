let onclick = document.getElementById("searches");
let whetherIcon = document.getElementById("photo");
onclick.addEventListener("click", update);




function update() {

    let city = document.getElementById("input").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=177ae665a21a4a1a6c32512887b0aeba&units=metric`)
        .then(apidata => {
            return apidata.json();
        })
        .then(data => {
            adata = data;
            console.log(adata);
        }
        )
        .catch(error => {
            console.log(error);
            document.getElementById("whether_name").innerHTML = "Not found";
        });

    document.getElementById("whether_name").innerHTML = adata.weather[0].main;
    document.getElementById("Temp").innerHTML = Math.round(adata.main.temp) + "°C";
    document.getElementById("speed").innerHTML = Math.round(adata.wind.speed) + "km/h";
    document.getElementById("humidity").innerHTML = adata.main.humidity + "%";

    if (adata.weather[0].main == "Clouds") {
        whetherIcon.src = "clouds.png";
    } else if (adata.weather[0].main == "Clear") {
        whetherIcon.src = "clear.png";
    } else if (adata.weather[0].main == "Haze") {
        whetherIcon.src = "haze.png";
    } else if (adata.weather[0].main == "Rain") {
        whetherIcon.src = "rain.png";
    } else if (adata.weather[0].main == "Mist") {
        whetherIcon.src = "mist.png";
    } else if (adata.weather[0].main == "Snow") {
        whetherIcon.src = "snow.png";
    } else if (adata.weather[0].main == "Smoke" || adata.weather[0].main == "Fog") {
        whetherIcon.src = "smoke.png";
    }
}

