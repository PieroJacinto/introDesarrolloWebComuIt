# 🎓 Curso Introducción al Desarrollo Web - Guía del Instructor

## 📋 Información Crítica del Curso

### 🎯 Datos Esenciales:
- **Nivel:** Principiantes absolutos (sin experiencia previa)
- **Modalidad:** Virtual (clases online)
- **Duración:** 9 clases de 3 horas cada una
- **Enfoque:** 70% práctica, 30% teoría
- **Objetivo:** Sitio web personal completo y funcional
- **Organización:** Comunidad IT 2025

### 🏆 Meta de Éxito:
**100% de estudiantes completan un proyecto web funcional y lo presentan con confianza**

## 🚨 REGLAS FUNDAMENTALES (CRÍTICAS)

### ❌ CONCEPTOS PROHIBIDOS antes de su clase:

- **Flexbox** antes de Clase 3 (NO display:flex, justify-content, align-items)
- **Media queries** antes de Clase 4 (NO @media, responsive)
- **Hover/transitions** antes de Clase 4 (NO :hover avanzado, transform)
- **JavaScript** antes de Clase 5 (NO variables, funciones, arrays)
- **Funciones** antes de Clase 6 (NO function, arrow functions, callbacks)
- **DOM** antes de Clase 7 (NO querySelector, addEventListener)
- **APIs/Fetch** antes de Clase 8 (NO - no vemos APIs en este curso)

### ✅ PROGRESIÓN JAVASCRIPT CORREGIDA:

#### **Clase 5 - Sin Funciones:**
```javascript
// ✅ Variables y tipos básicos
let nombre = "Juan";
const edad = 25;
let activo = true;

// ✅ Arrays y métodos básicos (sin callbacks)
let frutas = ["manzana", "banana"];
frutas.push("naranja");
let primera = frutas.shift();
let indice = frutas.indexOf("banana");

// ✅ For loop tradicional
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// ❌ NO forEach, map, filter (requieren funciones)
```

#### **Clase 6 - Con Funciones:**
```javascript
// ✅ Entonces sí métodos con callbacks
frutas.forEach(function(fruta) {
    console.log(fruta);
});

let mayusculas = frutas.map(function(fruta) {
    return fruta.toUpperCase();
});
```

**🎯 Razón:** Los estudiantes necesitan entender funciones ANTES de usar callbacks.

## 📂 Estructura del Repositorio Profesor

### 📁 Organización por Clase:

```
repo-profesor/
├── 📄 README.md (este archivo)
├── 📁 clases/
│   ├── 📁 claseXX-tema/
│   │   ├── 📄 README.md                # Plan COMPLETO con timing
│   │   ├── 📁 slides/
│   │   │   └── slides-claseXX.html     # 🌐 Abrir con Live Server
│   │   ├── 📁 ejemplos/
│   │   │   ├── ejemplo-1.html          # 🌐 Abrir con Live Server
│   │   │   ├── ejemplo-2.html          # 🌐 Abrir con Live Server
│   │   │   └── ejemplo-3.html          # 🌐 Abrir con Live Server
│   │   ├── 📁 ejercicios/
│   │   │   ├── ejercicio-1.html        # 🌐 Abrir con Live Server
│   │   │   ├── ejercicio-2.html        # 🌐 Abrir con Live Server
│   │   │   └── ejercicio-3.html        # 🌐 Abrir con Live Server
│   │   ├── 📁 ejercicios-resueltos/    # ⭐ ÚNICA DIFERENCIA
│   │   │   ├── ejercicio-1-solucion.html  # 🌐 Abrir con Live Server
│   │   │   ├── ejercicio-2-solucion.html  # 🌐 Abrir con Live Server
│   │   │   └── ejercicio-3-solucion.html  # 🌐 Abrir con Live Server
│   │   ├── 📁 tarea-proxima-clase/
│   │   └── 📁 recursos/
│   └── ...
└── 📁 estudiantes/                     # Lista de estudiantes del curso
```

### 🔄 Diferencias con Repo Estudiantes:

**⚠️ IMPORTANTE:** Los repositorios son **idénticos** excepto por:
- ✅ **Única diferencia:** Carpeta `ejercicios-resueltos/` con soluciones
- ✅ **Todo lo demás es igual:** slides, ejemplos, ejercicios, recursos
- ✅ **Estudiantes NO tienen acceso** a las soluciones

### 🌐 Cómo Abrir los Archivos HTML

**⚠️ CRÍTICO:** Todos los archivos HTML deben abrirse con servidor local:

#### **Opción 1: Live Server (Recomendado)**
1. Instalar extensión "Live Server" en VS Code
2. Click derecho en archivo HTML → "Open with Live Server"
3. Se abre automáticamente en el navegador
4. **Recarga automática** cuando guardas cambios

#### **Opción 2: Open in Browser**
1. Instalar extensión "Open in Browser" en VS Code
2. Click derecho en archivo HTML → "Open In Default Browser"
3. Se abre directamente en el navegador
4. **Manual reload** cuando cambias código

#### **❌ NO hacer:**
- Doble click en archivo HTML (no funciona igual)
- Arrastrar archivo al navegador (problemas con rutas)
- Abrir directamente sin servidor (CSS/JS pueden fallar)

## 🎯 Metodología de Clase (3 horas)

### ⏰ Timing Estricto:

1. **🔄 Repaso y Contextualización** (15-20 min)
   - Revisar tarea clase anterior
   - Mostrar 2-3 proyectos de estudiantes
   - Contextualizar aprendizaje del día

2. **📖 Teoría + Demos** (40-60 min)
   - Explicación conceptos nuevos
   - DEMOS en vivo con archivos `ejemplos/`
   - Alternar: teoría → demo → teoría → demo

3. **🏃‍♂️ Ejercicios Guiados** (60-80 min)
   - 2-3 ejercicios progresivos
   - Estudiantes completan TODOs
   - Revisar soluciones al final de cada ejercicio

4. **💻 Aplicación al Proyecto Personal** (30-40 min)
   - Aplicar conceptos a SU proyecto
   - Apoyo individual via chat/breakout rooms
   - Trabajo en repo individual

5. **📝 Cierre y Tarea** (10-15 min)
   - Resumen logros del día
   - Explicar tarea próxima clase
   - Motivación y próximos pasos


## 📊 Plan Detallado por Clase

### **🏗️ Clase 1: HTML Básico + Git**
**🎯 Objetivo:** Primera página web + repositorio funcionando

#### ⏰ Timing Detallado:
- **Setup repositorios (30 min):** Clonar repo compartido + crear repo personal
- **HTML básico (90 min):** Estructura, etiquetas, formularios
- **Git workflow (75 min):** Clone, add, commit, push
- **Proyecto personal (15 min):** Elegir tipo, estructurar

#### 🚨 Puntos Críticos:
- **Verificar que TODOS** tengan repositorio personal funcionando
- **NO CSS** - solo HTML puro
- **Contenido real** - no Lorem Ipsum
- **Dos repos diferentes** - material vs proyecto

### **🎨 Clase 2: CSS Básico**
**🎯 Objetivo:** Sitio con diseño atractivo

#### ⏰ Timing Detallado:
- **Repaso (15 min):** Mostrar proyectos HTML
- **CSS básico (75 min):** Colores, tipografías, modelo de caja
- **Ejercicios (75 min):** Aplicar estilos paso a paso
- **Proyecto personal (45 min):** Estilizar su sitio

#### 🚨 Puntos Críticos:
- **NO Flexbox** - solo propiedades básicas
- **Variables CSS** para colores
- **Selectores simples** - no combinadores complejos

### **📐 Clase 3: Flexbox**
**🎯 Objetivo:** Layout profesional y flexible

#### ⏰ Timing Detallado:
- **Repaso (15 min):** Proyectos con CSS
- **Flexbox teoría (45 min):** Conceptos principales
- **Ejercicios (90 min):** Navegación, cards, layout
- **Proyecto personal (30 min):** Aplicar flexbox

#### 🚨 Puntos Críticos:
- **NO media queries** - solo flexbox
- **justify-content, align-items** son lo más importante
- **Navegación horizontal** es el ejemplo clave

### **📱 Clase 4: Responsive + Efectos**
**🎯 Objetivo:** Sitio funcional en todos los dispositivos

#### ⏰ Timing Detallado:
- **Repaso (15 min):** Proyectos con flexbox
- **Media queries (60 min):** Mobile-first, breakpoints
- **Efectos (60 min):** Hover, focus, transiciones
- **Ejercicios (60 min):** Responsive completo
- **Proyecto personal (15 min):** Aplicar responsive

#### 🚨 Puntos Críticos:
- **Mobile-first** es fundamental
- **Testing real** en dispositivos móviles
- **Transiciones suaves** marcan la diferencia

### **💻 Clase 5: JavaScript Fundamentos**
**🎯 Objetivo:** Programación básica SIN funciones

#### ⏰ Timing Detallado:
- **Repaso (20 min):** Proyectos responsive
- **Variables y tipos (45 min):** let, const, string, number, boolean
- **Arrays básicos (45 min):** Creación, acceso, métodos básicos
- **For loops (45 min):** Iteración tradicional
- **Objetos básicos (45 min):** Sintaxis literal, propiedades

#### 🚨 Puntos Críticos:
- **NO funciones** - solo declaración básica
- **NO callbacks** - forEach, map, filter son Clase 6
- **NO DOM** - solo lógica pura
- **For loop tradicional** es la base

### **🔧 Clase 6: Funciones y Lógica**
**🎯 Objetivo:** Programación avanzada con callbacks

#### ⏰ Timing Detallado:
- **Repaso (15 min):** JavaScript básico
- **Funciones (60 min):** Declaración, parámetros, return
- **Callbacks (60 min):** forEach, map, filter
- **Condicionales (45 min):** if/else, switch
- **Aplicación (30 min):** Lógica compleja

#### 🚨 Puntos Críticos:
- **Callbacks son lo más difícil** - tiempo extra
- **Conectar funciones con arrays** es clave
- **NO DOM** - solo lógica pura

### **🎯 Clase 7: DOM y Interactividad**
**🎯 Objetivo:** Conectar JavaScript con HTML

#### ⏰ Timing Detallado:
- **Repaso (15 min):** Funciones y callbacks
- **DOM básico (60 min):** querySelector, innerHTML
- **Eventos (60 min):** addEventListener, tipos
- **Formularios (45 min):** Validación básica
- **Proyecto (30 min):** Aplicar a su sitio

#### 🚨 Puntos Críticos:
- **Primera vez mezclando JS + HTML**
- **DevTools para debugging** es esencial
- **Formularios son lo más práctico**

### **💾 Clase 8: Local Storage + Proyecto**
**🎯 Objetivo:** Persistencia de datos y proyecto final

#### ⏰ Timing Detallado:
- **Repaso (15 min):** DOM y eventos
- **Local Storage (60 min):** Guardar/recuperar datos
- **Debugging (30 min):** DevTools, errores comunes
- **Proyecto final (75 min):** Integrar todo
- **Preparación presentación (15 min):** Subir online

#### 🚨 Puntos Críticos:
- **Local Storage** es más fácil que APIs
- **Tiempo extenso** para completar proyecto
- **Subir a GitHub Pages** para presentación

### **🎊 Clase 9: Presentaciones**
**🎯 Objetivo:** Showcase y motivación para continuar

#### ⏰ Timing Detallado:
- **Presentaciones (150 min):** 10 min por estudiante
- **Feedback (15 min):** Comentarios constructivos
- **Próximos pasos (15 min):** Roadmap futuro

#### 🚨 Puntos Críticos:
- **Celebrar logros** es fundamental
- **Feedback positivo** siempre
- **Motivar para curso 2** (Backend)


## 📞 Contacto y Soporte

- **💬 Discord:** [Servidor de Comunidad IT - proximamente]


**🚀 Comunidad IT 2025 - Formando los desarrolladores del futuro**