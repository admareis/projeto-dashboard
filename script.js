function mostrarDesafio(id) {
  document.querySelectorAll('.painel').forEach(p => p.style.display = 'none'); // foreach percorre todo os elementos que receberam a classe painel e esconde todas divs da area principal //
  document.getElementById(id).style.display = 'block'; // chama somente a div que for clicada // 
}

////////////// IMC /////////////////
function classificarIMC(imc, genero) {
    if (genero === "M") {
        if (imc < 18.5) 
        return "Abaixo do peso";              
        if (imc >=18.5 && imc <= 24.9) 
        return "Normal";
        if (imc >=25.0 && imc <= 29.9) 
        return "Sobrepeso";

        return "Obesidade";
    } 
    if (imc < 18.5) 
    return "Abaixo do peso";
    if (imc >=18.5 && imc <= 23.9)
    return "Normal";
    if (imc >=24.0 && imc <= 28.9) 
    return "Sobrepeso";

    return "Obesidade";
}
const coresIMC = { // objeto para salvar as cores // 
  "Abaixo do peso": "#e92c2c", 
  "Normal":         "#22c55e", 
  "Sobrepeso":      "#f59e0b", 
  "Obesidade":      "#650d0d", 
};

function calcularIMC(){
    const peso = Number(document.getElementById('peso').value);
    const altura = Number(document.getElementById('altura').value);
    const genero = document.getElementById('genero').value;
    const calcIMC = peso/altura**2;
    const resultado = document.getElementById('calculoTotal2');
    const classificacao = classificarIMC(calcIMC,genero);

    if (isNaN(peso) || isNaN(altura) || altura <= 0 || peso <= 0) {
        resultado.textContent = "Verifique os campos e preencha corretamente.";
        resultado.style.color = "#ef4444";
        return;
    }
    else {
    resultado.textContent = `Seu IMC é ${calcIMC.toFixed(2)} - ${classificacao}`;
    resultado.style.color = coresIMC[classificacao];
}}
function reset2() {
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
    document.getElementById('calculoTotal2').textContent = "";
}
////////// TÉRMINO IMC ////////////////////

///////// TEMPERATURA /////////////////////
function calcularTemperatura(){    
    const celsius = document.getElementById('celsius').value.trim();
    const fahrenheit = document.getElementById('fahrenheit').value.trim();
    const resultado = document.getElementById('calculoTotal3');
    const totalCelsius = (celsius*1.8)+32;
    const totalFahrenheit = (fahrenheit-32)/1.8;

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
///////////////// TÉRMINO TEMPERATURA ///////////////// 

/////////////// VELOCIDADE /////////////////////////
function converterVelocidade(){
    const quilometros = document.getElementById('km').value.trim()
    const milhas = document.getElementById('mp').value.trim()
    const resultado = document.getElementById('calculoTotal4');
    const totalMilhas = quilometros*0.621371;
    const totalKm = milhas*1.60934133;

    if (quilometros !==""){
        resultado.innerText = quilometros + "Km equivalem a " + totalMilhas.toFixed(2) +"Mp/h";
    }
    else if (milhas !==""){
        resultado.innerText = milhas + "Mp/h equivalem a " + totalKm.toFixed(2) + "Km/h" 
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
////////////// TÉRMINO VELOCIDADE ///////////////////

//////////// MASSA ///////////////////
function converterMassa(){    
    const quilograma = Number(document.getElementById('kg').value.trim());
    const libra = Number(document.getElementById('lb').value.trim());
    const resultado = document.getElementById('calculoTotal5');
    const totalLibras = quilograma*2.20462;
    const totalQuilograma = libra/2.20462;

    if (quilograma > 0){
        resultado.textContent = `${quilograma.toFixed(2)}Kg equilavem a ${totalLibras.toFixed(2)}Lb`;
    }
    else if (libra > 0){
        resultado.textContent = `${libra.toFixed(2)}Lb equilavem a ${totalQuilograma.toFixed(2)}Kg`;
    }
    else{ 
        resultado.innerText = "Digite um valor em algum dos campos."
    }  
}
function reset5() {
    document.getElementById("kg").value = "";
    document.getElementById("lb").value = "";
    document.getElementById("calculoTotal5").textContent = "";
}
////////// TÉRMINO CALC MASSA ////////////////////

/////////// REGRA DE TRÊS ////////////////////

function CalcRegra3(){
    const campoA = Number(document.getElementById('campoA').value.trim());
    const campoB = Number(document.getElementById('campoB').value.trim());
    const campoC = Number(document.getElementById('campoC').value.trim());
    const resultado = document.getElementById('campoX');
    const calc = (campoB*campoC)/campoA

}