// ========================================
// TAREA CLASE 5: SOLUCIONES COMPLETAS
// JavaScript Fundamentos en Archivos
// ========================================

console.log("🚀 INICIANDO EJERCICIOS DE TAREA - CLASE 5");
console.log("=" .repeat(50));

// ========================================
// SETUP INICIAL: Template Literals Demo
// ========================================

console.log("\n📝 DEMO: Template Literals vs Concatenación");

let nombre = "Ana";
let edad = 25;
let precio = 100;
let descuento = 20;

// Comparación de sintaxis
console.log("❌ Forma tradicional: " + nombre + " tiene " + edad + " años");
console.log(`✅ Template literals: ${nombre} tiene ${edad} años`);

// Ventajas de template literals
console.log(`Precio original: $${precio}`);
console.log(`Con descuento: $${precio - descuento}`);
console.log(`Total con IVA: $${(precio - descuento) * 1.21}`);

// ========================================
// EJERCICIO A: DATOS PERSONALES
// ========================================

console.log("\n" + "=".repeat(30));
console.log("📋 EJERCICIO A: DATOS PERSONALES");
console.log("=".repeat(30));

// ✅ Objeto personal completo
let miPerfil = {
    nombre: "María González",
    edad: 28,
    ciudad: "Buenos Aires",
    intereses: ["programación", "fotografía", "yoga", "lectura"],
    esDesarrollador: true,
    profesion: "Diseñadora UX",
    comidaFavorita: "Pizza",
    hobbies: ["guitarra", "senderismo"]
};

// ✅ Mostrar información básica con template literals
console.log("=== MI PERFIL ===");
console.log(`Nombre: ${miPerfil.nombre}`);
console.log(`Edad: ${miPerfil.edad} años`);
console.log(`Vivo en: ${miPerfil.ciudad}`);
console.log(`Profesión: ${miPerfil.profesion}`);
console.log(`Comida favorita: ${miPerfil.comidaFavorita}`);
console.log(`¿Es desarrollador? ${miPerfil.esDesarrollador ? "Sí" : "No"}`);

// ✅ Mostrar intereses usando for loop
console.log("\n🎯 Mis intereses:");
for (let i = 0; i < miPerfil.intereses.length; i++) {
    console.log(`  ${i + 1}. ${miPerfil.intereses[i]}`);
}

// ✅ Mostrar hobbies usando for loop
console.log("\n🎨 Mis hobbies:");
for (let i = 0; i < miPerfil.hobbies.length; i++) {
    console.log(`  • ${miPerfil.hobbies[i]}`);
}

// ✅ Estadísticas adicionales
console.log(`\n📊 Total de intereses: ${miPerfil.intereses.length}`);
console.log(`📊 Total de hobbies: ${miPerfil.hobbies.length}`);

// ========================================
// EJERCICIO B: LISTA DE TAREAS
// ========================================

console.log("\n" + "=".repeat(30));
console.log("📝 EJERCICIO B: LISTA DE TAREAS");
console.log("=".repeat(30));

// ✅ Arrays de tareas y duraciones
let tareas = [
    "Estudiar JavaScript",
    "Hacer ejercicio",
    "Reunión de trabajo", 
    "Leer libro",
    "Preparar cena"
];

let duraciones = [120, 60, 90, 45, 30]; // en minutos

console.log("=== MIS TAREAS DE HOY ===");

// ✅ Mostrar cada tarea con duración usando template literals
for (let i = 0; i < tareas.length; i++) {
    console.log(`${i + 1}. ${tareas[i]} - ${duraciones[i]} minutos`);
}

// ✅ Calcular tiempo total
let tiempoTotal = 0;
for (let i = 0; i < duraciones.length; i++) {
    tiempoTotal = tiempoTotal + duraciones[i];
}

console.log(`\n⏰ Tiempo total: ${tiempoTotal} minutos`);

// ✅ Convertir a horas y minutos (DESAFÍO)
let horas = Math.floor(tiempoTotal / 60);
let minutosRestantes = tiempoTotal % 60;
console.log(`⏰ Equivale a: ${horas} horas y ${minutosRestantes} minutos`);

// ✅ Agregar nueva tarea
tareas.push("Estudiar para examen");
duraciones.push(90);

console.log(`\n➕ Nueva tarea agregada: ${tareas[tareas.length - 1]} (${duraciones[duraciones.length - 1]} min)`);
console.log(`📊 Total de tareas ahora: ${tareas.length}`);

// ✅ Recalcular tiempo total
let nuevoTiempoTotal = 0;
for (let i = 0; i < duraciones.length; i++) {
    nuevoTiempoTotal += duraciones[i];
}
console.log(`⏰ Nuevo tiempo total: ${nuevoTiempoTotal} minutos`);

// ========================================
// EJERCICIO C: CATÁLOGO SIMPLE
// ========================================

console.log("\n" + "=".repeat(30));
console.log("🛍️ EJERCICIO C: CATÁLOGO SIMPLE");
console.log("=".repeat(30));

// ✅ Array de productos (objetos completos)
let productos = [
    {
        nombre: "Laptop Gaming",
        precio: 1200,
        categoria: "Tecnología",
        disponible: true
    },
    {
        nombre: "Mesa de Oficina",
        precio: 250,
        categoria: "Muebles",
        disponible: true
    },
    {
        nombre: "Libro: JavaScript Avanzado",
        precio: 35,
        categoria: "Educación",
        disponible: false
    },
    {
        nombre: "Auriculares Bluetooth",
        precio: 80,
        categoria: "Tecnología",
        disponible: true
    },
    {
        nombre: "Silla Ergonómica",
        precio: 300,
        categoria: "Muebles",
        disponible: false
    }
];

console.log("=== CATÁLOGO DE PRODUCTOS ===");

// ✅ Mostrar cada producto con template literals
for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let estado = producto.disponible ? "✅ Disponible" : "❌ Agotado";
    
    console.log(`\nProducto ${i + 1}:`);
    console.log(`  📦 Nombre: ${producto.nombre}`);
    console.log(`  💰 Precio: $${producto.precio}`);
    console.log(`  🏷️ Categoría: ${producto.categoria}`);
    console.log(`  📋 Estado: ${estado}`);
}

// ✅ Calcular precio promedio
let sumaPrecios = 0;
for (let i = 0; i < productos.length; i++) {
    sumaPrecios += productos[i].precio;
}
let precioPromedio = sumaPrecios / productos.length;

console.log(`\n📊 ESTADÍSTICAS DEL CATÁLOGO:`);
console.log(`💰 Precio promedio: $${precioPromedio.toFixed(2)}`);

// ✅ DESAFÍO: Contar disponibles vs agotados
let disponibles = 0;
let agotados = 0;

for (let i = 0; i < productos.length; i++) {
    if (productos[i].disponible) {
        disponibles++;
    } else {
        agotados++;
    }
}

console.log(`📦 Productos disponibles: ${disponibles}`);
console.log(`❌ Productos agotados: ${agotados}`);
console.log(`📊 Total productos: ${productos.length}`);

// ✅ DESAFÍO EXTRA: Producto más caro y más barato
let productoMasCaro = productos[0];
let productoMasBarato = productos[0];

for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio > productoMasCaro.precio) {
        productoMasCaro = productos[i];
    }
    if (productos[i].precio < productoMasBarato.precio) {
        productoMasBarato = productos[i];
    }
}

console.log(`\n🔝 Producto más caro: ${productoMasCaro.nombre} ($${productoMasCaro.precio})`);
console.log(`💸 Producto más barato: ${productoMasBarato.nombre} ($${productoMasBarato.precio})`);

// ✅ EXTRA: Productos por categoría
console.log(`\n📂 PRODUCTOS POR CATEGORÍA:`);
let categoriasTecnologia = 0;
let categoriasMuebles = 0;
let categoriasEducacion = 0;

for (let i = 0; i < productos.length; i++) {
    switch (productos[i].categoria) {
        case "Tecnología":
            categoriasTecnologia++;
            break;
        case "Muebles":
            categoriasMuebles++;
            break;
        case "Educación":
            categoriasEducacion++;
            break;
    }
}

console.log(`💻 Tecnología: ${categoriasTecnologia} productos`);
console.log(`🪑 Muebles: ${categoriasMuebles} productos`);
console.log(`📚 Educación: ${categoriasEducacion} productos`);

// ========================================
// RESUMEN FINAL Y VALIDACIÓN
// ========================================

console.log("\n" + "=".repeat(50));
console.log("🎉 TODOS LOS EJERCICIOS COMPLETADOS");
console.log("=".repeat(50));

console.log("\n📊 CONCEPTOS UTILIZADOS EN LAS SOLUCIONES:");
console.log("✅ Template literals con ${}");
console.log("✅ Variables (let, const)");
console.log("✅ Objetos con múltiples propiedades");
console.log("✅ Arrays simples y complejos");
console.log("✅ For loops tradicionales");
console.log("✅ Métodos básicos de arrays (push, length)");
console.log("✅ Operadores matemáticos (+, -, *, /, %)");
console.log("✅ Operadores de comparación y lógicos");
console.log("✅ Condicionales básicos (? :, if/else)");

console.log("\n💡 PREPARACIÓN PARA CLASE 6:");
console.log("✅ Patrones repetitivos identificados");
console.log("✅ Código que se beneficiaría de funciones");
console.log("✅ Lógica condicional básica aplicada");
console.log("✅ Sintaxis moderna con template literals");

console.log("\n🎯 RESULTADOS DE VERIFICACIÓN:");
console.log(`Ejercicio A - Propiedades en perfil: ${Object.keys(miPerfil).length}`);
console.log(`Ejercicio B - Tareas gestionadas: ${tareas.length}`);
console.log(`Ejercicio B - Tiempo total: ${nuevoTiempoTotal} minutos`);
console.log(`Ejercicio C - Productos en catálogo: ${productos.length}`);
console.log(`Ejercicio C - Precio promedio: $${precioPromedio.toFixed(2)}`);

console.log("\n🚀 ¡LISTO PARA CLASE 6: FUNCIONES Y LÓGICA!");

// ========================================
// NOTAS PARA EL PROFESOR
// ========================================

/*
NOTAS PEDAGÓGICAS:

✅ CONCEPTOS CORRECTAMENTE APLICADOS:
- Template literals usados consistentemente
- For loops tradicionales (no forEach aún)
- Objetos y arrays combinados apropiadamente
- Métodos básicos sin callbacks
- Sintaxis de ES6+ (const, let, template literals)

✅ NIVEL DE DIFICULTAD:
- Ejercicio A: FÁCIL - objetos y loops básicos
- Ejercicio B: MEDIO - arrays paralelos y cálculos
- Ejercicio C: MEDIO-AVANZADO - arrays de objetos y estadísticas

✅ PREPARACIÓN PARA CLASE 6:
- Patrones repetitivos evidentes (loops similares)
- Código que se beneficiaría de funciones
- Uso de condicionales básicos pero sin if/else formal
- Base sólida para introducir funciones

✅ ERRORES A BUSCAR AL REVISAR:
- Uso incorrecto de template literals (comillas en lugar de backticks)
- For loops sin incremento o con condiciones incorrectas
- Confusión entre notación punto y corchetes en objetos
- Intentos de usar forEach, map, filter (conceptos de Clase 6)

✅ CRITERIOS DE EVALUACIÓN:
- Mínimo: 2 de 3 ejercicios funcionando
- Óptimo: Todos los ejercicios + desafíos
- Excelente: Código limpio + experimentación adicional
*/