# 🎭 Scripts de Demos - Clase 5 JavaScript Fundamentos

## 🎯 Guía de Qué Decir Durante Cada Demo

---

## 📦 DEMO 1: Variables y Tipos (`ejemplo1-variables_tipos.html`)

### **🎬 ANTES DE ABRIR EL ARCHIVO:**
> "Vamos a ver nuestro primer código JavaScript en acción. Abran todos la consola con F12 y vayan a la pestaña Console. JavaScript vive en la consola del navegador."

### **🔧 AL ABRIR EL ARCHIVO:**
> "Ahora abro el archivo `ejemplo1-variables_tipos.html`. Vean cómo se conecta JavaScript con HTML usando la etiqueta `<script>`. Todo el código está dentro de estas etiquetas."

### **📝 MIENTRAS ESCRIBES EN CONSOLA:**
```javascript
// Decir mientras escribes:
let nombre = "María";
```
> "Las variables son como cajas con etiquetas. Esta caja se llama 'nombre' y guarda el texto 'María'. Fíjense que uso comillas porque es texto."

```javascript
console.log("El nombre es:", nombre);
```
> "Console.log es como un megáfono que grita información. Ahora veo 'El nombre es: María' en la consola."

```javascript
console.log("Tipo:", typeof nombre);
```
> "typeof me dice qué tipo de dato es. 'string' significa texto. JavaScript tiene tres tipos principales que vamos a usar."

### **🎯 EXPLICAR TIPOS:**
```javascript
const edad = 25;
console.log("La edad es:", edad, "Tipo:", typeof edad);
```
> "Const es como let, pero promete no cambiar. Los números no necesitan comillas. typeof dice 'number'."

```javascript
let esEstudiante = true;
console.log("¿Es estudiante?", esEstudiante, "Tipo:", typeof esEstudiante);
```
> "Boolean solo puede ser true o false. Es perfecto para preguntas de sí o no."

### **✨ TEMPLATE LITERALS:**
```javascript
console.log("Forma antigua: " + nombre + " tiene " + edad + " años");
console.log(`Forma moderna: ${nombre} tiene ${edad} años`);
```
> "Miren la diferencia. Con template literals uso backticks - estas comillas raras - y puedo meter variables con ${variable}. Es mucho más fácil de leer."

### **🎊 CIERRE DEL DEMO:**
> "¡Felicitaciones! Ya escribieron JavaScript. Estas tres cosas - texto, números y verdadero/falso - son los bloques básicos de toda programación."

---

## 📚 DEMO 2: Arrays Básicos (`ejemplo2-arrays_basicos.html`)

### **🎬 INTRODUCCIÓN:**
> "Los arrays son como estanterías organizadas. Imaginen una estantería con cajones numerados. El primer cajón es el número 0, no el 1. Esto es raro al principio, pero todos los lenguajes funcionan así."

### **📝 CREANDO ARRAYS:**
```javascript
let frutas = ["manzana", "banana", "naranja"];
console.log("Array completo:", frutas);
```
> "Creo una lista de frutas. Los corchetes [] significan 'esto es una lista'. Las comas separan cada elemento."

```javascript
console.log("Primera fruta (posición 0):", frutas[0]);
console.log("Segunda fruta (posición 1):", frutas[1]);
```
> "Para acceder uso corchetes con el número. ¡Importante! La primera posición es 0, no 1. Piénsenlo como pisos de edificio: planta baja = 0."

### **📏 PROPIEDADES:**
```javascript
console.log("Cantidad total:", frutas.length);
```
> "length me dice cuántos elementos hay. Es como preguntar '¿cuántos cajones tiene mi estantería?'"

### **➕ MÉTODOS BÁSICOS:**
```javascript
frutas.push("uva");
console.log("Después de agregar uva:", frutas);
```
> "push agrega al final. Es como poner algo en el último cajón disponible."

```javascript
let frutaQuitada = frutas.pop();
console.log("Fruta que quité:", frutaQuitada);
console.log("Array después de quitar:", frutas);
```
> "pop quita del final y me devuelve lo que quitó. Como sacar algo del último cajón."

### **🔍 MÉTODOS DE BÚSQUEDA:**
```javascript
console.log("Posición de 'banana':", frutas.indexOf("banana"));
console.log("¿Incluye 'kiwi'?", frutas.includes("kiwi"));
```
> "indexOf busca dónde está algo. includes pregunta si existe. Son como buscar en nuestra estantería."

### **🎊 CIERRE DEL DEMO:**
> "Los arrays organizan información del mismo tipo. Son perfectos para listas: colores, nombres, números, cualquier cosa."

---

## 🏷️ DEMO 3: Objetos Básicos (`ejemplo3-objetos_basicos.html`)

### **🎬 INTRODUCCIÓN:**
> "Los objetos son como fichas personales. En lugar de posiciones numeradas como los arrays, uso nombres descriptivos para cada dato. Es como tener un formulario completo de una persona."

### **📝 CREANDO OBJETOS:**
```javascript
let persona = {
    nombre: "Carlos",
    edad: 30,
    ciudad: "Buenos Aires",
    esEstudiante: false
};
console.log("Objeto completo:", persona);
```
> "Las llaves {} significan 'esto es un objeto'. Cada línea tiene nombre: valor. Es como llenar un formulario."

### **🔍 ACCEDIENDO A PROPIEDADES:**
```javascript
console.log("Solo el nombre:", persona.nombre);
console.log("Solo la edad:", persona["edad"]);
```
> "Dos formas de acceder: con punto o con corchetes. El punto es más común, los corchetes cuando el nombre es raro o está en una variable."

### **➕ AGREGANDO PROPIEDADES:**
```javascript
persona.profesion = "Desarrollador";
console.log("Con nueva profesión:", persona);
```
> "Puedo agregar nuevas propiedades cuando quiera. Es como agregar campos al formulario."

### **🆚 COMPARACIÓN CON ARRAYS:**
> "Array: para listas del mismo tipo ['rojo', 'verde', 'azul']. Objeto: para datos relacionados {nombre: 'Ana', edad: 25}. ¿Cuándo usar cada uno? Si puedo numerarlo, array. Si necesito describirlo, objeto."

### **🎊 CIERRE DEL DEMO:**
> "Los objetos organizan información compleja. Son perfectos para describir cosas: personas, productos, configuraciones."

---

## 🔄 DEMO 4: For Loop Tradicional (`ejemplo4-for_loop_tradicional.html`)

### **🎬 INTRODUCCIÓN:**
> "El for loop es como un robot que repite acciones. Imaginen que necesito saludar a 100 personas. ¿Voy a escribir console.log 100 veces? ¡No! El for loop lo hace por mí."

### **🔧 ANATOMÍA DEL FOR LOOP:**
```javascript
for (let i = 0; i < 5; i++) {
    console.log("Vuelta número:", i);
}
```
> "Tres partes: dónde empiezo (i = 0), hasta dónde voy (i < 5), cómo avanzo (i++). Es como decir: empieza en 0, mientras sea menor que 5, suma 1 cada vuelta."

### **📊 EXPLICAR CADA PARTE:**
> "Primer parámetro: let i = 0 - empiezo contando desde 0"
> "Segundo parámetro: i < 5 - sigo mientras i sea menor que 5" 
> "Tercer parámetro: i++ - después de cada vuelta, sumo 1 a i"

### **🍎 FOR LOOP CON ARRAYS:**
```javascript
let frutas = ["manzana", "banana", "naranja"];
console.log("=== Mostrando cada fruta ===");
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}
```
> "Ahora uso el for loop para recorrer mi array. En lugar de 5, uso frutas.length. Así funciona con cualquier cantidad de elementos."

### **⚠️ ADVERTENCIA IMPORTANTE:**
```javascript
// NO EJECUTAR ESTO - SOLO MOSTRAR
for (let i = 0; i < 10; i--) {
    console.log(i);
}
```
> "¡CUIDADO! Si pongo i-- en lugar de i++, el loop nunca termina. i-- hace que vaya hacia atrás, nunca llega a 10. Esto cuelga el navegador."

### **🎊 CIERRE DEL DEMO:**
> "El for loop es la base de toda repetición en programación. Una vez que lo dominen, pueden procesar miles de datos automáticamente."

---

## 🛠️ DEMO 5: Métodos Básicos Arrays (`ejemplo5-metodos_basicos_arrays.html`)

### **🎬 INTRODUCCIÓN:**
> "Los arrays tienen métodos incorporados para manipularlos fácilmente. Son como herramientas especiales para trabajar con listas. Hoy vemos los básicos, la próxima clase vemos los avanzados."

### **📝 SETUP:**
```javascript
let tareas = ["estudiar", "ejercicio"];
console.log("Lista inicial:", tareas);
```
> "Empiezo con una lista simple de tareas. Vamos a ver cómo manipularla."

### **➕➖ AGREGAR Y QUITAR:**
```javascript
tareas.push("cocinar");
console.log("Después de push:", tareas);

let ultimaTarea = tareas.pop();
console.log("Tarea que quité:", ultimaTarea);
console.log("Lista actual:", tareas);
```
> "push agrega al final, pop quita del final. Son opuestos. push mete, pop saca."

### **🔍 BÚSQUEDA:**
```javascript
console.log("Posición de 'estudiar':", tareas.indexOf("estudiar"));
console.log("¿Incluye 'limpiar'?", tareas.includes("limpiar"));
```
> "indexOf me dice la posición exacta. includes me dice sí o no, existe o no existe."

### **🔗 UNIR EN STRING:**
```javascript
console.log("Lista como string:", tareas.join(" - "));
console.log("Lista con comas:", tareas.join(", "));
```
> "join convierte la lista en un solo texto. Puedo elegir qué poner entre cada elemento."

### **⚠️ IMPORTANTE - NO CONFUNDIR:**
> "Estos métodos son directos, no necesitan funciones. La próxima clase vemos forEach, map, filter - esos SÍ necesitan funciones. Paso a paso."

### **🎊 CIERRE DEL DEMO:**
> "Con estos métodos básicos ya pueden gestionar listas como profesionales. Son las herramientas esenciales que usan todos los desarrolladores."

---

## 🎯 TIPS GENERALES PARA DEMOS

### **🎪 MANTENER ENERGÍA:**
- **Usar analogías:** "como una estantería", "como un formulario"
- **Hacer preguntas:** "¿Qué creen que va a pasar?"
- **Celebrar éxitos:** "¡Perfecto!" cuando algo funciona

### **⏰ TIMING:**
- **No apresurarse** - mejor explicar bien 3 conceptos que mal 5
- **Verificar comprensión** - "¿Todos ven el resultado en consola?"
- **Repetir conceptos clave** - "Recuerden: arrays empiezan en 0"

### **🚨 MANEJO DE ERRORES:**
- **Si algo falla:** "¡Perfecto! Un error real para aprender"
- **Mostrar debugging:** "Vamos a ver qué dice la consola"
- **Mantener calma:** Los errores son oportunidades de enseñanza

### **👥 INTERACCIÓN:**
- **"Escriban conmigo"** - que sigan en sus consolas
- **"¿Qué ven?"** - verificar que todos siguen
- **"Experimenten"** - cambien valores, prueben cosas

### **🎊 MOTIVACIÓN:**
- **Empezar cada demo:** "Esto va a ser genial"
- **Durante problemas:** "Todos pasamos por esto"
- **Al terminar:** "¡Ya están programando en JavaScript!"

---

## 📝 FRASES CLAVE PARA USAR

### **✅ Frases que Funcionan:**
- "Es como..." (analogías)
- "¿Qué creen que va a pasar?"
- "¡Perfecto! Exactamente eso"
- "Todos escriban conmigo"
- "¿Todos ven lo mismo?"
- "Esto es programación real"

### **❌ Frases que Evitar:**
- "Es obvio que..."
- "Simplemente..."
- "Deberían saber..."
- "Es fácil..."
- "No es complicado..."

---

## 🚀 RECUERDA

**Cada demo debe:**
- ✅ **Explicar el PORQUÉ** antes del cómo
- ✅ **Usar analogías** del mundo real  
- ✅ **Ir paso a paso** sin apresurarse
- ✅ **Verificar comprensión** constantemente
- ✅ **Celebrar los logros** pequeños
- ✅ **Convertir errores** en oportunidades

**¡Los demos son el corazón de la clase! Que se diviertan aprendiendo.** 🎭✨