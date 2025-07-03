// DATOS PARA EL EJERCICIO
let contador = 0;

// ✅ SOLUCIÓN PARTE 1: Eventos de click
const btnSaludo = document.querySelector("#btn-saludo");
btnSaludo.addEventListener("click", function () {
  const resultado = document.querySelector("#resultado-clicks");
  resultado.innerHTML = "👋 ¡Hola! Gracias por hacer click";
});

const btnContador = document.querySelector("#btn-contador");
btnContador.addEventListener("click", function () {
  contador = contador + 1;
  const resultado = document.querySelector("#resultado-clicks");
  resultado.innerHTML = `🔢 Clicks: ${contador}`;
});

const btnColor = document.querySelector("#btn-color");
btnColor.addEventListener("click", function () {
  const resultado = document.querySelector("#resultado-clicks");
  resultado.style.backgroundColor = "#48bb78";
});

// ✅ SOLUCIÓN PARTE 2: Eventos de mouse
const cajaHover = document.querySelector("#caja-hover");
cajaHover.addEventListener("mouseover", function () {
  cajaHover.innerHTML = "🔥 ¡Mouse encima!";
  cajaHover.style.backgroundColor = "#48bb78";

  const resultado = document.querySelector("#resultado-mouse");
  resultado.innerHTML = "➡️ Mouse entró en la caja";
});

cajaHover.addEventListener("mouseout", function () {
  cajaHover.innerHTML = "Pasa el mouse por encima de mí";
  cajaHover.style.backgroundColor = "#fef5e7";

  const resultado = document.querySelector("#resultado-mouse");
  resultado.innerHTML = "⬅️ Mouse salió de la caja";
});

// ✅ SOLUCIÓN PARTE 3: Eventos de teclado
const inputTexto = document.querySelector("#input-texto");
inputTexto.addEventListener("keyup", function (event) {
  const texto = event.target.value;
  const resultado = document.querySelector("#resultado-teclado");

  resultado.innerHTML = `✏️ Escribiste: ${texto}<br>📏 Longitud: ${texto.length} caracteres`;
});
