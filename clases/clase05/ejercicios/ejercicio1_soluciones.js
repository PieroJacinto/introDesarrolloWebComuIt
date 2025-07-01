// ========================================
// EJERCICIO 1: VARIABLES, ARRAYS Y FOR LOOPS - SOLUCIONES EQUILIBRADAS
// Clase 5: JavaScript Fundamentos
// Curso: Introducción al Desarrollo Web ComuIT 2025
// ========================================

console.log("=".repeat(50));
console.log("SOLUCIONES - EJERCICIO 1: VARIABLES, ARRAYS Y FOR LOOPS");
console.log("=".repeat(50));

// ========================================
// EJERCICIO 1.1: CALCULADORA DE NOTAS
// ========================================

console.log("\n🧩 EJERCICIO 1.1: CALCULADORA DE NOTAS");
console.log("-".repeat(40));

// Crear variables de notas
let nota1 = 85;
let nota2 = 92;
let nota3 = 78;
let nota4 = 88;

console.log("Notas del estudiante:");
console.log("Nota 1:", nota1);
console.log("Nota 2:", nota2);
console.log("Nota 3:", nota3);
console.log("Nota 4:", nota4);

// Calcular promedio
let sumaNotas = nota1 + nota2 + nota3 + nota4;
let promedio = sumaNotas / 4;

console.log("\nCálculos:");
console.log("Promedio:", promedio);
console.log("Total puntos:", sumaNotas);

// Encontrar diferencia entre la más alta (92) y más baja (78)
let notaMasAlta = 92;
let notaMasBaja = 78;
let rango = notaMasAlta - notaMasBaja;

console.log("Rango:", rango, "puntos");

// ========================================
// EJERCICIO 1.2: LISTA DE TAREAS DIARIAS
// ========================================

console.log("\n🧩 EJERCICIO 1.2: LISTA DE TAREAS DIARIAS");
console.log("-".repeat(40));

// Crear arrays de tareas y duraciones
let tareas = ["desayunar", "estudiar", "ejercicio", "trabajo"];
let duracion = [30, 120, 60, 480]; // en minutos

console.log("Tareas del día:");

// Mostrar cada tarea con su duración usando for loop
for (let i = 0; i < tareas.length; i++) {
    console.log(tareas[i] + ": " + duracion[i] + " minutos");
}

// Calcular total de minutos
let totalMinutos = 0;
for (let i = 0; i < duracion.length; i++) {
    totalMinutos = totalMinutos + duracion[i];
}

// Convertir a horas
let totalHoras = totalMinutos / 60;

console.log("\nResumen:");
console.log("Total: " + totalMinutos + " minutos (" + totalHoras + " horas)");

// Agregar nueva tarea
tareas.push("cena");
duracion.push(45);

console.log("Nueva tarea agregada: " + tareas[tareas.length - 1] + " (" + duracion[duracion.length - 1] + " min)");

// ========================================
// EJERCICIO 1.3: CATÁLOGO DE PRODUCTOS
// ========================================

console.log("\n🧩 EJERCICIO 1.3: CATÁLOGO DE PRODUCTOS");
console.log("-".repeat(40));

// Crear objetos producto
let producto1 = {
    nombre: "Laptop",
    precio: 800,
    categoria: "Tecnología",
    disponible: true
};

let producto2 = {
    nombre: "Mesa",
    precio: 150,
    categoria: "Muebles",
    disponible: true
};

let producto3 = {
    nombre: "Libro",
    precio: 25,
    categoria: "Educación",
    disponible: false
};

// Guardar productos en array
let productos = [];
productos.push(producto1);
productos.push(producto2);
productos.push(producto3);

console.log("Catálogo de productos:");

// Mostrar cada producto usando for loop
for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let estadoDisponibilidad = producto.disponible ? "Disponible" : "No disponible";
    
    console.log("Producto " + (i + 1) + ": " + 
                producto.nombre + " - $" + producto.precio + 
                " - " + producto.categoria + " - " + estadoDisponibilidad);
}

// Calcular precio promedio
let sumaPrecios = 0;
for (let i = 0; i < productos.length; i++) {
    sumaPrecios = sumaPrecios + productos[i].precio;
}

let precioPromedio = sumaPrecios / productos.length;

console.log("\nEstadísticas:");
console.log("Precio promedio: $" + precioPromedio);
console.log("Total productos: " + productos.length);

// Crear objeto resumen
let resumen = {
    totalProductos: productos.length,
    precioPromedio: precioPromedio,
    categorias: ["Tecnología", "Muebles", "Educación"]
};

console.log("Resumen creado con " + resumen.totalProductos + " productos");

// ========================================
// EJERCICIO 1.4: CONTADOR DE LETRAS
// ========================================

console.log("\n🧩 EJERCICIO 1.4: CONTADOR DE LETRAS");
console.log("-".repeat(40));

let palabra = "programacion";
console.log("Palabra original: " + palabra);

// Contar letra 'a'
let contadorA = 0;
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "a") {
        contadorA = contadorA + 1;
    }
}

// Contar letra 'r'
let contadorR = 0;
for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "r") {
        contadorR = contadorR + 1;
    }
}

// Crear palabra en mayúsculas
let palabraMayusculas = "";
for (let i = 0; i < palabra.length; i++) {
    palabraMayusculas = palabraMayusculas + palabra[i].toUpperCase();
}

console.log("Palabra en mayúsculas: " + palabraMayusculas);
console.log("Letra 'a' aparece: " + contadorA + " veces");
console.log("Letra 'r' aparece: " + contadorR + " veces");
console.log("Total de letras: " + palabra.length);

// ========================================
// EJERCICIO 1.5: SISTEMA DE CALIFICACIONES DE CLASE
// ========================================

console.log("\n🧩 EJERCICIO 1.5: SISTEMA DE CALIFICACIONES DE CLASE");
console.log("-".repeat(40));

// Datos de estudiantes
let estudiantes = ["Ana", "Luis", "María", "Carlos"];
let examen1 = [85, 90, 78, 92];
let examen2 = [88, 85, 82, 89];

console.log("Calificaciones individuales:");

// Calcular promedio individual de cada estudiante
let promediosIndividuales = [];
for (let i = 0; i < estudiantes.length; i++) {
    let promedioEstudiante = (examen1[i] + examen2[i]) / 2;
    promediosIndividuales.push(promedioEstudiante);
    
    console.log(estudiantes[i] + ": Examen1=" + examen1[i] + 
                ", Examen2=" + examen2[i] + 
                ", Promedio=" + promedioEstudiante);
}

// Calcular promedio general de la clase
let sumaPromedios = 0;
for (let i = 0; i < promediosIndividuales.length; i++) {
    sumaPromedios = sumaPromedios + promediosIndividuales[i];
}
let promedioClase = sumaPromedios / promediosIndividuales.length;

// Encontrar calificación más alta
let calificacionMasAlta = examen1[0]; // Empezar con la primera
for (let i = 0; i < examen1.length; i++) {
    if (examen1[i] > calificacionMasAlta) {
        calificacionMasAlta = examen1[i];
    }
    if (examen2[i] > calificacionMasAlta) {
        calificacionMasAlta = examen2[i];
    }
}

// Encontrar calificación más baja
let calificacionMasBaja = examen1[0]; // Empezar con la primera
for (let i = 0; i < examen1.length; i++) {
    if (examen1[i] < calificacionMasBaja) {
        calificacionMasBaja = examen1[i];
    }
    if (examen2[i] < calificacionMasBaja) {
        calificacionMasBaja = examen2[i];
    }
}

console.log("\nEstadísticas de la clase:");
console.log("Promedio de la clase: " + promedioClase);
console.log("Calificación más alta: " + calificacionMasAlta);
console.log("Calificación más baja: " + calificacionMasBaja);

// Información adicional
console.log("Total de estudiantes: " + estudiantes.length);
console.log("Total de exámenes aplicados: 2");

// ========================================
// ESTADÍSTICAS FINALES Y VERIFICACIÓN
// ========================================

console.log("\n" + "=".repeat(50));
console.log("🎉 TODOS LOS EJERCICIOS COMPLETADOS");
console.log("=".repeat(50));

console.log("\n📊 Conceptos utilizados en las soluciones:");
console.log("✅ Variables (let, const)");
console.log("✅ Tipos de datos (string, number, boolean)");
console.log("✅ Arrays y métodos básicos (push, length)");
console.log("✅ Objetos y propiedades");
console.log("✅ For loops tradicionales");
console.log("✅ Operaciones matemáticas (+, -, *, /)");
console.log("✅ Concatenación de strings");
console.log("✅ Acceso a índices y propiedades");

console.log("\n💡 Nota para el profesor:");
console.log("✅ Estas soluciones usan SOLO conceptos de Clase 5");
console.log("✅ Nivel equilibrado: desafiante pero factible");
console.log("✅ Sin condicionales complejos ni algoritmos avanzados");
console.log("✅ Enfoque en práctica de conceptos fundamentales");

console.log("\n🎯 Resultados de verificación:");
console.log("Ejercicio 1.1 - Promedio calculado: " + promedio);
console.log("Ejercicio 1.2 - Total minutos: " + totalMinutos);
console.log("Ejercicio 1.3 - Productos en catálogo: " + productos.length);
console.log("Ejercicio 1.4 - Longitud de palabra: " + palabra.length);
console.log("Ejercicio 1.5 - Estudiantes procesados: " + estudiantes.length);