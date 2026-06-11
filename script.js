function mostrarDesafio(id) {
  document.querySelectorAll('.painel').forEach(p => p.style.display = 'none'); // foreach percorre todo os elementos que receberam a classe painel e esconde todas divs da area principal //
  document.getElementById(id).style.display = 'block'; // chama somente a div que for clicada // 
}
////////// CONVERSOR DE MOEDAS ////////////////
async function converterMoedas(){
    const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
    const data = await fetch (url); // espera a API responder //
    const dataJson = await data.json(); // transforma em json //
    const cotacaoAtual = Number(dataJson.USDBRL.bid);
    const reais = Number(document.getElementById("reais").value.trim());
    const dolar = Number(document.getElementById("dolar").value.trim());
    const resultado = document.getElementById("calculoTotal1");

    if (reais>0) {
        const total = reais / cotacaoAtual; // de reais para dólar //
        resultado.textContent = `R$ ${reais.toFixed(2)} = US$ ${total.toFixed(2)}`;
    } 
    else if (dolar>0) { // de dólar para reais // 
        const total = dolar * cotacaoAtual;
        resultado.textContent = `US$ ${dolar.toFixed(2)} = R$ ${total.toFixed(2)}`;
    } 
    else {
        resultado.textContent = "Digite um valor em Reais ou em Dólar.";
    }
};
//// fuunção para bloquear o outro campo ////////
let inputReais = document.getElementById('reais');
let inputDolar = document.getElementById('dolar');

inputReais.addEventListener("input", function () {
    inputDolar.disabled = inputReais.value !== "";
});

inputDolar.addEventListener("input", function () {
    inputReais.disabled = inputDolar.value !== "";
});
function reset1() {
    document.getElementById('reais').value = "";
    document.getElementById('dolar').value = "";
    inputReais.value = "";
    inputDolar.value = "";
    inputReais.disabled = false;  
    inputDolar.disabled = false;
    document.getElementById('calculoTotal1').textContent = "";
}
////////// FIM CONVERSOR DE MOEDAS ////////////


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
}};
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
};
//// fuunção para bloquear o outro campo ////////
inputCelsius = document.getElementById('celsius');
inputFahrenheit = document.getElementById('fahrenheit');

inputCelsius.addEventListener("input", function () {    
    inputFahrenheit.disabled = inputCelsius.value !== "";
});

inputFahrenheit.addEventListener("input", function () {
    inputCelsius.disabled = inputFahrenheit.value !== "";
});
function reset3() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    inputCelsius.value = "";
    inputFahrenheit.value = "";
    inputCelsius.disabled = false;  
    inputFahrenheit.disabled = false;
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
};
//// fuunção para bloquear o outro campo ////////
let inputKm = document.getElementById('km');
let inputMp = document.getElementById('mp');

inputKm.addEventListener("input", function () {
    inputMp.disabled = inputKm.value !== "";
});

inputMp.addEventListener("input", function () {
    inputKm.disabled = inputMp.value !== "";
});

function reset4() {
    document.getElementById("km").value = "";
    document.getElementById("mp").value = "";
    inputKm.value = "";
    inputMp.value = "";
    inputKm.disabled = false;  
    inputMp.disabled = false;
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
//// fuunção para bloquear o outro campo ////////
let inputKg = document.getElementById('kg');
let inputLb = document.getElementById('lb');

inputKg.addEventListener("input", function () {
    inputLb.disabled = inputKg.value !== "";
});

inputLb.addEventListener("input", function () {
    inputKg.disabled = inputLb.value !== "";
});

function reset5() {
    document.getElementById("kg").value = "";
    document.getElementById("lb").value = "";
    inputKg.value = "";
    inputLb.value = "";
    inputKg.disabled = false;  
    inputLb.disabled = false;
    document.getElementById("calculoTotal5").textContent = "";
}
////////// TÉRMINO CALC MASSA ////////////////////


/////////// REGRA DE TRÊS ////////////////////
function CalcRegra3(){
    const campoA = Number(document.getElementById('campoA').value.trim());
    const campoB = Number(document.getElementById('campoB').value.trim());
    const campoC = Number(document.getElementById('campoC').value.trim());
    const resultado = document.getElementById('campoX');
    const calc = (campoB*campoC)/campoA;
    const mensagemErro = document.getElementById ('erro');

    if(campoA<=0 || campoB <=0 || campoC <=0){
        mensagemErro.textContent = "Preencha todos os campos";
        mensagemErro.style.color = "#ef4444"
    }
    else if (campoA ==0 || campoB ==0 || campoC ==0){
        mensagemErro.textContent = "Não pode haver divisão por zero. Por gentileza, verifique e tente novamente"
    }
    else{
        resultado.value = calc.toFixed(2);
    }
}
function reset6() {
    document.getElementById("campoA").value = "";
    document.getElementById("campoB").value = "";
    document.getElementById("campoC").value = "";
    document.getElementById("campoX").value = "";
    document.getElementById("erro").textContent ="";
}
//////////// FIM REGRA DE TRÊS ///////////////