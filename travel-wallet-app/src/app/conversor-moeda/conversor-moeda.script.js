document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'SUA_CHAVE_DE_API'; // Substitua pela sua chave de API
    const convertButton = document.getElementById('convertButton');
    const resultElement = document.getElementById('result');
  
    convertButton.addEventListener('click', function () {
      const amount = parseFloat(document.getElementById('amount').value);
      const fromCurrency = document.getElementById('fromCurrency').value;
      const toCurrency = document.getElementById('toCurrency').value;
  
      fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        }
      })
      .then(response => response.json())
      .then(data => {
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = amount * exchangeRate;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      })
      .catch(error => {
        console.error('Erro ao buscar cotação:', error);
        resultElement.textContent = 'Erro ao buscar cotação.';
      });
    });
  });
  