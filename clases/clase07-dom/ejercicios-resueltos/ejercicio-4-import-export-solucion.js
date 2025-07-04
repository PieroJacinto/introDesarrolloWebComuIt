import { animales, persona  } from "./ejercicio-4-datos.js";

function mostrarAnimales() {
  const resultado = document.querySelector("#resultado");
  let html = "<h3>🐶 Lista de Animales:</h3>";

  animales.forEach(function (animal) {
    html += `<p>${animal}</p>`;
  });

  resultado.innerHTML = html;
}

function mostrarPersona() {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = `
                <h3>👤 Información Personal:</h3>
                <p><strong>Nombre:</strong> ${persona.nombre}</p>
                <p><strong>Edad:</strong> ${persona.edad} años</p>
                <p><strong>Ciudad:</strong> ${persona.ciudad}</p>
            `;
}

const btnAnimales = document.querySelector("#btn-animales");
const btnPersona = document.querySelector("#btn-persona");

btnAnimales.addEventListener("click", mostrarAnimales);
btnPersona.addEventListener("click", mostrarPersona);
