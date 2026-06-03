function mostrarDesafio(id) {
  document.querySelectorAll('.painel').forEach(p => p.style.display = 'none'); // foreach percorre todo os elementos que receberam a classe painel e esconde todas divs da area principal //
  document.getElementById(id).style.display = 'block'; // chama somente a div que for clicada // 
}

function calcularTemperatura(){    
    const celsius = document.getElementById('celsius').value.trim();
    const fahrenheit = document.getElementById('fahrenheit').value.trim();
    const resultado = document.getElementById('calculoTotal3');
    const totalCelsius = (celsius*1.8)+32;
    const totalFahrenheit = (fahrenheit-32)/1.8

    if (celsius !==""){
        resultado.innerText = celsius + "ºC equivalem a " + totalCelsius.toFixed(2) +"ºF";
    }
    else if (fahrenheit !== ""){
        resultado.innerText = fahrenheit + "ºF equivalem a " + totalFahrenheit.toFixed(2) +"ºC"
    } 
    else{ 
        resultado.innerText = "Digite um valor em algum dos campos."
    }  
}
function reset3() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("calculoTotal3").textContent = "";
}

function converterVelocidade(){
    const quilometros = document.getElementById('km').value.trim()
    const milhas = document.getElementById('mp').value.trim()
    const resultado = document.getElementById('calculoTotal4');
    const totalKm = quilometros/0.621371;
    const totalMilhas = milhas*1.60934133;

    if (quilometros !==""){
        resultado.innerText = quilometros + "Km equivalem a " + totalKm.toFixed(2) +"Mp/h";
    }
    else if (milhas !==""){
        resultado.innerText = milhas + "Mp/h equivalem a " + totalMilhas.toFixed(2) + "Km/h" 
    }
    else {
        resultado.innerText = "Digite um valor em algum dos campos."
    }
}  
function reset4() {
    document.getElementById("km").value = "";
    document.getElementById("mp").value = "";
    document.getElementById("calculoTotal4").textContent = "";
} 