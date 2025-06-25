# 📚 CLASE 2: CSS Básico y Diseño Visual

## 🎯 Objetivos de la Clase
- Aplicar CSS básico para dar estilo al proyecto
- Comprender selectores, colores y tipografías
- Implementar el modelo de caja
- Transformar HTML básico en diseño atractivo

## ⏰ Cronograma (3 horas)

### 🔍 Parte 1: Repaso y UX (30 min)
- **Revisión de tareas HTML** (15 min)
- **Discusión UX: sitios analizados y colores elegidos** (15 min)

### 🎨 Parte 2: CSS Fundamentos (90 min)
- **¿Qué es CSS y cómo incluirlo?** (20 min)
- **Selectores básicos** (25 min)
- **Colores y tipografías** (25 min)
- **Modelo de caja** (20 min)

### 🛠️ Parte 3: Aplicación Práctica (75 min)
- **Crear archivo CSS** (15 min)
- **Estilizar header y navegación** (30 min)
- **Estilizar contenido principal** (30 min)

### 🎯 Parte 4: Cierre (15 min)
- **Commit cambios**
- **Tarea para Clase 3**
- **Preview Flexbox**

---

## 🔍 Repaso y Discusión UX (30 min)

### Revisión de HTML (15 min)
**Preguntas para hacer:**
- ¿Todos terminaron las 4 páginas?
- ¿Algún problema con Git?
- ¿Enlaces funcionando entre páginas?
- ¿Formulario completo?

### Discusión UX (15 min)
**Preguntas para la clase:**
- ¿Quién leyó la guía de UX?
- ¿Qué 3 sitios analizaron?
- ¿Qué les gustó del diseño de esos sitios?
- ¿Qué 3 colores eligieron para su proyecto?
- ¿Cuál es la acción principal que quieren que hagan los usuarios?

**Objetivo:** Que compartan y se inspiren entre ellos.

---

## 🎨 CSS Fundamentos (90 min)

### ¿Qué es CSS? (20 min)

**CSS = Cascading Style Sheets**
- HTML = Estructura (el esqueleto)
- CSS = Presentación (la piel y ropa)
- JavaScript = Comportamiento (los músculos)

#### Formas de incluir CSS:
```html
<!-- 1. CSS Externo (RECOMENDADO) -->
<link rel="stylesheet" href="css/styles.css">

<!-- 2. CSS Interno (para pruebas rápidas) -->
<style>
    body { font-family: Arial; }
</style>

<!-- 3. CSS Inline (EVITAR) -->
<p style="color: red;">Texto rojo</p>
```

#### Sintaxis CSS:
```css
selector {
    propiedad: valor;
    otra-propiedad: otro-valor;
}
```

### Selectores Básicos (25 min)

#### Selectores Principales:
```css
/* Selector de elemento */
h1 {
    color: blue;
}

/* Selector de clase */
.titulo-principal {
    font-size: 2rem;
}

/* Selector de ID */
#header {
    background-color: #f0f0f0;
}

/* Selector descendiente */
nav ul {
    list-style: none;
}

/* Selector múltiple */
h1, h2, h3 {
    color: #333;
}
```

#### Especificidad (concepto simple):
- **ID** (#) = Más específico
- **Clase** (.) = Medio específico  
- **Elemento** (h1) = Menos específico

**Regla:** Más específico gana.

### Colores y Tipografías (25 min)

#### Formas de definir colores:
```css
.elemento {
    /* Nombres de colores */
    color: red;
    color: blue;
    
    /* Hexadecimal (MÁS COMÚN) */
    color: #ff0000;  /* rojo */
    color: #0066cc;  /* azul */
    color: #333333;  /* gris oscuro */
    
    /* RGB */
    color: rgb(255, 0, 0);  /* rojo */
    
    /* Transparencia */
    color: rgba(255, 0, 0, 0.5);  /* rojo 50% transparente */
}
```

#### Tipografías:
```css
body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
}

h1 {
    font-family: 'Georgia', serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
}

.destacado {
    font-style: italic;
    text-decoration: underline;
    text-transform: uppercase;
}
```

#### Google Fonts (bonus):
```html
<!-- En el HTML head -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

```css
body {
    font-family: 'Roboto', sans-serif;
}
```

### Modelo de Caja (20 min)

**Todo elemento HTML es una caja:**

```css
.mi-caja {
    /* Contenido */
    width: 300px;
    height: 200px;
    
    /* Padding (espacio interno) */
    padding: 20px;
    
    /* Border (borde) */
    border: 2px solid #333;
    
    /* Margin (espacio externo) */
    margin: 20px;
    
    /* Box-sizing (IMPORTANTE) */
    box-sizing: border-box;
}
```

#### Visualización del modelo:
```
┌─────────── margin ───────────┐
│ ┌───────── border ─────────┐ │
│ │ ┌─── padding ───┐       │ │
│ │ │               │       │ │
│ │ │   contenido   │       │ │
│ │ │               │       │ │
│ │ └───────────────┘       │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

**¡Siempre usar `box-sizing: border-box`!**

---

## 🛠️ Aplicación Práctica (75 min)

### Crear archivo CSS (15 min)

#### Estructura de archivos:
```
mi-proyecto/
├── index.html
├── sobre-mi.html
├── proyectos.html
├── contacto.html
├── css/
│   └── styles.css  ← NUEVO
└── images/
```

#### Vincular CSS en todas las páginas HTML:
```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Sitio</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
```

#### Estructura base del CSS:
```css
/* ===== RESET Y BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
}

/* ===== HEADER ===== */

/* ===== MAIN CONTENT ===== */

/* ===== FOOTER ===== */
```

### Estilizar Header y Navegación (30 min)

```css
/* ===== HEADER ===== */
header {
    background-color: #2c3e50;  /* Azul oscuro */
    color: white;
    padding: 1rem 0;
}

h1 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
}

/* ===== NAVEGACIÓN ===== */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

nav a.active {
    background-color: #3498db;
}
```

**Nota:** Explicar `display: flex` muy básicamente, profundizar en Clase 3.

### Estilizar Contenido Principal (30 min)

```css
/* ===== MAIN CONTENT ===== */
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

h2 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    border-bottom: 2px solid #3498db;
    padding-bottom: 0.5rem;
}

h3 {
    font-size: 1.5rem;
    color: #34495e;
    margin-bottom: 0.5rem;
}

p {
    margin-bottom: 1rem;
    text-align: justify;
}

ul {
    margin-bottom: 1rem;
    padding-left: 2rem;
}

li {
    margin-bottom: 0.5rem;
}

/* ===== ENLACES ===== */
a {
    color: #3498db;
    text-decoration: underline;
}

a:hover {
    color: #2980b9;
}

/* ===== IMÁGENES ===== */
img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
}
```

#### Estilizar Formularios:
```css
/* ===== FORMULARIOS ===== */
form {
    background-color: #f8f9fa;
    padding: 2rem;
    border-radius: 8px;
    margin: 2rem 0;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
}

input, textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 2px solid #bdc3c7;
    border-radius: 4px;
    font-size: 1rem;
}

input:focus, textarea:focus {
    outline: none;
    border-color: #3498db;
}

button {
    background-color: #3498db;
    color: white;
    padding: 0.75rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}
```

#### Footer:
```css
/* ===== FOOTER ===== */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
}
```

---

## 📝 Tarea para Casa

### 🎯 Entregable para Clase 3:
1. **CSS completo aplicado** a las 4 páginas
2. **Paleta de colores consistente** (los 3 colores que eligieron)
3. **Tipografía legible** y profesional
4. **Formularios estilizados** completamente
5. **Efectos hover** en enlaces y botones

### Checklist Específico:
- [ ] Archivo `css/styles.css` creado y vinculado en todas las páginas
- [ ] Reset CSS aplicado (`* { margin: 0; padding: 0; box-sizing: border-box; }`)
- [ ] Header con navegación estilizada
- [ ] Colores consistentes basados en tu análisis UX
- [ ] Tipografía legible (mínimo 16px para texto)
- [ ] Formulario de contacto completamente estilizado
- [ ] Efectos hover en elementos interactivos
- [ ] Footer estilizado
- [ ] Márgenes y padding apropiados (modelo de caja aplicado)
- [ ] Al menos 3 commits con mensajes claros
- [ ] Todo subido a GitHub

### Desafío Extra (Opcional):
- Usar Google Fonts
- Agregar sombras (`box-shadow`)
- Crear botones con diferentes estilos
- Experimentar con `border-radius`

---

## 🎯 Criterios de Evaluación Clase 2

| Criterio | Excelente | Bueno | Suficiente | Insuficiente |
|----------|-----------|-------|------------|--------------|
| **CSS Structure** | Código organizado y comentado | Estructura clara | CSS básico correcto | CSS desorganizado |
| **Colores** | Paleta consistente y apropiada | Buenos colores | Colores básicos | Colores problemáticos |
| **Tipografía** | Jerarquía clara y legible | Tipografía apropiada | Texto legible | Problemas de legibilidad |
| **Modelo de Caja** | Espaciado perfecto | Buen uso de margin/padding | Espaciado básico | Espaciado inconsistente |
| **Consistencia** | Estilos uniformes en todo el sitio | Mayormente consistente | Parcialmente consistente | Inconsistente |

---

## 🔧 Recursos y Herramientas

### Herramientas CSS:
- **Chrome DevTools** (F12) - Inspeccionar estilos
- **VS Code** con extensión "CSS Peek"
- **Autoprefixer** (online) para compatibilidad

### Referencias útiles:
- [MDN CSS Reference](https://developer.mozilla.org/es/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/) - Compatibilidad CSS

### Inspiración de colores:
- [Coolors.co](https://coolors.co/) - Paletas de colores
- [Adobe Color](https://color.adobe.com/) - Herramienta profesional
- [Material Design Colors](https://material.io/resources/color/)

---

## ❓ Preguntas Frecuentes

**P: ¿Mi sitio se ve diferente en otros navegadores?**
R: Es normal. Usa el reset CSS y prueba en Chrome principalmente.

**P: ¿Cuántos colores puedo usar?**
R: Máximo 3-4 colores principales. Menos es más.

**P: ¿Qué tamaño de fuente usar?**
R: Mínimo 16px para texto normal, 1.2-1.5 de line-height.

**P: ¿Cómo sé si los colores van bien juntos?**
R: Usa herramientas como Coolors.co o copia paletas de sitios que te gusten.

---

## 🎯 Preparación para Clase 3

**En la próxima clase veremos:**
- Flexbox para layouts modernos
- Diseño responsive básico
- Cómo organizar elementos en filas y columnas

**Trae preparado:**
- Tu proyecto con CSS básico aplicado
- Ideas de cómo quieres organizar tus elementos
- Referencias de layouts que te gusten

---

## 📊 Notas para el Profesor

### Timing por sección:
- **Repaso UX (30 min):** Involucrar a todos, que compartan sus análisis
- **CSS Fundamentos (90 min):** Mostrar ejemplos en vivo, no solo explicar
- **Práctica (75 min):** Codear juntos, ayudar individualmente
- **Cierre (15 min):** Revisar resultados, motivar para siguiente clase

### Puntos clave a enfatizar:
1. **CSS es presentación** - separar contenido de diseño
2. **Consistencia es clave** - usar mismos colores/fuentes en todo el sitio
3. **Modelo de caja** - todo es una caja, entender margin/padding
4. **Box-sizing: border-box** - usar siempre
5. **Menos es más** - no sobrecargar de estilos

### Errores comunes a prevenir:
- No vincular el CSS correctamente
- Usar demasiados colores
- Texto muy pequeño (menos de 16px)
- No usar reset CSS
- Selectores muy específicos desde el inicio
- Inline styles en lugar de CSS externo

### Momentos de práctica:
- Que todos creen el archivo CSS mientras explicas
- Que prueben cambiar colores en tiempo real
- Que experimenten con font-size y vean la diferencia
- Que usen Chrome DevTools para inspeccionar

### Conexión con UX:
- Constantemente referirse a sus análisis: "¿Recuerdan que analizaron X sitio? Así logran ese efecto..."
- Validar sus decisiones de color: "Perfecto, eligieron azul porque transmite confianza"
- Conectar cada propiedad CSS con experiencia del usuario