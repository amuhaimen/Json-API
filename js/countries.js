const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (country) => {
  const countriesContainer = document.getElementById("countries_container");
  country.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Country name: ${country.name.common}</h3>
    <p>Capital: ${
      country.capital ? country.capital[0] : "Capital Not found"
    }</p>
      
    `;
    console.log(country);
    countriesContainer.appendChild(countryDiv);
  });
};
loadCountries();
