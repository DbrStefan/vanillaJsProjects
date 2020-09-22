const currencyEl_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');

const rateEL = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((response) => response.json())
     .then(data => {
        //console.log(data)
        const rate = data.rates[currency_two];
        amountEL_two.value = (rate * amountEL_one.value).toFixed(2);
        rateEL.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
     });
}

// Event listeners
currencyEl_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEL_two.addEventListener('input', calculate);
swap.addEventListener('click', ()=>{
    const temp = currencyEl_one.value;
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp;
    calculate();
})

