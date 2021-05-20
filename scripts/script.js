const API_KEY = "035ad387-35c9-4f41-ae8e-cc23f9ec04ca";
let url = "pro-api.coinmarketcap.com/v1/tools/price-conversion";
let queryString = "?CMC_PRO_API_KEY=" + API_KEY + "&amount=1&symbol=BTC";

console.log(url, queryString);

fetch(url + queryString, { mode: "no-cors" })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    });


// https://pro-api.coinmarketcap.com/v1/tools/price-conversion?CMC_PRO_API_KEY=035ad387-35c9-4f41-ae8e-cc23f9ec04ca&amount=1&symbol=BTC
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data