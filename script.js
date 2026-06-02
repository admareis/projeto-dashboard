function mostrarDesafio(id) {
  document.querySelectorAll('.painel').forEach(p => p.style.display = 'none'); // foreach percorre todo os elementos que receberam a classe painel e esconde todas divs da area principal //
  document.getElementById(id).style.display = 'block'; // chama somente a div que for clicada // 
}

function calcularTemperatura(){
    const celsius = document.getElementById('celsius').value.trim();
    const fahrenheit = document.getElementById('fahrenheit').value.trim();
    const resultado = document.getElementById('calculoTotal');
    const totalCelsius = (celsius*1.8)+32;
    const totalFahrenheit = (fahrenheit-32)/1.8

    if (celsius !==""){
        resultado.innerText = celsius + "ºC" + " equivalem a " + totalCelsius.toFixed(2) +"ºF";
    }
    else if (fahrenheit !== ""){
        resultado.innerText = fahrenheit + "ºF" + " equivalem a " + totalFahrenheit.toFixed(2) +"ºC"
    } 
    else{ 
        resultado.innerText = "Digite um valor em algum dos campos.";

    }  
}
function reset() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculoTotal").textContent = "";
}
