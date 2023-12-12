var searchCity = document.querySelector('.searchCityBTN');
var cityEnterInput = document.querySelector('.cityEnter');
var apiKey = '1e4387b5dd5e2c17d3ec4015abc75d9f';

var getCityLocations = () => { 
    var cityName = cityEnterInput.value.trim();
    if(!cityName) return;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    fetch(url).then(response => response.json()).then(data => {
        if(!data.length) return(alert('Please enter a valid city name'));
        var {name, lat, lon} = data[0].lat;
        getWeatherData(lat, lon, name); 
    }).catch(() => {
        alert('Please enter a valid city name');
    });
    
}

searchCity.addEventListener('click', getCityLocations);