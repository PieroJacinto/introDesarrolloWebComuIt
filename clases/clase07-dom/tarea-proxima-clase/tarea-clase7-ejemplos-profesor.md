# 📝 EJEMPLOS DE FUNCIONES - TAREA CLASE 7 (REPO PROFESOR)

## 🎯 PARA AYUDAR A ESTUDIANTES EN LA PRÓXIMA CLASE

---

## ✅ FUNCIONALIDAD 1: MOSTRAR CONTENIDO (OBLIGATORIA)

### 💼 **PORTFOLIO - Mostrar proyectos**

#### datos.js
```javascript
const proyectos = [
    {nombre: "Portfolio Web", tecnologia: "HTML/CSS", año: 2024, url: "https://mi-portfolio.com"},
    {nombre: "Tienda Online", tecnologia: "JavaScript", año: 2024, url: "https://mi-tienda.com"},
    {nombre: "Blog Personal", tecnologia: "React", año: 2023, url: "https://mi-blog.com"}
];

export { proyectos };
```

#### funciones.js
```javascript
import { proyectos } from './datos.js';

function mostrarProyectos() {
    let html = '<h3>💼 Mis Proyectos</h3>';
    
    proyectos.forEach(function(proyecto) {
        html += `
            <div class="proyecto">
                <h4>${proyecto.nombre}</h4>
                <p>Tecnología: ${proyecto.tecnologia}</p>
                <p>Año: ${proyecto.año}</p>
                <a href="${proyecto.url}" target="_blank">Ver proyecto</a>
            </div>
        `;
    });
    
    return html;
}

export { mostrarProyectos };
```

#### dom.js
```javascript
import { mostrarProyectos } from './funciones.js';

function inicializar() {
    const contenedor = document.querySelector('#proyectos-container');
    contenedor.innerHTML = mostrarProyectos();
}

document.addEventListener('DOMContentLoaded', inicializar);
```

### 📝 **BLOG - Mostrar artículos**

#### datos.js
```javascript
const articulos = [
    {titulo: "Mi primer post", categoria: "Personal", fecha: "2024-01-15", resumen: "Comenzando mi blog"},
    {titulo: "Aprendiendo JavaScript", categoria: "Tecnología", fecha: "2024-02-20", resumen: "Conceptos básicos de JS"},
    {titulo: "Viaje a Córdoba", categoria: "Viajes", fecha: "2024-03-10", resumen: "Experiencias en las sierras"}
];

export { articulos };
```

#### funciones.js
```javascript
import { articulos } from './datos.js';

function mostrarArticulos() {
    let html = '<h3>📝 Mis Artículos</h3>';
    
    articulos.forEach(function(articulo) {
        html += `
            <article>
                <h4>${articulo.titulo}</h4>
                <p class="categoria">Categoría: ${articulo.categoria}</p>
                <p class="fecha">Fecha: ${articulo.fecha}</p>
                <p>${articulo.resumen}</p>
            </article>
        `;
    });
    
    return html;
}

export { mostrarArticulos };
```

### 🍽️ **RESTAURANTE - Mostrar menú**

#### datos.js
```javascript
const menu = [
    {nombre: "Hamburguesa Clásica", categoria: "Principal", precio: 850, descripcion: "Carne, lechuga, tomate"},
    {nombre: "Ensalada César", categoria: "Entrada", precio: 650, descripcion: "Lechuga, pollo, crutones"},
    {nombre: "Tiramisu", categoria: "Postre", precio: 450, descripcion: "Postre italiano tradicional"}
];

export { menu };
```

#### funciones.js
```javascript
import { menu } from './datos.js';

function mostrarMenu() {
    let html = '<h3>🍽️ Nuestro Menú</h3>';
    
    menu.forEach(function(plato) {
        html += `
            <div class="plato">
                <h4>${plato.nombre}</h4>
                <p class="categoria">${plato.categoria}</p>
                <p class="precio">$${plato.precio}</p>
                <p class="descripcion">${plato.descripcion}</p>
            </div>
        `;
    });
    
    return html;
}

export { mostrarMenu };
```

---

## ➕ FUNCIONALIDAD 2: EJEMPLOS DE CADA OPCIÓN

### **OPCIÓN A: Filtrar por categoría**

#### funciones.js (agregar)
```javascript
function filtrarPorCategoria(categoriaSeleccionada) {
    if (categoriaSeleccionada === 'todos') {
        return mostrarMenu(); // o mostrarProyectos(), mostrarArticulos()
    }
    
    let html = `<h3>🔍 ${categoriaSeleccionada}</h3>`;
    
    menu.forEach(function(plato) {
        if (plato.categoria === categoriaSeleccionada) {
            html += `
                <div class="plato">
                    <h4>${plato.nombre}</h4>
                    <p class="precio">$${plato.precio}</p>
                    <p>${plato.descripcion}</p>
                </div>
            `;
        }
    });
    
    return html;
}

export { mostrarMenu, filtrarPorCategoria };
```

#### dom.js (agregar)
```javascript
import { mostrarMenu, filtrarPorCategoria } from './funciones.js';

function agregarEventosFiltros() {
    const btnTodos = document.querySelector('#btn-todos');
    const btnEntradas = document.querySelector('#btn-entradas');
    const btnPrincipales = document.querySelector('#btn-principales');
    const btnPostres = document.querySelector('#btn-postres');
    
    btnTodos.addEventListener('click', function() {
        const contenedor = document.querySelector('#menu-container');
        contenedor.innerHTML = mostrarMenu();
    });
    
    btnEntradas.addEventListener('click', function() {
        const contenedor = document.querySelector('#menu-container');
        contenedor.innerHTML = filtrarPorCategoria('Entrada');
    });
    
    btnPrincipales.addEventListener('click', function() {
        const contenedor = document.querySelector('#menu-container');
        contenedor.innerHTML = filtrarPorCategoria('Principal');
    });
    
    btnPostres.addEventListener('click', function() {
        const contenedor = document.querySelector('#menu-container');
        contenedor.innerHTML = filtrarPorCategoria('Postre');
    });
}

function inicializar() {
    const contenedor = document.querySelector('#menu-container');
    contenedor.innerHTML = mostrarMenu();
    agregarEventosFiltros();
}
```

### **OPCIÓN B: Búsqueda simple**

#### funciones.js (agregar)
```javascript
function buscar(texto) {
    if (texto === '') {
        return mostrarMenu();
    }
    
    let html = `<h3>🔍 Resultados para: "${texto}"</h3>`;
    let encontrados = [];
    
    menu.forEach(function(plato) {
        if (plato.nombre.toLowerCase().includes(texto.toLowerCase())) {
            encontrados.push(plato);
        }
    });
    
    if (encontrados.length === 0) {
        html += '<p>No se encontraron resultados.</p>';
    } else {
        encontrados.forEach(function(plato) {
            html += `
                <div class="plato">
                    <h4>${plato.nombre}</h4>
                    <p class="precio">$${plato.precio}</p>
                </div>
            `;
        });
    }
    
    return html;
}

export { mostrarMenu, buscar };
```

#### dom.js (agregar)
```javascript
function agregarEventoBusqueda() {
    const inputBuscar = document.querySelector('#input-buscar');
    
    inputBuscar.addEventListener('keyup', function(event) {
        const texto = event.target.value;
        const contenedor = document.querySelector('#menu-container');
        contenedor.innerHTML = buscar(texto);
    });
}
```

### **OPCIÓN C: Mostrar/ocultar detalles**

#### datos.js (actualizar)
```javascript
const menu = [
    {
        id: 1,
        nombre: "Hamburguesa Clásica", 
        categoria: "Principal", 
        precio: 850, 
        descripcion: "Carne 100% vacuna, lechuga, tomate, cebolla, queso cheddar en pan brioche",
        ingredientes: "Carne, lechuga, tomate, cebolla, queso, pan",
        mostrarDetalles: false
    },
    // ... más platos con descripción e ingredientes completos
];
```

#### funciones.js (agregar)
```javascript
function alternarDetalles(id) {
    const plato = menu.find(function(p) {
        return p.id === id;
    });
    
    if (plato) {
        plato.mostrarDetalles = !plato.mostrarDetalles;
    }
    
    return mostrarMenuConDetalles();
}

function mostrarMenuConDetalles() {
    let html = '<h3>🍽️ Nuestro Menú</h3>';
    
    menu.forEach(function(plato) {
        html += `
            <div class="plato">
                <h4>${plato.nombre}</h4>
                <p class="precio">$${plato.precio}</p>
                ${plato.mostrarDetalles ? 
                    `<p class="descripcion-completa">${plato.descripcion}</p>
                     <p class="ingredientes">Ingredientes: ${plato.ingredientes}</p>` 
                    : 
                    '<p class="descripcion-corta">Descripción breve...</p>'
                }
                <button onclick="toggleDetalles(${plato.id})">
                    ${plato.mostrarDetalles ? 'Ver menos' : 'Ver más'}
                </button>
            </div>
        `;
    });
    
    return html;
}
```

### **OPCIÓN D: Formulario de contacto**

#### HTML necesario
```html
<form id="form-contacto">
    <input type="text" id="nombre" placeholder="Tu nombre" required>
    <textarea id="mensaje" placeholder="Tu mensaje" required></textarea>
    <button type="submit">Enviar mensaje</button>
</form>
<div id="resultado-contacto"></div>
```

#### dom.js (agregar)
```javascript
function agregarEventoFormulario() {
    const form = document.querySelector('#form-contacto');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.querySelector('#nombre').value;
        const mensaje = document.querySelector('#mensaje').value;
        
        const resultado = document.querySelector('#resultado-contacto');
        resultado.innerHTML = `
            <div class="mensaje-exito">
                <h4>✅ Mensaje enviado</h4>
                <p>Gracias ${nombre}, te contactaremos pronto.</p>
            </div>
        `;
        
        // Limpiar formulario
        form.reset();
    });
}
```

### **OPCIÓN E: Cambiar tema/colores**

#### funciones.js (agregar)
```javascript
let temaOscuro = false;

function cambiarTema() {
    const body = document.querySelector('body');
    
    if (temaOscuro) {
        body.style.backgroundColor = '#ffffff';
        body.style.color = '#333333';
        temaOscuro = false;
        return 'Tema claro activado';
    } else {
        body.style.backgroundColor = '#2d3748';
        body.style.color = '#ffffff';
        temaOscuro = true;
        return 'Tema oscuro activado';
    }
}

export { mostrarMenu, cambiarTema };
```

#### dom.js (agregar)
```javascript
function agregarEventoTema() {
    const btnTema = document.querySelector('#btn-cambiar-tema');
    
    btnTema.addEventListener('click', function() {
        const mensaje = cambiarTema();
        console.log(mensaje);
        
        // Opcional: mostrar mensaje en pantalla
        const notificacion = document.querySelector('#notificacion');
        if (notificacion) {
            notificacion.innerHTML = mensaje;
            setTimeout(function() {
                notificacion.innerHTML = '';
            }, 2000);
        }
    });
}
```

---

## 💡 CONSEJOS PARA EL PROFESOR

### **Errores comunes que pueden aparecer:**
- Olvidar `export`/`import`
- No usar `type="module"` en HTML
- Errores de rutas en import
- No usar `event.preventDefault()` en formularios
- Seleccionar elementos que no existen

### **Debugging básico:**
- Abrir consola (F12) para ver errores
- Usar `console.log()` para verificar datos
- Verificar que Live Server esté funcionando

### **Si un estudiante se queda trabado:**
- Empezar con la funcionalidad obligatoria (mostrar contenido)
- Revisar que la estructura de archivos sea correcta
- Verificar un archivo a la vez (datos → funciones → dom)