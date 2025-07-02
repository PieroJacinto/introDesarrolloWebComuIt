# 📚 CLASE 6 FINAL: Funciones, Lógica y JSON - Estructura Completa

## 🎯 OBJETIVOS FINALES DE LA CLASE 6
- **CONDICIONALES** (if/else, switch, operador ternario)
- **FUNCIONES** (declaración, parámetros, return, arrow functions)
- **LOOPS AVANZADOS** (while, for...of)
- **JSON** (qué es, para qué sirve, stringify, parse)
- **MÉTODOS CON CALLBACKS** (forEach, map, filter)
- **Aplicar todo al proyecto personal**

## ⏰ CRONOGRAMA AJUSTADO (3 horas)

### 🚀 Parte 1: Repaso y Contexto (15 min)
- Revisar tarea de estructuras de datos (Clase 5)
- Introducir problemas: "¿Cómo tomamos decisiones? ¿Cómo evitamos repetir código?"

### 🤔 Parte 2: Condicionales (45 min)
- **If/else básico** (20 min)
- **Operadores de comparación y lógicos** (15 min)
- **Switch y operador ternario** (10 min)

### 🔧 Parte 3: Funciones (45 min)
- **Declaración de funciones** (20 min)
- **Parámetros y return** (15 min)
- **Arrow functions básicas** (10 min)

### 🔄 Parte 4: Loops Avanzados (25 min)
- **While loops** (15 min)
- **For...of loops** (10 min)

### 📄 Parte 5: JSON (35 min)
- **¿Qué es JSON y para qué sirve?** (15 min)
- **JSON.stringify() y JSON.parse()** (20 min)

### 🎯 Parte 6: Métodos Arrays + Callbacks (30 min)
- **forEach, map, filter** (25 min)
- **Integración con funciones** (5 min)

### 📝 Parte 7: Tarea y Cierre (5 min)
- Explicar tarea: Aplicar conceptos al proyecto
- Preview Clase 7: File Operations + DOM

---

## 🗂️ ESTRUCTURA REPOSITORIO COMPARTIDO

```
clases/clase06-funciones-logica-json/
├── README.md                           # Plan para estudiantes
├── slides/
│   └── slides-clase06.html            # Presentación interactiva
├── ejemplos/
│   ├── ejemplo-1-condicionales.html   # If/else, switch, ternario
│   ├── ejemplo-2-funciones.html       # Declaración, parámetros, return
│   ├── ejemplo-3-loops-avanzados.html # While, for...of
│   ├── ejemplo-4-json.html            # JSON básico
│   └── ejemplo-5-callbacks.html       # forEach, map, filter
├── ejercicios/
│   ├── ejercicio-1-condicionales.html # TODOs con if/else
│   ├── ejercicio-2-funciones.html     # TODOs con funciones
│   └── ejercicio-3-integracion.html   # Combinar todos los conceptos
├── tarea-proxima-clase/
│   ├── README.md                      # Instrucciones de tarea
│   ├── checklist.md                   # Lista de verificación
│   └── preparacion-clase7.md         # Qué viene después
└── recursos/
    ├── condicionales-cheatsheet.md    # Referencia if/else/switch
    ├── funciones-guia.md             # Guía completa de funciones
    ├── json-explicacion.md           # Qué es JSON y cómo usarlo
    ├── callbacks-intro.md            # Introducción a callbacks
    └── troubleshooting.md            # Problemas comunes
```

## 🗂️ ESTRUCTURA REPOSITORIO PROFESOR

```
clases/clase06-funciones-logica-json/
├── README.md                          # Plan COMPLETO con timing
├── ejercicios-resueltos/
│   ├── ejercicio-1-solucion.html
│   ├── ejercicio-2-solucion.html
│   └── ejercicio-3-solucion.html
├── notas-profesor/
│   ├── timing-detallado.md           # Tiempos específicos
│   ├── scripts-demos.md              # Qué decir en cada demo
│   ├── troubleshooting-clase.md      # Problemas comunes
│   ├── transicion-callbacks.md       # Cómo explicar callbacks
│   └── evaluacion-checkpoints.md     # Criterios y rúbricas
└── recursos-extras/
    ├── material-avanzado.md          # Para estudiantes rápidos
    ├── ejercicios-adicionales.md     # Práctica extra
    └── preparacion-clase7.md         # Setup para siguiente clase
```

---

## 🎯 PROGRESIÓN ACTUALIZADA DEL CURSO

### **CLASE 5** (Completada):
- Variables, tipos básicos, arrays básicos, objetos básicos
- For loops tradicionales, métodos básicos (push, pop, indexOf)

### **CLASE 6** (Esta clase):
- **Condicionales**: if/else, switch, operador ternario
- **Funciones**: declaración, parámetros, return, arrow functions
- **Loops avanzados**: while, for...of
- **JSON**: qué es, stringify, parse
- **Callbacks**: forEach, map, filter

### **CLASE 7** (Siguiente):
- **File Operations**: readFileSync, writeFileSync, manejo de archivos
- **DOM básico**: querySelector, innerHTML, style
- **Eventos simples**: addEventListener básico

### **CLASE 8** (APIs y Proyectos):
- APIs y fetch, Local Storage, Debugging, Proyecto final

---

## 🎯 FLUJO DE APRENDIZAJE CLASE 6

### **Problema Inicial:**
```javascript
// ❌ Código de Clase 5: repetitivo y sin lógica
let proyectos = ["Portfolio", "Blog", "Tienda"];
for (let i = 0; i < proyectos.length; i++) {
    console.log(proyectos[i]);
}
// No hay validaciones, no hay decisiones, no hay organización
```

### **Solución Final:**
```javascript
// ✅ Código al final de Clase 6: organizado y inteligente
function validarProyecto(proyecto) {
    return proyecto.length > 0 ? "Válido" : "Inválido";
}

function mostrarProyectos(lista) {
    lista.forEach(proyecto => {
        const estado = validarProyecto(proyecto);
        console.log(`${proyecto}: ${estado}`);
    });
}

const proyectosValidos = proyectos.filter(p => validarProyecto(p) === "Válido");
const datosJSON = JSON.stringify({proyectos: proyectosValidos}, null, 2);
console.log("Datos en formato JSON:", datosJSON);
```

---

## 📋 CONCEPTOS CLAVE A CUBRIR

### **1. CONDICIONALES (45 min)**
- If/else simple y múltiple
- Operadores: ===, !==, >, <, >=, <=
- Operadores lógicos: &&, ||, !
- Switch statement
- Operador ternario

### **2. FUNCIONES (45 min)**
- Declaración básica
- Parámetros y argumentos
- Return statement
- Arrow functions
- Scope básico

### **3. LOOPS AVANZADOS (25 min)**
- While loop
- For...of loop
- Cuándo usar cada tipo

### **4. JSON (35 min)**
- ¿Qué es JSON?
- ¿Para qué sirve?
- Diferencia entre objeto JS y JSON
- JSON.stringify()
- JSON.parse()
- Casos de uso prácticos

### **5. CALLBACKS (30 min)**
- ¿Qué es un callback?
- forEach para iteración
- map para transformación
- filter para filtrado

---

## 🚨 LÍMITES DE ESTA CLASE

### **✅ SÍ incluimos:**
- Toda la lógica de programación básica
- JSON como concepto y herramienta
- Callbacks con arrays

### **❌ NO incluimos (para Clase 7):**
- File operations (fs.readFileSync, fs.writeFileSync)
- DOM manipulation
- Eventos del navegador
- APIs externas

---

## 🎯 RESULTADO ESPERADO

**Al final de Clase 6, los estudiantes:**
- Pueden tomar decisiones en código (if/else)
- Organizan código en funciones reutilizables
- Entienden qué es JSON y cómo usarlo
- Usan métodos modernos de arrays (forEach, map, filter)
- Tienen JavaScript completo (sin DOM) para su proyecto
- Están listos para conectar con archivos y DOM en Clase 7

**¡JavaScript completo y funcional antes de tocar el navegador!** 🚀