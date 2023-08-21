const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((quote) => displayQuote(quote));
};

const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quote");
  blockQuote.innerHTML = quote.quote;
};
