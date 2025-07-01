# 🚀 Material Avanzado - Clase 5 JavaScript Fundamentos

## 🎯 Para Estudiantes que Terminan Rápido

### ⚠️ **REGLAS ESTRICTAS - SOLO CONCEPTOS DE CLASE 5:**
- ✅ **SÍ usar:** variables, arrays, objetos, for loops, métodos básicos, template literals
- ❌ **NO usar:** if/else, funciones, forEach/map/filter, while, switch, DOM
- 🎯 **Objetivo:** Practicar más con lo que YA sabemos

---

## 🧩 EJERCICIOS BONUS (Nivel Moderado)

### **📚 Ejercicio Bonus 1: Biblioteca Simple**

```javascript
// 📖 Sistema básico de biblioteca
// Solo usar: arrays, objetos, for loops, template literals

// 1. Crear datos
let libros = [
    {titulo: "JavaScript Básico", autor: "Ana García", año: 2020, paginas: 300},
    {titulo: "HTML y CSS", autor: "Luis Pérez", año: 2019, paginas: 250},
    {titulo: "Programación Web", autor: "María López", año: 2021, paginas: 400},
    {titulo: "Desarrollo Frontend", autor: "Carlos Ruiz", año: 2018, paginas: 350}
];

// 2. TODO: Mostrar todos los libros con formato elegante
// Usar template literals: "Libro 1: [titulo] por [autor] ([año]) - [paginas] páginas"

// 3. TODO: Calcular estadísticas básicas
// - Total de libros
// - Total de páginas de todos los libros
// - Año promedio de publicación
// - Páginas promedio por libro

// 4. TODO: Agregar 2 libros nuevos usando push()

// 5. TODO: Crear un objeto "estadisticas" con todos los números calculados
```

**🎯 Solo usar:** for loops, operaciones matemáticas, template literals, push()

---

### **🛍️ Ejercicio Bonus 2: Tienda de Productos**

```javascript
// 🏪 Inventario de productos
// Solo conceptos de Clase 5

// 1. Datos iniciales
let productos = [
    {nombre: "Camiseta", precio: 25.99, categoria: "Ropa", stock: 15},
    {nombre: "Pantalón", precio: 45.50, categoria: "Ropa", stock: 8},
    {nombre: "Libro", precio: 12.99, categoria: "Educación", stock: 20},
    {nombre: "Cuaderno", precio: 3.50, categoria: "Educación", stock: 50},
    {nombre: "Auriculares", precio: 89.99, categoria: "Tecnología", stock: 5}
];

// 2. TODO: Mostrar catálogo completo
// Formato: "Producto 1: [nombre] - $[precio] ([categoria]) - Stock: [stock]"

// 3. TODO: Calcular valor total del inventario
// precio * stock para cada producto, sumar todo

// 4. TODO: Contar productos por categoría (usando for loops)
// Crear variables: contadorRopa, contadorEducacion, contadorTecnologia

// 5. TODO: Encontrar producto más caro y más barato
// Usar for loop para recorrer y comparar precios

// 6. TODO: Simular ventas (restar del stock)
// Vender: 5 camisetas, 3 libros, 2 auriculares
```

**🎯 Solo usar:** for loops, variables para contadores, operaciones básicas

---

### **📊 Ejercicio Bonus 3: Análisis de Calificaciones**

```javascript
// 🎓 Sistema de notas de estudiantes
// Solo arrays, objetos, for loops, matemáticas básicas

// 1. Base de datos
let estudiantes = [
    {nombre: "Ana", notas: [85, 92, 78, 90]},
    {nombre: "Luis", notas: [76, 88, 85, 82]},
    {nombre: "María", notas: [92, 89, 94, 91]},
    {nombre: "Carlos", notas: [80, 75, 88, 85]},
    {nombre: "Sofia", notas: [95, 92, 89, 93]}
];

// 2. TODO: Calcular promedio de cada estudiante
// Usar for loop dentro de otro for loop

// 3. TODO: Mostrar reporte individual
// "[nombre]: Notas [nota1, nota2, nota3, nota4] - Promedio: [promedio]"

// 4. TODO: Calcular estadísticas de la clase
// - Promedio general de toda la clase
// - Total de exámenes aplicados
// - Suma de todas las notas

// 5. TODO: Crear ranking simple
// Mostrar estudiantes con sus promedios, ordenados manualmente
```

**🎯 Solo usar:** for loops anidados, operaciones matemáticas, template literals

---

## 🎨 EJERCICIOS CREATIVOS (Más Simples)

### **🌈 Proyecto 1: Generador de Patrones**

```javascript
// 🎨 Crear patrones visuales con texto
// Solo for loops y template literals

// 1. TODO: Crear pirámide de asteriscos
// *
// **
// ***
// ****
// *****

// 2. TODO: Crear tabla de multiplicar del 5
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// etc.

// 3. TODO: Crear patrón de números
// 1 2 3 4 5
// 2 3 4 5 6
// 3 4 5 6 7
// 4 5 6 7 8
// 5 6 7 8 9

// 4. TODO: Crear calendario simple (solo números)
// Mostrar días del 1 al 30 en filas de 7
```

**🎯 Solo usar:** for loops, concatenación, template literals, operaciones básicas

---

### **📈 Proyecto 2: Simulador de Datos Simple**

```javascript
// 📊 Generar y procesar datos usando patrones matemáticos
// Sin Math.random() - usar fórmulas predecibles

// 1. TODO: Generar "temperaturas" de 30 días
let temperaturas = [];
// Usar fórmula: temp = 20 + (día * 0.5) + (día % 3)
// día 1: 20 + 0.5 + 1 = 21.5
// día 2: 20 + 1.0 + 2 = 23.0
// etc.

// 2. TODO: Procesar los datos
// - Temperatura máxima
// - Temperatura mínima  
// - Temperatura promedio
// - Contar días "calurosos" (>25°C) y "frescos" (<22°C)

// 3. TODO: Crear reporte meteorológico
// "Reporte de 30 días: Máx [X]°C, Mín [Y]°C, Promedio [Z]°C"
```

**🎯 Solo usar:** for loops, operaciones matemáticas, push(), comparaciones simples con operador ternario

---

### **🎵 Proyecto 3: Lista de Reproducción**

```javascript
// 🎧 Organizar canciones
// Solo arrays, objetos, for loops

// 1. Datos de canciones
let playlist = [
    {titulo: "Bohemian Rhapsody", artista: "Queen", duracion: 355}, // en segundos
    {titulo: "Hotel California", artista: "Eagles", duracion: 391},
    {titulo: "Imagine", artista: "John Lennon", duracion: 183},
    {titulo: "Billie Jean", artista: "Michael Jackson", duracion: 294},
    {titulo: "Sweet Child O Mine", artista: "Guns N Roses", duracion: 356}
];

// 2. TODO: Mostrar playlist completa
// "Canción 1: [titulo] - [artista] ([minutos]:[segundos])"
// Convertir segundos a formato mm:ss

// 3. TODO: Calcular duración total de la playlist
// En segundos y luego convertir a minutos:segundos

// 4. TODO: Agregar 3 canciones nuevas usando push()

// 5. TODO: Crear estadísticas
// - Número total de canciones
// - Duración promedio por canción
// - Canción más larga y más corta (usando for loop)
```

**🎯 Solo usar:** for loops, operaciones matemáticas para conversión de tiempo, template literals

---

## 🧮 DESAFÍOS MATEMÁTICOS

### **🔢 Desafío 1: Calculadora de Series**

```javascript
// 🧮 Cálculos matemáticos usando for loops
// Solo operaciones básicas

// 1. TODO: Calcular factorial de 5 (5! = 5×4×3×2×1)
let numero = 5;
let factorial = 1;
// Usar for loop para multiplicar

// 2. TODO: Calcular suma de números del 1 al 100
let suma = 0;
// Usar for loop para sumar

// 3. TODO: Generar tabla de potencias de 2
// 2^1 = 2, 2^2 = 4, 2^3 = 8, etc.
// Hasta 2^10

// 4. TODO: Calcular promedio de números pares del 1 al 20
// Primero generar los pares, luego calcular promedio
```

### **📐 Desafío 2: Patrones Numéricos**

```javascript
// 🔢 Crear secuencias matemáticas
// Solo for loops y operaciones básicas

// 1. TODO: Secuencia de Fibonacci (primeros 10 números)
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
let fibonacci = [1, 1];
// Usar for loop: siguiente = anterior + anteanterior

// 2. TODO: Números triangulares (primeros 8)
// 1, 3, 6, 10, 15, 21, 28, 36
// Cada número es la suma de todos los naturales hasta n

// 3. TODO: Tabla de multiplicar completa (del 1 al 5)
// Mostrar formato: "3 x 4 = 12"

// 4. TODO: Crear pirámide numérica
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
```

**🎯 Solo usar:** for loops, arrays, operaciones básicas, push()

---

## 🎯 MINI PROYECTOS REALISTAS

### **💰 Proyecto: Calculadora de Gastos**

```javascript
// 💳 Análisis de gastos mensuales
// Solo arrays, objetos, for loops, matemáticas

let gastos = [
    {categoria: "Comida", monto: 250.00, dia: 5},
    {categoria: "Transporte", monto: 45.50, dia: 8},
    {categoria: "Comida", monto: 180.75, dia: 12},
    {categoria: "Entretenimiento", monto: 89.99, dia: 15},
    {categoria: "Transporte", monto: 52.00, dia: 18},
    {categoria: "Ropa", monto: 120.00, dia: 22},
    {categoria: "Comida", monto: 95.50, dia: 25}
];

// TODO: Calcular total gastado
// TODO: Calcular gasto promedio por transacción
// TODO: Contar gastos por categoría (usar contadores)
// TODO: Encontrar el gasto más alto y más bajo
// TODO: Crear reporte de gastos por categoría
```

### **📚 Proyecto: Organizador de Tareas**

```javascript
// ✅ Sistema de tareas con prioridades
// Solo conceptos de Clase 5

let tareas = [
    {descripcion: "Estudiar JavaScript", prioridad: 3, horas: 2},
    {descripcion: "Hacer ejercicio", prioridad: 2, horas: 1},
    {descripcion: "Llamar al médico", prioridad: 3, horas: 0.5},
    {descripcion: "Ver película", prioridad: 1, horas: 2},
    {descripcion: "Limpiar casa", prioridad: 2, horas: 3}
];

// TODO: Mostrar todas las tareas con formato
// TODO: Calcular tiempo total necesario
// TODO: Contar tareas por prioridad (1=baja, 2=media, 3=alta)
// TODO: Agregar 3 tareas nuevas
// TODO: Crear reporte de tiempo por prioridad
```

---

## 🎪 EJERCICIOS DE PRÁCTICA EXTRA

### **🔤 Procesamiento de Texto Básico**

```javascript
// 📝 Análisis simple de texto
// Solo for loops, charAt(), length

let frase = "JavaScript es genial para programar";

// TODO: Contar cada vocal (a, e, i, o, u)
let contadorA = 0, contadorE = 0, contadorI = 0, contadorO = 0, contadorU = 0;
// Usar for loop y charAt()

// TODO: Contar espacios en blanco
// TODO: Mostrar cada palabra en línea separada (separar por espacios)
// TODO: Contar letras totales (sin contar espacios)
```

### **📊 Estadísticas Simples**

```javascript
// 📈 Análisis de un conjunto de números
// Solo for loops y operaciones básicas

let numeros = [23, 45, 12, 67, 34, 89, 56, 78, 45, 23, 67, 12];

// TODO: Encontrar el número mayor
// TODO: Encontrar el número menor
// TODO: Calcular la suma total
// TODO: Calcular el promedio
// TODO: Contar cuántas veces aparece cada número
// TODO: Mostrar estadísticas completas
```

---

## 💡 TIPS PARA EL PROFESOR

### **🎯 Cómo Usar Este Material:**
- ✅ **Solo para estudiantes rápidos** que terminan ejercicios regulares
- ✅ **Opcional y voluntario** - no presionar a nadie
- ✅ **Celebrar el esfuerzo** más que la perfección
- ✅ **Usar como ejemplos** para toda la clase si es apropiado

### **🚨 Verificación de Conceptos:**
- ✅ **Todos los ejercicios** usan solo for loops, arrays, objetos, variables
- ✅ **No hay if/else** ni condicionales complejos
- ✅ **No hay funciones** ni métodos avanzados
- ✅ **Solo operador ternario** básico para comparaciones simples
- ✅ **Preparación natural** para conceptos de Clase 6

### **🎊 Objetivo Pedagógico:**
- 🎯 **Reforzar** conceptos de Clase 5 con práctica extra
- 🎯 **Mantener motivación** de estudiantes avanzados
- 🎯 **Desarrollar lógica** de programación básica
- 🎯 **Ver patrones repetitivos** que se resolverán con funciones en Clase 6

---

## 🚀 RECUERDA

**Estos ejercicios son para:**
- 🔥 **Estudiantes que terminan rápido** y quieren más desafío
- 🏠 **Tarea extra opcional** para casa
- 🤝 **Trabajo colaborativo** entre estudiantes avanzados
- 🎯 **Práctica adicional** de conceptos básicos

**¡El objetivo es diversión y práctica, no frustración!** 🎪✨ con experiencia previa

### **¿Cómo evaluarlos?**
- 🎊 **Celebrar el intento** más que la perfección
- 🤝 **Fomentar colaboración** entre estudiantes avanzados
- 💡 **Usar como ejemplos** para toda la clase
- 🔄 **Conectar con Clase 6** ("¿Ven cómo esto sería más fácil con funciones?")

---

## 🚀 RECUERDA

**Para el Profesor:**
- ✅ Estos ejercicios son **opcionales** y **bonus**
- ✅ No presionar a estudiantes lentos para hacerlos
- ✅ Usar como **diferenciación** natural del aprendizaje
- ✅ **Conectar con conceptos** de Clase 6 cuando sea apropiado

**Para los Estudiantes:**
- 🎯 **Experimenten** y no tengan miedo de fallar
- 🤝 **Colaboren** y aprendan entre ustedes
- 🎊 **Celebren** cada pequeño logro
- 🔮 **Piensen** en cómo estos problemas podrían resolverse más fácilmente

**¡El objetivo es mantener el desafío y la diversión en el aprendizaje!** 🎪✨