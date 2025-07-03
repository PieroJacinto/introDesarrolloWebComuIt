// DATOS PARA BÚSQUEDA
const productos = [
  "Laptop",
  "Mouse",
  "Teclado",
  "Monitor",
  "Auriculares",
  "Webcam",
  "Impresora",
  "Tablet",
  "Smartphone",
  "Parlantes",
];

// ✅ SOLUCIÓN PARTE 1: Formulario de contacto
const formContacto = document.querySelector("#form-contacto");
formContacto.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;

  const resultado = document.querySelector("#resultado-contacto");
  resultado.innerHTML = `
                <h4>✅ Mensaje Enviado</h4>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong> ${mensaje}</p>
            `;
});

// ✅ SOLUCIÓN PARTE 2: Formulario con validación
const formRegistro = document.querySelector("#form-registro");
formRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  const usuario = document.querySelector("#usuario").value;
  const edad = document.querySelector("#edad").value;
  const ciudad = document.querySelector("#ciudad").value;

  // Limpiar errores anteriores
  document.querySelector("#error-usuario").innerHTML = "";
  document.querySelector("#error-edad").innerHTML = "";
  document.querySelector("#error-ciudad").innerHTML = "";

  // Validar usuario
  if (usuario.length < 3) {
    document.querySelector("#error-usuario").innerHTML =
      "Usuario debe tener mínimo 3 caracteres";
    return;
  }

  // Validar edad
  if (edad < 13 || edad > 100) {
    document.querySelector("#error-edad").innerHTML =
      "Edad debe estar entre 13 y 100 años";
    return;
  }

  // Validar ciudad
  if (ciudad === "") {
    document.querySelector("#error-ciudad").innerHTML =
      "Debes seleccionar una ciudad";
    return;
  }

  // Si todo está bien
  document.querySelector("#resultado-registro").innerHTML = `
                <h4>🎉 Registro Exitoso</h4>
                <p><strong>Usuario:</strong> ${usuario}</p>
                <p><strong>Edad:</strong> ${edad} años</p>
                <p><strong>Ciudad:</strong> ${ciudad}</p>
            `;
});

// ✅ SOLUCIÓN PARTE 3: Búsqueda en tiempo real
const inputBuscar = document.querySelector("#buscar");
inputBuscar.addEventListener("keyup", function (event) {
  const texto = event.target.value;
  let resultados = [];

  if (texto !== "") {
    productos.forEach(function (producto) {
      if (producto.toLowerCase().includes(texto.toLowerCase())) {
        resultados.push(producto);
      }
    });
  }

  const contenedor = document.querySelector("#resultado-busqueda");
  if (texto === "") {
    contenedor.innerHTML = "Los resultados de búsqueda aparecerán aquí";
  } else if (resultados.length === 0) {
    contenedor.innerHTML = `<p>No se encontraron productos para: "${texto}"</p>`;
  } else {
    let html = `<h4>🔍 Resultados para: "${texto}"</h4>`;
    resultados.forEach(function (producto) {
      html += `<p>• ${producto}</p>`;
    });
    contenedor.innerHTML = html;
  }
});
