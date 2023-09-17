fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL')
  .then(response => response.json())
  .then(data => {
    // Aqui você pode usar os dados retornados pela API

	let dado=data.USDBRL.high;
	let dado2=data.EURBRL.high;
	let dolar=document.getElementById("dado");
	let dolar2=document.getElementById("dado2");
  dolar.textContent=dado;
	dolar2.textContent=dado2;

  var numero = document.getElementById("numero").value;
 
// Faça a operação desejada com o valor do input
  var resultado = parseInt(5)*5; // Multiplica o número por 2

// Exiba o resultado em algum lugar da página
   document.getElementById("resultado").innerText = "O resultado é: " + resultado;
	
  })
  .catch(error => {
    // Trate possíveis erros na requisição
    console.error(error);
  });

  
  function adicionarItem() {
    let nomeItem = document.getElementById("nomeItem").value;
    let valorItem = parseFloat(document.getElementById("valorItem").value);
    let carrinho = document.getElementById("carrinho");
    let total = document.getElementById("total");
  
    // Adicionar o item à textarea
    carrinho.value += nomeItem + " - $" + valorItem.toFixed(2) + "\n";
  
    // Atualizar o valor total
    total.innerText = "Total: $" + calcularTotal().toFixed(2);
  }
  
  function excluirItem() {
    let nomeItem = document.getElementById("nomeItem").value;
    let carrinho = document.getElementById("carrinho");
    let total = document.getElementById("total");
  
    // Remover o item da textarea
    carrinho.value = carrinho.value.replace(nomeItem + " - $", "");
  
    // Atualizar o valor total
    total.innerText = "Total: $" + calcularTotal().toFixed(2);
  }
  
  function calcularTotal() {
    let carrinho = document.getElementById("carrinho");
    let valorTotal = 0;
  
    // Percorrer os itens da textarea
    carrinho.value.split("\n").forEach(function(item) {
      let valor = parseFloat(item.split(" - $")[1]);
      if (!isNaN(valor)) {
        valorTotal += valor;
      }
    });
  
    return valorTotal;
  }

  
  
  function calcular() {
    // Obtenha o valor do input
    var numero = document.getElementById("numero").value;
  
    // Faça a operação desejada com o valor do input
    var resultado = parseInt(numero); // Multiplica o número por 2
  
    // Exiba o resultado em algum lugar da página
    document.getElementById("resultado2").innerText = "O resultado é: " + resultado;
  }


