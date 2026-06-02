function mostrarDesafio(id) {
  document.querySelectorAll('.painel').forEach(p => p.style.display = 'none'); // foreach percorre todo os elementos que receberam a classe painel e esconde todas divs da area principal //
  document.getElementById(id).style.display = 'block'; // chama somente a div que for clicada // 
}