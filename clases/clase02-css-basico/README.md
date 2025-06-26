**Formas de agregar CSS:**
1. **Archivo externo (RECOMENDADO):**
```html
<link rel="stylesheet" href="css/styles.css">
```

2. **Interno (solo para demos):**
```html
<style>
    h1 { color: blue; }
</style>
```

3. **Inline (EVITAR):**
```html
<h1 style="color: blue;">Título</h1>
```

**Selectores básicos:**
```css
/* Elemento */
h1 { color: blue; }

/* Clase */
.mi-clase { color: red; }

/* ID */
#mi-id { color: green; }

/* Descendiente */
nav a { color: white; }
```

### Colores y Tipografías (25 min)

**Demo progresiva:** Transformar página básica en algo atractivo

#### Colores
```css
/* Diferentes formas de definir colores */
.elemento {
    color: red;                    /* Nombre */
    color: #3498db;               /* Hexadecimal */
    color: rgb(52, 152, 219);     /* RGB */
    color: rgba(52, 152, 219, 0.5); /* RGB con transparencia */
}

/* Colores de fondo */
body {
    background-color: #f8f9fa;
}

header {
    background-color: #2c3e50;
    color: white;
}
```

**Paletas recomendadas:**
- **Profesional:** #2c3e50, #3498db, #ecf0f1
- **Moderna:** #667eea, #764ba2, #f093fb
- **Minimalista:** #333333, #666666, #f5f5f5

**Formas de agregar CSS:**
1. **Archivo externo (RECOMENDADO):**
```html
<link rel="stylesheet" href="css/styles.css">
```

2. **Interno (solo para demos):**
```html
<style>
    h1 { color: blue; }
</style>
```

3. **Inline (EVITAR):**
```html
<h1 style="color: blue;">Título</h1>
```

**Selectores básicos:**
```css
/* Elemento */
h1 { color: blue; }

/* Clase */
.mi-clase { color: red; }

/* ID */
#mi-id { color: green; }

/* Descendiente */
nav a { color: white; }
```

### Colores y Tipografías (25 min)

**Demo progresiva:** Transformar página básica en algo atractivo usando `ejemplos/colores-tipografia.html`

#### Colores
```css
/* Diferentes formas de definir colores */
.elemento {
    color: red;                    /* Nombre */
    color: #3498db;               /* Hexadecimal */
    color: rgb(52, 152, 219);     /* RGB */
    color: rgba(52, 152, 219, 0.5); /* RGB con transparencia */
}

/* Colores de fondo */
body {
    background-color: #f8f9fa;
}

header {
    background-color: #2c3e50;
    color: white;
}
```

**Paletas recomendadas (mostrar en vivo):**
- **Profesional:** #2c3e50, #3498db, #ecf0f1
- **Moderna:** #667eea, #764ba2, #f093fb
- **Minimalista:** #333333, #666666, #f5f5f5

#### Tipografías
```css
/* Familias de fuentes */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;          /* Mínimo legible */
    line-height: 1.5;         /* Espaciado entre líneas */
}

h1 {
    font-size: 2rem;          /* 32px */
    font-weight: bold;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.5rem;        /* 24px */
    font-weight: 600;
    margin-bottom: 0.75rem;
}
```

**Reglas importantes:**
- Mínimo 16px para texto normal
- Line-height entre 1.4-1.6
- Máximo 2-3 fuentes diferentes
- Contrastar con fondo

**Actividad:** Que apliquen colores y fuentes mientras explicas.

### Modelo de Caja (25 min)

**Demo fundamental:** `ejemplos/modelo-caja.html`

#### Box-sizing: border-box (SIEMPRE)
```css
/* PRIMER CSS que escriben siempre */
* {
    box-sizing: border-box;
}
```

#### Anatomía del modelo de caja
```css
.elemento {
    width: 200px;
    height: 100px;
    padding: 20px;       /* Espacio interno */
    border: 2px solid black;
    margin: 10px;        /* Espacio externo */
}
```

**Mostrar en DevTools:** Cómo Chrome visualiza el modelo de caja.

#### Padding vs Margin
```css
/* Padding - espacio DENTRO del elemento */
.card {
    padding: 1rem;           /* Todos los lados */
    padding: 1rem 2rem;      /* Vertical | Horizontal */
    padding: 1rem 2rem 1.5rem 0.5rem; /* Top | Right | Bottom | Left */
}

/* Margin - espacio FUERA del elemento */
.card {
    margin: 2rem 0;          /* Arriba y abajo */
    margin-bottom: 1rem;     /* Solo abajo */
}
```

#### Display básico
```css
/* Elementos en línea */
span {
    display: inline;    /* No acepta width/height */
}

/* Elementos en bloque */
div {
    display: block;     /* Toma todo el ancho */
}

/* Inline-block (útil para navegación) */
nav a {
    display: inline-block;  /* En línea pero acepta width/height */
    padding: 0.5rem 1rem;
}
```

**Actividad:** Que experimenten con padding y margin en sus proyectos.

### Layout Básico (20 min)

**Demo:** `ejemplos/primer-diseño.html`

#### Centrar contenido
```css
/* Centrar horizontal */
.contenedor {
    max-width: 800px;
    margin: 0 auto;         /* Centrado horizontal */
    padding: 0 2rem;       /* Espaciado lateral */
}

/* Centrar texto */
.texto-centrado {
    text-align: center;
}
```

#### Layout básico de página
```css
body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    line-height: 1.6;
    color: #333;
}

header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

footer {
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 2rem 0;
}
```

#### Navegación básica
```css
nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
```

**NO mencionar Flexbox todavía** - es para la próxima clase.

---

## 🛠️ Aplicación Práctica (75 min)

### Estilizar Navegación (25 min)

**Que todos trabajen en su proyecto personal:**

1. **Crear archivo CSS:**
```bash
# En su repositorio personal
touch css/styles.css
```

2. **Vincular CSS en todas las páginas:**
```html
<link rel="stylesheet" href="css/styles.css">
```

3. **CSS básico para navegación:**
```css
/* Reset básico */
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* Header y navegación */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
}
```

**Circular y ayudar** mientras aplican esto a sus proyectos.

### Diseño de Formularios (25 min)

**Continuar en sus proyectos:**

```css
/* Formularios */
form {
    max-width: 500px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: #f8f9fa;
    border-radius: 8px;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
}

input,
textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    background-color: #3498db;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
}

button:hover {
    background-color: #2980b9;
}
```

### Layout General de Página (25 min)

**Completar el diseño general:**

```css
/* Layout principal */
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

/* Secciones */
section {
    margin-bottom: 3rem;
}

h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #2c3e50;
}

h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #3498db;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    color: #2c3e50;
}

p {
    margin-bottom: 1rem;
}

/* Footer */
footer {
    background-color: #34495e;
    color: white;
    text-align: center;
    padding: 2rem 0;
    margin-top: 3rem;
}
```

**Resultado esperado:** Que cada estudiante tenga su sitio con CSS básico aplicado.

---

## 🎯 Proyecto Personal (15 min)

### Aplicar CSS a Su Proyecto

**Verificar que cada estudiante tenga:**
- [ ] CSS vinculado en todas las páginas
- [ ] Navegación estilizada
- [ ] Formulario con diseño
- [ ] Layout general coherente
- [ ] Colores consistentes

### Commit y Push

```bash
# En su repositorio personal
git add .
git commit -m "Agregar CSS básico y diseño"
git push
```

---

## 📝 Tarea para Casa

### 🎯 Objetivo Principal:
Completar el diseño visual de su proyecto personal aplicando CSS a todas las páginas.

### Entregable para Clase 3:
1. **CSS completo** aplicado a las 4 páginas
2. **Navegación estilizada** y consistente
3. **Formularios con diseño** profesional
4. **Colores y tipografía** coherentes en todo el sitio
5. **Layout limpio** y organizado
6. **Código CSS** bien estructurado y comentado

### Checklist Específico:
- [ ] Archivo `css/styles.css` creado y vinculado
- [ ] Header y navegación con colores y espaciado
- [ ] Formulario de contacto estilizado
- [ ] Tipografía consistente (tamaños, espaciado)
- [ ] Paleta de colores aplicada en todo el sitio
- [ ] Márgenes y padding para espaciado apropiado
- [ ] Al menos 3 commits relacionados con CSS
- [ ] README.md actualizado con progreso

---

## 🎯 Criterios de Evaluación Clase 2

| Criterio | Excelente (4) | Bueno (3) | Suficiente (2) | Insuficiente (1) |
|----------|---------------|-----------|----------------|------------------|
| **CSS Básico** | CSS avanzado y bien estructurado | CSS sólido y funcional | CSS básico correcto | CSS problemático |
| **Colores** | Paleta coherente y profesional | Buenos colores consistentes | Colores básicos | Sin coherencia |
| **Tipografía** | Jerarquía clara, legible | Buena tipografía | Tipografía básica | Difícil de leer |
| **Layout** | Layout limpio y organizado | Buen layout general | Layout básico | Desorganizado |
| **Navegación** | Nav profesional y atractiva | Nav bien estilizada | Nav básica | Nav sin estilo |
| **Formularios** | Forms perfectamente diseñados | Forms bien estilizados | Forms básicos | Forms sin estilo |

---

## 🔧 Recursos para el Profesor

### Timing Recomendado:
- **Enfatizar modelo de caja** - es lo más difícil de entender
- **Mostrar DevTools** constantemente para que vean el box model
- **Circular durante práctica** - CSS es donde más se atascan
- **Verificar que todos vinculen CSS** antes de continuar

### Errores Comunes a Prevenir:
- No vincular el archivo CSS correctamente
- Confundir padding con margin
- Usar inline styles en lugar de archivo externo
- No usar box-sizing: border-box
- Colores que no contrastan (text difícil de leer)

### Demostraciones Clave:
- **DevTools:** Mostrar el box model visual
- **Cambios en vivo:** Modificar CSS y mostrar resultado inmediato
- **Paletas de colores:** Usar herramientas como coolors.co
- **Fuentes web:** Mostrar diferencia entre fuentes

### Momentos de Práctica:
- Que todos apliquen colores mientras explicas
- Experimenten con padding/margin en DevTools
- Cambien tamaños de fuente y vean diferencia
- Apliquen CSS a su navegación paso a paso

---

## 🚀 Preparación para Clase 3

**Los estudiantes deben llegar con:**
- Su proyecto completamente estilizado con CSS
- Navegación y formularios con diseño
- Comprensión del modelo de caja
- Colores y tipografía consistentes

**En la Clase 3 veremos:**
- Flexbox para layouts modernos
- Organización de elementos en filas y columnas
- Navegación profesional con Flexbox
- Cards y grillas flexibles

¡El proyecto va tomando forma profesional! 🎨# 📚 CLASE 2: CSS Básico y Diseño Visual - Plan del Profesor

## 🎯 Objetivos de la Clase
- Aplicar CSS básico para transformar visualmente los proyectos HTML
- Introducir UX básico y principios de diseño visual
- Enseñar modelo de caja, colores, tipografías y espaciado
- **CRÍTICO:** Que apliquen TODO a su proyecto personal durante la clase

## ⏰ Cronograma (3 horas)

### 🔍 Parte 1: Repaso y UX Básico (30 min)
- **Revisión de tareas HTML** (15 min)
- **UX básico para desarrolladores** (15 min)

### 🎨 Parte 2: CSS Fundamentals (90 min)
- **Introducción a CSS y sintaxis** (20 min)
- **Colores y tipografías** (25 min)
- **Modelo de caja (box model)** (25 min)
- **Layout básico** (20 min)

### 🛠️ Parte 3: Aplicación Práctica (75 min)
- **Estilizar navegación** (25 min)
- **Diseño de formularios** (25 min)
- **Layout general de página** (25 min)

### 🎯 Parte 4: Proyecto Personal (15 min)
- **Aplicar CSS a su proyecto**
- **Tarea para Clase 3**

---

## 🔍 Repaso y UX Básico (30 min)

### Revisión de Tareas (15 min)

**Verificar que TODOS tengan:**
- [ ] 4 páginas HTML funcionando
- [ ] Navegación entre páginas
- [ ] Repositorio personal en GitHub
- [ ] Contenido real (no Lorem Ipsum)

**Mostrar 2-3 proyectos de estudiantes** para celebrar progreso y dar feedback constructivo.

**Problemas comunes:**
- Enlaces rotos entre páginas
- Falta de estructura semántica
- Formularios mal estructurados
- Problemas con Git/GitHub

### UX Básico para Desarrolladores (15 min)

**¿Por qué importa el diseño?**
- Primera impresión en 50 milisegundos
- Credibilidad profesional
- Usabilidad del sitio

**Principios básicos:**
1. **Jerarquía visual:** ¿Qué es lo más importante?
2. **Consistencia:** Mismos colores, fuentes, espaciado
3. **Legibilidad:** Texto fácil de leer
4. **Espaciado:** Respiro visual entre elementos
5. **Simplicidad:** Menos es más

**Ejercicio rápido:** Analizar 2 sitios web (uno bueno, uno malo) y identificar diferencias.

---

## 🎨 CSS Fundamentals (90 min)

### Introducción a CSS (20 min)

**¿Qué es CSS?**
- Cascade Style Sheets
- Separación de contenido (HTML) y presentación (CSS)
- Selector + Propiedades + Valores

**Demo básica:** `ejemplos/colores-tipografia.html`

```css
/* Sintaxis básica */
selector {
    propiedad: valor;
    otra-propiedad: otro-valor;
}

/* Ejemplo real */
h1 {
    color: blue;
    font-size: 2rem;
}
```

**Formas de agregar CSS:**
1. **Archivo externo