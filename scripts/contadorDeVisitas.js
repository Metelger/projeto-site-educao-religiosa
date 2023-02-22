// contador.js
var contador = 0;

function atualizarContador() {
  if (localStorage.getItem('contador') === null) {
    localStorage.setItem('contador', 51000);
    contador = 51000;
  } else {
    contador = parseInt(localStorage.getItem('contador'));
    contador++;
    localStorage.setItem('contador', contador);
  }
  document.getElementById('contadorVisualizacao').innerHTML = contador;
}