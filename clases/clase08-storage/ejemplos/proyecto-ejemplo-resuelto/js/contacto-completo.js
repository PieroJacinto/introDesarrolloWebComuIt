// =========================================== 
// CONTACTO.JS - SOLO PARA CONTACTO.HTML
// ===========================================

function guardarFormulario() {
    // Leer campos y guardar
    const datos = {
        nombre: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        telefono: document.getElementById('telefono').value,
        mensaje: document.getElementById('mensaje').value
    };
    
    localStorage.setItem('cafeteria-formulario', JSON.stringify(datos));
}

function cargarFormulario() {
    // Recuperar y llenar formulario
    const datosJSON = localStorage.getItem('cafeteria-formulario');
    
    if (datosJSON) {
        const datos = JSON.parse(datosJSON);
        document.getElementById('nombre').value = datos.nombre || '';
        document.getElementById('email').value = datos.email || '';
        document.getElementById('telefono').value = datos.telefono || '';
        document.getElementById('mensaje').value = datos.mensaje || '';
    }
}

function limpiarFormulario() {
    // Limpiar campos y Local Storage
    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('mensaje').value = '';
    localStorage.removeItem('cafeteria-formulario');
}

// Configurar auto-guardado cuando se carga la página
window.addEventListener('load', function() {
    // Cargar formulario guardado
    cargarFormulario();
    
    // Auto-guardar cuando usuario escribe en cada campo
    document.getElementById('nombre').addEventListener('input', guardarFormulario);
    document.getElementById('email').addEventListener('input', guardarFormulario);
    document.getElementById('telefono').addEventListener('input', guardarFormulario);
    document.getElementById('mensaje').addEventListener('input', guardarFormulario);
});