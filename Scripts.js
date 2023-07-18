const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-Select")

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value
  
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert",) //valor em real
  const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas
  


  const dolarToday = 4.80
  const euroToday = 5.31
  const bitcoin = 0.0015
  const libra = 6.07

  if (currencySelect.value == "dolar"){
     // Se o select estiver selecionado o valor de dolar, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style:"currency",
      currency:"USD",
    }).format(inputCurrencyValue / dolarToday)
  }
  if (currencySelect.value == "euro"){
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style:"currency",
      currency:"EUR",
    }).format(inputCurrencyValue / euroToday)

  }
  if (currencySelect.value == "Bitcoin"){
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
      style:"currency",
      currency:"BTC",
    }).format(inputCurrencyValue * bitcoin)

  }
  if (currencySelect.value == "Libra"){
    // Se o select estiver selecionado o valor de euro, entre aqui
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
      style:"currency",
      currency:"GBP",
    }).format(inputCurrencyValue / libra)

  }
  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style:"currency",
    currency:"BRL",
  }).format(inputCurrencyValue)
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImagem = document.querySelector(".currency-img")

  if (currencySelect.value == "dolar") { 
    currencyName.innerHTML = 'Dolar Americano'
    currencyImagem.src = "./logo/estados-unidos (1) 1.png"
  }

  
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = 'Euro'
    currencyImagem.src ='./logo/euro.png'
  }

  if (currencySelect.value == "Bitcoin") {
    currencyName.innerHTML = 'Bitcoin'
    currencyImagem.src ='./logo/bitcoin 1.png'
  }

  if (currencySelect.value == "Libra") {
    currencyName.innerHTML = 'Libra'
    currencyImagem.src ='./logo/libra 1.png'
  }
}



currencySelect.addEventListener('change',changeCurrency)
convertButton.addEventListener("click", convertValues)