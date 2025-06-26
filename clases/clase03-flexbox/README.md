# 📚 CLASE 3: Flexbox y Layouts Modernos

## 🎯 Objetivos de la Clase
- Dominar Flexbox para crear layouts flexibles y modernos
- Centrar elementos horizontal y verticalmente con facilidad
- Transformar navegaciones y contenido con Flexbox
- Aplicar Flexbox al proyecto personal de los estudiantes

## ⏰ Cronograma (3 horas)

### 🔍 Parte 1: Repaso y Introducción (30 min)
- **Revisión de CSS aplicado** (15 min)
- **¿Qué es Flexbox y por qué lo necesitamos?** (15 min)

### 🎯 Parte 2: Flexbox Fundamentals (90 min)
- **Display flex y contenedor flex** (20 min)
- **Justify-content y align-items** (25 min)
- **Flex-direction y flex-wrap** (25 min)
- **Flex-grow, flex-shrink, flex-basis** (20 min)

### 🛠️ Parte 3: Aplicación Práctica (75 min)
- **Navegación moderna con Flexbox** (25 min)
- **Layout de contenido principal** (25 min)
- **Cards y grillas flexibles** (25 min)

### 🎯 Parte 4: Cierre (15 min)
- **Aplicar Flexbox al proyecto personal**
- **Tarea para Clase 4**
- **Preview de Responsive Design**

---

## 🔍 Repaso y Diagnóstico (30 min)

### Revisión de CSS aplicado (15 min)
**Preguntas para hacer:**
- ¿Todos aplicaron CSS básico a sus 4 páginas?
- ¿Algún problema con colores o tipografías?
- ¿Formularios estilizados completamente?
- ¿Alguna duda de la clase anterior?

**Demo rápida:** Mostrar 2-3 proyectos de estudiantes para celebrar progreso.

### ¿Por qué Flexbox? (15 min)

#### Problemas que resuelve Flexbox:
```css
/* ANTES - Centrar era difícil */
.centrar-viejo {
    text-align: center;
    margin: 0 auto;
    /* Solo funciona horizontal */
}

/* DESPUÉS - Centrar es simple */
.centrar-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Funciona horizontal Y vertical */
}
```

#### Casos de uso comunes:
- ✅ **Navegaciones horizontales** (sin floats ni display: inline-block)
- ✅ **Centrar elementos** vertical y horizontalmente
- ✅ **Cards en filas** que se adapten automáticamente
- ✅ **Layouts responsivos** sin media queries complejas
- ✅ **Espaciado automático** entre elementos

---

## 🎯 Flexbox Fundamentals (90 min)

### Display Flex y Contenedor (20 min)

#### Concepto base:
```css
.contenedor {
    display: flex;
    /* Ahora es un "flex container" */
    /* Sus hijos directos son "flex items" */
}
```

#### Demo en vivo - flexbox-basico.html:
```html
<div class="flex-container">
    <div class="flex-item">Item 1</div>
    <div class="flex-item">Item 2</div>
    <div class="flex-item">Item 3</div>
</div>
```

**Mostrar:** Cómo los elementos se ponen en fila automáticamente.

### Justify-content y Align-items (25 min)

#### Justify-content (eje principal - horizontal por defecto):
```css
.container {
    display: flex;
    
    /* Alineación horizontal */
    justify-content: flex-start;    /* izquierda (default) */
    justify-content: center;        /* centro */
    justify-content: flex-end;      /* derecha */
    justify-content: space-between; /* espacio entre elementos */
    justify-content: space-around;  /* espacio alrededor */
    justify-content: space-evenly;  /* espacio uniforme */
}
```

#### Align-items (eje secundario - vertical por defecto):
```css
.container {
    display: flex;
    height: 300px;
    
    /* Alineación vertical */
    align-items: stretch;     /* estiran para llenar (default) */
    align-items: flex-start;  /* arriba */
    align-items: center;      /* centro */
    align-items: flex-end;    /* abajo */
    align-items: baseline;    /* línea base del texto */
}
```

**Práctica en clase:** Que todos experimenten con navegacion-flex.html

### Flex-direction y Flex-wrap (25 min)

#### Flex-direction (cambiar dirección del eje principal):
```css
.container {
    display: flex;
    
    flex-direction: row;          /* horizontal (default) */
    flex-direction: row-reverse;  /* horizontal invertido */
    flex-direction: column;       /* vertical */
    flex-direction: column-reverse; /* vertical invertido */
}
```

#### Flex-wrap (permitir que elementos salten a nueva línea):
```css
.container {
    display: flex;
    
    flex-wrap: nowrap;    /* una sola línea (default) */
    flex-wrap: wrap;      /* permite múltiples líneas */
    flex-wrap: wrap-reverse; /* múltiples líneas invertidas */
}
```

#### Shorthand útil:
```css
.container {
    display: flex;
    flex-flow: row wrap; /* flex-direction + flex-wrap */
}
```

**Práctica:** cards-flexbox.html para ver wrap en acción.

### Flex-grow, Flex-shrink, Flex-basis (20 min)

#### Propiedades de los flex items:
```css
.flex-item {
    /* Cuánto puede crecer (proporción) */
    flex-grow: 0;    /* no crece (default) */
    flex-grow: 1;    /* crece proporcionalmente */
    flex-grow: 2;    /* crece el doble que flex-grow: 1 */
    
    /* Cuánto puede encogerse */
    flex-shrink: 1;  /* puede encogerse (default) */
    flex-shrink: 0;  /* no se encoge */
    
    /* Tamaño base antes de distribuir espacio */
    flex-basis: auto;    /* tamaño del contenido (default) */
    flex-basis: 200px;   /* tamaño específico */
    flex-basis: 33.33%;  /* porcentaje */
}
```

#### Shorthand más usado:
```css
.flex-item {
    flex: 1;        /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    flex: 0 0 200px; /* no crece, no encoge, 200px fijo */
    flex: 2;        /* crece el doble que flex: 1 */
}
```

**Concepto clave:** `flex: 1` hace que elementos tomen espacio disponible equitativamente.

---

## 🛠️ Aplicación Práctica (75 min)

### Navegación Moderna con Flexbox (25 min)

#### Transformar navegación actual:
```css
/* ANTES - Sin Flexbox */
nav ul {
    list-style: none;
    text-align: center;
}

nav li {
    display: inline-block;
    margin: 0 1rem;
}

/* DESPUÉS - Con Flexbox */
nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
}
```

#### Layouts de header comunes:
```css
/* Logo izquierda, nav derecha */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

/* Todo centrado */
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

/* Navegación responsive básica */
nav ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}
```

**Práctica:** Que apliquen esto a su proyecto en navegacion-flex.html

### Layout de Contenido Principal (25 min)

#### Centrar main content:
```css
main {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

/* Con Flexbox para centrar */
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1; /* Toma espacio disponible */
    display: flex;
    flex-direction: column;
    align-items: center;
}
```

#### Secciones flexibles:
```css
.seccion {
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-bottom: 3rem;
}

.seccion img {
    flex: 0 0 200px; /* Imagen fija */
}

.seccion-contenido {
    flex: 1; /* Texto toma resto del espacio */
}

/* Para alternar imagen izquierda/derecha */
.seccion:nth-child(even) {
    flex-direction: row-reverse;
}
```

### Cards y Grillas Flexibles (25 min)

#### Cards responsivas automáticas:
```css
.cards-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.card {
    flex: 0 1 300px; /* Base 300px, puede encogerse */
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Para 3 columnas exactas */
.card-3-col {
    flex: 0 1 calc(33.333% - 2rem);
}
```

#### Layout de proyectos/portfolio:
```css
.proyecto {
    display: flex;
    gap: 2rem;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 2rem;
}

.proyecto-imagen {
    flex: 0 0 40%;
}

.proyecto-info {
    flex: 1;
    padding: 2rem;
}
```

**Práctica:** cards-flexbox.html - que experimenten con diferentes layouts.

---

## 📝 Tarea para Casa

### 🎯 Objetivo Principal:
Transformar el layout de su proyecto personal usando Flexbox en navegación, contenido principal y elementos específicos.

### Entregable para Clase 4:
1. **Navegación con Flexbox** aplicada y funcionando
2. **Layout principal** mejorado con Flexbox
3. **Al menos 2 secciones** usando Flexbox creativo
4. **Cards o elementos repetitivos** organizados con Flexbox
5. **Código limpio** y comentado

### Checklist Específico:
- [ ] Header/navegación convertida a Flexbox
- [ ] Main content con layout flexible
- [ ] Sección "sobre mí" o similar con Flexbox
- [ ] Sección "proyectos" o "servicios" con cards flexibles
- [ ] Elementos centrados apropiadamente
- [ ] Gap/espaciado consistente usando `gap`
- [ ] Al menos 3 commits relacionados con Flexbox
- [ ] Testear que se ve bien en móvil básico

---

## 🎯 Criterios de Evaluación Clase 3

| Criterio | Excelente | Bueno | Suficiente | Insuficiente |
|----------|-----------|-------|------------|--------------|
| **Navegación Flex** | Nav moderna y flexible | Nav con flex básico | Nav funcional | Nav sin flex |
| **Layout Principal** | Layout complejo con flex | Layout básico mejorado | Algunos elementos flex | Sin layout flex |
| **Cards/Elementos** | Cards perfectamente organizadas | Cards con flex básico | Algunos elementos flex | Sin organización flex |
| **Centrado** | Centrado perfecto H y V | Buen uso de centrado | Centrado básico | Sin centrar elementos |
| **Código Flexbox** | Flexbox avanzado y eficiente | Buen uso de propiedades | Flex básico correcto | Código problemático |

---

## 🔧 Recursos y Herramientas

### Herramientas para Flexbox:
- **Flexbox Froggy** - Juego para practicar
- **CSS-Tricks Flexbox Guide** - Referencia completa
- **Chrome DevTools** - Inspeccionar flex containers

### Referencias útiles:
- [MDN Flexbox](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [CSS-Tricks Complete Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Patterns](http://www.flexboxpatterns.com/)

---

## ❓ Preguntas Frecuentes

**P: ¿Cuándo usar Flexbox vs CSS Grid?**
R: Flexbox para layouts de una dimensión (filas O columnas). Grid para dos dimensiones (filas Y columnas).

**P: ¿Por qué mis elementos no se centran?**
R: Verificar que el contenedor tenga altura definida para centrado vertical.

**P: ¿Flexbox funciona en móviles?**
R: Sí, excelente soporte. Perfecto para responsive design.

---

## 🎯 Preparación para Clase 4

**En la próxima clase veremos:**
- Media queries para responsive design
- Mobile-first approach
- Breakpoints y adaptación de layouts
- Optimización para diferentes dispositivos

**Trae preparado:**
- Tu proyecto con Flexbox aplicado
- Ideas de cómo adaptar tu diseño a móviles
- Referencia de sitios responsivos que te gusten

---

## 📊 Notas para el Profesor

### Timing por sección:
- **Repaso (30 min):** Revisar CSS, introducir problema que resuelve Flexbox
- **Fundamentals (90 min):** Mucha demostración en vivo, que experimenten
- **Práctica (75 min):** Codear juntos, aplicar a sus proyectos
- **Cierre (15 min):** Motivar para aplicar todo a su proyecto

### Puntos clave a enfatizar:
1. **Flexbox es para una dimensión** - una fila o una columna
2. **Display flex en el padre** - afecta a hijos directos
3. **Justify-content = horizontal, align-items = vertical** (por defecto)
4. **Gap es mejor que margin** para espaciado
5. **Flex: 1 reparte espacio** equitativamente

### Errores comunes a prevenir:
- Aplicar flex properties al contenedor en lugar del item
- No definir altura para centrado vertical
- Confundir justify-content con align-items
- No usar gap para espaciado
- Sobrecomplicar con propiedades innecesarias

### Momentos de práctica:
- Que todos apliquen flex a su navegación mientras explicas
- Experimentar con justify-content en tiempo real
- Crear cards responsivas juntos
- Usar Chrome DevTools para ver el flex container

### Conexión con proyecto personal:
- Constantemente referirse a sus proyectos: "En tu portfolio, esto te servirá para..."
- Mostrar cómo Flexbox mejora su trabajo actual
- Preparar para responsive design de la próxima clase