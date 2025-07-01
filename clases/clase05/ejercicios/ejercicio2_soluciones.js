// ========================================
// EJERCICIO 2: ARRAYS, OBJETOS Y MÉTODOS BÁSICOS - SOLUCIONES
// Clase 5: JavaScript Fundamentos
// Curso: Introducción al Desarrollo Web ComuIT 2025
// ========================================

console.log("=".repeat(60));
console.log("SOLUCIONES - EJERCICIO 2: ARRAYS, OBJETOS Y MÉTODOS BÁSICOS");
console.log("=".repeat(60));

// ========================================
// EJERCICIO 2.1: GESTOR DE PLAYLIST MUSICAL
// ========================================

console.log("\n🧩 EJERCICIO 2.1: GESTOR DE PLAYLIST MUSICAL");
console.log("-".repeat(50));

// Crear playlist inicial
let playlist = ["Imagine", "Bohemian Rhapsody", "Hotel California"];
console.log("Playlist inicial:", playlist);

// Agregar canciones al final
playlist.push("Stairway to Heaven");
playlist.push("Yesterday");
console.log("Después de agregar canciones:", playlist);

// Quitar la última canción
let cancionRemovidaPlaylist = playlist.pop();
console.log("Canción removida:", cancionRemovidaPlaylist);
console.log("Playlist después de remover:", playlist);

// Buscar posición de "Imagine"
let posicionImagine = playlist.indexOf("Imagine");
console.log("Posición de 'Imagine':", posicionImagine);

// Verificar si está "Wonderwall"
let tieneWonderwall = playlist.includes("Wonderwall");
console.log("¿Está 'Wonderwall'?:", tieneWonderwall);

// Convertir playlist a string
let playlistString = playlist.join(" | ");
console.log("Playlist como string:", playlistString);
console.log("Total de canciones:", playlist.length);

// ========================================
// EJERCICIO 2.2: BIBLIOTECA PERSONAL DE LIBROS
// ========================================

console.log("\n🧩 EJERCICIO 2.2: BIBLIOTECA PERSONAL DE LIBROS");
console.log("-".repeat(50));

// Crear objetos libro
let libro1 = {
    titulo: "El Quijote",
    autor: "Miguel de Cervantes",
    paginas: 863,    
};

let libro2 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 471,    
};

let libro3 = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328    
};

// Crear array biblioteca
let biblioteca = [libro1, libro2, libro3];

// Mostrar cada libro con for loop
console.log("Libros en la biblioteca:");
for (let i = 0; i < biblioteca.length; i++) {    
    console.log((i + 1) + ". " + biblioteca[i].titulo + " por " + biblioteca[i].autor + " (" + biblioteca[i].paginas + " páginas) - " );
}

// Calcular promedio de páginas
let totalPaginas = 0;
for (let i = 0; i < biblioteca.length; i++) {
    totalPaginas = totalPaginas + biblioteca[i].paginas;
}
let promedioPaginas = totalPaginas / biblioteca.length;

console.log("Promedio de páginas:", promedioPaginas);

// Agregar nuevo libro
let nuevoLibro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    paginas: 96    
};
biblioteca.push(nuevoLibro);

// ========================================
// EJERCICIO 2.3: ANÁLISIS DE VENTAS MENSUALES
// ========================================

console.log("\n🧩 EJERCICIO 2.3: ANÁLISIS DE VENTAS MENSUALES");
console.log("-".repeat(50));

// Crear arrays de meses y ventas
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
let ventas = [15000, 18500, 22000, 16800, 25000];

// Mostrar cada mes con sus ventas
console.log("Ventas mensuales:");
for (let i = 0; i < meses.length; i++) {
    console.log(meses[i] + ": $" + ventas[i].toLocaleString());
}

// Calcular total de ventas
let totalVentas = 0;
for (let i = 0; i < ventas.length; i++) {
    totalVentas = totalVentas + ventas[i];
}

// Calcular promedio mensual
let promedioMensual = totalVentas / ventas.length;

console.log("Total ventas: $" + totalVentas.toLocaleString());
console.log("Promedio mensual: $" + promedioMensual.toLocaleString());

// Buscar posición de "Marzo"
let posicionMarzo = meses.indexOf("Marzo");
console.log("Posición de 'Marzo':", posicionMarzo);

// Verificar si está "Junio"
let tieneJunio = meses.includes("Junio");
console.log("¿Está 'Junio'?:", tieneJunio);

// Agregar "Junio"
meses.push("Junio");
ventas.push(19500);

// Recalcular total después de agregar
let nuevoTotal = 0;
for (let i = 0; i < ventas.length; i++) {
    nuevoTotal = nuevoTotal + ventas[i];
}
console.log("Después de agregar Junio: $" + nuevoTotal.toLocaleString() + " total");

// Crear reporte como string
let reporteMeses = meses.join(" - ");
console.log("Reporte de meses:", reporteMeses);

// ========================================
// EJERCICIO 2.4: SISTEMA DE INVENTARIO SIMPLE
// ========================================

console.log("\n🧩 EJERCICIO 2.4: SISTEMA DE INVENTARIO SIMPLE");
console.log("-".repeat(50));

// Crear arrays paralelos
let productos = ["manzanas", "peras", "naranjas", "plátanos", "uvas"];
let stock = [25, 18, 30, 12, 8];
let precios = [1.50, 2.00, 1.80, 1.20, 3.50];

// Mostrar cada producto con stock y precio
console.log("Inventario actual:");
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i] + ": " + stock[i] + " unidades - $" + precios[i] + " c/u");
}

// Buscar posición de "naranjas"
let posicionNaranjas = productos.indexOf("naranjas");
console.log("Posición de 'naranjas':", posicionNaranjas);

// Verificar si están "mangos"
let tieneMangos = productos.includes("mangos");
console.log("¿Están 'mangos'?:", tieneMangos);

// Calcular total de unidades en stock
let totalUnidades = 0;
for (let i = 0; i < stock.length; i++) {
    totalUnidades = totalUnidades + stock[i];
}
console.log("Total unidades en stock:", totalUnidades);

// Calcular valor total del inventario
let valorTotal = 0;
for (let i = 0; i < productos.length; i++) {
    let valorProducto = stock[i] * precios[i];
    valorTotal = valorTotal + valorProducto;
}
console.log("Valor total del inventario: $" + valorTotal.toFixed(2));

// Agregar nuevo producto
productos.push("mangos");
stock.push(15);
precios.push(2.50);

// Convertir lista de productos en string
let listaProductos = productos.join(",");
console.log("Productos:", listaProductos);

// ========================================
// EJERCICIO 2.5: RED SOCIAL BÁSICA - GESTIÓN DE POSTS
// ========================================

console.log("\n🧩 EJERCICIO 2.5: RED SOCIAL BÁSICA - GESTIÓN DE POSTS");
console.log("-".repeat(50));

// Crear objetos post
let post1 = {
    usuario: "ana_dev",
    mensaje: "Aprendiendo JavaScript! 🚀",
    likes: 15,
    fecha: "2025-01-15"
};

let post2 = {
    usuario: "carlos_code",
    mensaje: "Primer proyecto terminado 💪",
    likes: 8,
    fecha: "2025-01-14"
};

let post3 = {
    usuario: "maria_tech",
    mensaje: "CSS es increíble ✨",
    likes: 23,
    fecha: "2025-01-13"
};

let post4 = {
    usuario: "ana_dev",
    mensaje: "Arrays son muy útiles 📚",
    likes: 12,
    fecha: "2025-01-12"
};

// Crear array feed
let feed = [post1, post2, post3, post4];

// Mostrar cada post
console.log("Feed de posts:");
for (let i = 0; i < feed.length; i++) {
    console.log("@" + feed[i].usuario + ": " + feed[i].mensaje + " (" + feed[i].likes + " likes)");
}

// Calcular total de likes
let totalLikes = 0;
for (let i = 0; i < feed.length; i++) {
    totalLikes = totalLikes + feed[i].likes;
}
console.log("Total likes del feed:", totalLikes);

// Calcular promedio de likes por post
let promedioLikes = totalLikes / feed.length;
console.log("Promedio likes por post:", promedioLikes);

// Agregar nuevo post
let nuevoPost = {
    usuario: "luis_web",
    mensaje: "Mi primer post! 🎉",
    likes: 5,
    fecha: "2025-01-16"
};
feed.push(nuevoPost);
console.log("Nuevo post agregado");

// Quitar el último post
let postRemovidoFeed = feed.pop();
console.log("Post removido:", "@" + postRemovidoFeed.usuario + ": " + postRemovidoFeed.mensaje);

console.log("Posts totales:", feed.length);

// ========================================
// RESUMEN FINAL
// ========================================

console.log("\n" + "=".repeat(60));
console.log("🎯 RESUMEN: ¡Has completado todos los ejercicios!");
console.log("✅ Métodos de arrays dominados: push(), pop(), indexOf(), includes(), join()");
console.log("✅ For loops tradicionales aplicados correctamente");
console.log("✅ Arrays de objetos y arrays paralelos manejados");
console.log("=".repeat(60));