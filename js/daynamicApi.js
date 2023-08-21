const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  const countryContainer = document.getElementById("all_countries");
  countries.forEach((country) => {
    // console.log(country.cca2);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital ${
          country.capital ? country.capital[0] : "Capital Not found"
        }</p>
        <button onclick="loadDetails('${country.cca2}')">Show details</button>
    `;
    countryContainer.appendChild(countryDiv);
  });
};

const loadDetails = (code) => {
  // https://restcountries.com/v3.1/alpha/{code}
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
};

const displayDetails = (data) => {
  const name = document.getElementById("name");
  const flag = document.getElementById("img");
  name.innerHTML = data[0].name.common;
  flag.src = data[0].flags.png;
};

loadDetails();
loadCountries();
