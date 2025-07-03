// DATOS PARA LA PARTE 3
const frutas = ["🍎 Manzana", "🍌 Banana", "🍊 Naranja", "🍇 Uvas"];
const personas = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Carlos", edad: 30 },
  { nombre: "María", edad: 28 },
];

// ✅ SOLUCIÓN PARTE 1: Cambiar contenido
function cambiarContenido() {
  // Seleccionar por ID y cambiar contenido
  const titulo = document.querySelector("#titulo-principal");
  titulo.innerHTML = "¡Nuevo Título!";

  // Seleccionar por clase y cambiar texto
  const mensaje = document.querySelector(".mensaje-bienvenida");
  mensaje.textContent = "¡Bienvenido a la práctica de DOM!";

  // Mostrar resultado
  const resultado = document.querySelector("#resultado-parte1");
  resultado.innerHTML = "✅ Contenido cambiado exitosamente";

  console.log("✅ Parte 1 completada");
}

// ✅ SOLUCIÓN PARTE 2: Cambiar estilos
function cambiarEstilos() {
  // Seleccionar elemento y cambiar múltiples estilos
  const caja = document.querySelector("#caja-demo");
  caja.style.backgroundColor = "#48bb78";
  caja.style.color = "white";
  caja.style.fontSize = "24px";
  caja.style.border = "3px solid #2d3748";

  // Mostrar confirmación
  const resultado = document.querySelector("#resultado-parte2");
  resultado.innerHTML = "🎨 Estilos aplicados correctamente";
}

function resetearEstilos() {
  // Resetear todos los estilos a valores vacíos
  const caja = document.querySelector("#caja-demo");
  caja.style.backgroundColor = "";
  caja.style.color = "";
  caja.style.fontSize = "";
  caja.style.border = "";

  // Mostrar confirmación
  const resultado = document.querySelector("#resultado-parte2");
  resultado.innerHTML = "🔄 Estilos reseteados";
}

// ✅ SOLUCIÓN PARTE 3: Mostrar datos
function mostrarDatos() {
  // Mostrar frutas
  const contenedorFrutas = document.querySelector("#lista-frutas");
  let htmlFrutas = "<h4>🍎 Frutas:</h4>";

  frutas.forEach(function (fruta) {
    htmlFrutas += `<p>${fruta}</p>`;
  });

  contenedorFrutas.innerHTML = htmlFrutas;

  // Mostrar personas
  const contenedorPersonas = document.querySelector("#lista-personas");
  let htmlPersonas = "<h4>👥 Personas:</h4>";

  personas.forEach(function (persona) {
    htmlPersonas += `<p>Nombre: ${persona.nombre}, Edad: ${persona.edad}</p>`;
  });

  contenedorPersonas.innerHTML = htmlPersonas;

  console.log("📊 Datos mostrados correctamente");
}
