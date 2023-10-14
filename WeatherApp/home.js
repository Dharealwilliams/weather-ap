let apiKey = "2e68afb57d4b449f822131322231410";
let form = document.forms.searchForm;
let searchInput = form.search;
let output = document.getElementById("output");
// function to get the weather data from API
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   console.log("working !");
  let searchValue = searchInput.value;
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchValue}`;
  //fetching data

  e.target.reset();
  let weatherData = fetch(apiUrl);
  weatherData
    .then(function (data) {
      return data.json();
    })
    .then(function (weather) {
      console.log(weather);
      const { location, current } = weather;
      let { name, region, tz_id } = location;
      output.innerHTML = `
                <img src='${current.condition.icon}'/>
                <p>Country Name: ${name}</p>
                <p>Region: ${region}</p>
                <p>Time-zone: ${tz_id}</p>
                <p>Temperture (F): ${current.temp_f}</p>
                <p>Temperture (C): ${current.temp_c}</p>
                
               `;
    })
    .catch(function (err) {
      console.log(err);
    });
});
