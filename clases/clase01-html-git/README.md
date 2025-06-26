# 📚 CLASE 1: HTML Básico + Git - Plan del Profesor

## 🎯 Objetivos de la Clase
- Crear la primera página web con HTML básico (5-6 etiquetas principales)
- Configurar Git y GitHub para trabajo profesional
- **CRÍTICO:** Cada estudiante crea SU repositorio personal para su proyecto
- Establecer workflow de desarrollo que usarán todo el curso

## ⏰ Cronograma (3 horas)

### 🚀 Parte 1: Introducción y Setup (45 min)
- **Bienvenida al curso** (15 min)
- **Presentación de la estructura de 3 repositorios** (15 min)
- **Setup de herramientas** (15 min)

### 🏗️ Parte 2: HTML Fundamentals (75 min)
- **Estructura básica de HTML** (20 min)
- **Etiquetas esenciales** (25 min)
- **Semántica básica** (15 min)
- **Formularios simples** (15 min)

### 🔧 Parte 3: Git y GitHub (75 min)
- **Conceptos básicos de Git** (20 min)
- **Crear repositorio personal** (25 min)
- **Workflow: add, commit, push** (20 min)
- **Troubleshooting común** (10 min)

### 🎯 Parte 4: Proyecto Personal (15 min)
- **Elegir tipo de proyecto**
- **Estructurar las 4 páginas básicas**
- **Tarea para casa**

---

## 🚀 Introducción y Setup (45 min)

### Bienvenida (15 min)
- **Presentar objetivo del curso:** Sitio web personal completo
- **Mostrar proyecto ejemplo terminado** (sin código, solo resultado visual)
- **Explicar progresión:** De HTML básico a sitio profesional

### Estructura de Repositorios (15 min)

**Explicar los 3 repositorios:**

1. **Repositorio del profesor (este):** 
   - Solo para consulta de ejemplos y ejercicios
   - NUNCA pushean aquí

2. **Repositorio de estudiantes:**
   - Para practicar ejercicios durante la clase
   - Hacen fork/clone al inicio

3. **Repositorio personal de cada estudiante:**
   - **SU proyecto personal** que construyen clase a clase
   - Donde aplican lo aprendido
   - **Lo que se evalúa**

### Setup de Herramientas (15 min)
- **VS Code** configurado con extensiones básicas
- **Chrome** como navegador principal
- **GitHub** account verificado
- **Git** instalado y configurado

```bash
# Configuración inicial de Git
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

---

## 🏗️ HTML Fundamentals (75 min)

### Estructura Básica (20 min)

**Demo en vivo:** `ejemplos/estructura-basica.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Primera Página</title>
</head>
<body>
    <header>
        <h1>Bienvenido a mi sitio</h1>
    </header>
    
    <main>
        <p>Este es mi primer sitio web.</p>
    </main>
    
    <footer>
        <p>&copy; 2025 Mi Nombre</p>
    </footer>
</body>
</html>
```

**Explicar:**
- DOCTYPE y estructura básica
- head vs body
- Importancia de lang="es"
- meta charset y viewport

### Etiquetas Esenciales (25 min)

**Demo progresiva con:** `ejemplos/mi-primer-sitio.html`

#### Títulos y Párrafos
```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Título de Sección</h3>
<p>Este es un párrafo de texto.</p>
```

#### Enlaces y Navegación
```html
<nav>
    <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="sobre-mi.html">Sobre Mí</a></li>
        <li><a href="contacto.html">Contacto</a></li>
    </ul>
</nav>
```

#### Imágenes
```html
<img src="images/mi-foto.jpg" alt="Mi foto de perfil">
```

#### Listas
```html
<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>
```

**Actividad:** Que todos vayan agregando estas etiquetas mientras explicas.

### Semántica Básica (15 min)

**Estructura semántica:**
```html
<header>
    <!-- Navegación y título principal -->
</header>

<main>
    <section>
        <!-- Contenido principal -->
    </section>
    
    <aside>
        <!-- Contenido secundario -->
    </aside>
</main>

<footer>
    <!-- Información de contacto y copyright -->
</footer>
```

**Por qué es importante:**
- Accesibilidad
- SEO básico
- Mejor organización del código

### Formularios Simples (15 min)

**Demo:** `ejemplos/formulario-simple.html`

```html
<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" required></textarea>
    
    <button type="submit">Enviar</button>
</form>
```

**Puntos clave:**
- Conectar label con input (for/id)
- Tipos de input apropiados
- Atributo required para validación básica

---

## 🔧 Git y GitHub (75 min)

### Conceptos Básicos (20 min)

**¿Qué es Git?**
- Sistema de control de versiones
- Historial completo de cambios
- Trabajo colaborativo

**¿Qué es GitHub?**
- Plataforma para hospedar repositorios Git
- Backup en la nube
- Portfolio profesional

**Conceptos clave:**
- **Repository:** Proyecto completo
- **Commit:** Guardar cambios con mensaje
- **Push:** Subir cambios a GitHub
- **Clone:** Descargar repositorio

### Crear Repositorio Personal (25 min)

**Paso a paso con cada estudiante:**

#### 1. Crear en GitHub
```
1. Ir a github.com
2. Click "New repository"
3. Nombre: "mi-proyecto-web" (o similar personalizado)
4. Descripción: "Mi sitio web personal - Curso ComuIT 2025"
5. ✅ Public
6. ✅ Add README.md
7. Click "Create repository"
```

#### 2. Clonar localmente
```bash
git clone https://github.com/tu-usuario/mi-proyecto-web.git
cd mi-proyecto-web
```

#### 3. Estructura inicial
```bash
# Crear archivos básicos
touch index.html sobre-mi.html proyectos.html contacto.html

# Crear carpetas
mkdir css js images

# Crear archivos vacíos
touch css/styles.css js/main.js images/.gitkeep
```

#### 4. Verificar estructura
```
mi-proyecto-web/
├── README.md
├── index.html
├── sobre-mi.html  
├── proyectos.html
├── contacto.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── .gitkeep
```

### Workflow Básico (20 min)

**Demostrar ciclo completo:**

#### 1. Hacer cambios
```html
<!-- En index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Proyecto Personal</title>
</head>
<body>
    <header>
        <h1>Bienvenido a mi sitio</h1>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="sobre-mi.html">Sobre Mí</a></li>
                <li><a href="proyectos.html">Proyectos</a></li>
                <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <p>¡Hola! Este es mi primer sitio web.</p>
    </main>
    
    <footer>
        <p>&copy; 2025 [Tu Nombre]</p>
    </footer>
</body>
</html>
```

#### 2. Ver cambios
```bash
git status
```

#### 3. Agregar archivos
```bash
git add .
```

#### 4. Hacer commit
```bash
git commit -m "Crear estructura inicial del sitio"
```

#### 5. Subir a GitHub
```bash
git push
```

#### 6. Verificar en GitHub
- Ir al repositorio en GitHub
- Verificar que los archivos están ahí
- Ver el commit en el historial

### Troubleshooting Común (10 min)

**Problemas frecuentes y soluciones:**

```bash
# Error: "Permission denied"
# Solución: Verificar configuración SSH o usar HTTPS

# Error: "Repository not found"
# Solución: Verificar URL del repositorio

# Error: "Your branch is ahead of origin"
# Solución: git push

# Error: "Changes not staged"
# Solución: git add . antes de commit
```

---

## 🎯 Proyecto Personal (15 min)

### Elegir Tipo de Proyecto

**Opciones (cada estudiante elige una):**

#### 1. 💼 Portfolio Personal
- **index.html:** Presentación profesional
- **sobre-mi.html:** Biografía, estudios, experiencia
- **proyectos.html:** Showcase de trabajos (pueden ser ideas)
- **contacto.html:** Formulario + links profesionales

#### 2. 📝 Blog Personal
- **index.html:** Últimos artículos destacados
- **sobre-mi.html:** Quién soy, por qué escribo
- **articulos.html:** Lista completa de posts
- **contacto.html:** Para lectores

#### 3. 🍽️ Restaurante
- **index.html:** Historia, ambiente, bienvenida
- **menu.html:** Platos con precios por categorías
- **galeria.html:** Fotos del lugar y comida
- **contacto.html:** Ubicación, horarios, reservas

#### 4. 🚀 Servicio/Emprendimiento
- **index.html:** Propuesta de valor, problema que resuelve
- **servicios.html:** Detalle de servicios y precios
- **nosotros.html:** Experiencia, testimonios
- **contacto.html:** Formulario de cotización

### Estructurar las 4 Páginas

**Que cada estudiante:**
1. **Elija su tipo de proyecto**
2. **Defina su estructura específica**
3. **Actualice su README.md** con la información del proyecto
4. **Haga commit:** "Definir tipo y estructura del proyecto"

---

## 📝 Tarea para Casa

### 🎯 Objetivo Principal:
Completar las 4 páginas HTML básicas de su proyecto personal con contenido real.

### 📋 Entregable:
1. **4 páginas HTML funcionando** en su repositorio personal
2. **Navegación** que funcione entre todas las páginas
3. **Contenido real** (no Lorem Ipsum)
4. **Formulario de contacto** completo
5. **Mínimo 3 commits** con mensajes descriptivos
6. **Todo subido a GitHub**

### 📅 Fecha límite:
**Antes de la Clase 2** (CSS Básico)

---

## 🎯 Criterios de Evaluación Clase 1

| Criterio | Excelente (4) | Bueno (3) | Suficiente (2) | Insuficiente (1) |
|----------|---------------|-----------|----------------|------------------|
| **Estructura HTML** | HTML semántico perfecto | HTML bien estructurado | HTML básico correcto | HTML problemático |
| **Contenido** | Contenido real y completo | Buen contenido real | Contenido básico | Lorem ipsum o incompleto |
| **Navegación** | Nav perfecta entre páginas | Nav funcional | Nav básica | Enlaces rotos |
| **Git/GitHub** | Commits profesionales | Buenos commits | Commits básicos | Git problemático |
| **Repositorio** | Proyecto bien organizado | Estructura correcta | Básico funcional | Desorganizado |

---

## 🔧 Recursos para el Profesor

### Timing Recomendado:
- **No apresurarse** con Git - es lo más difícil para principiantes
- **Verificar que TODOS** tengan su repositorio funcionando antes de continuar
- **Caminar por el aula** durante la práctica de Git
- **Tener URLs de ejemplo** preparadas para copiar/pegar

### Errores Comunes a Prevenir:
- Estudiantes que no logran crear su repositorio personal
- Confusión entre los 3 repositorios diferentes
- Problemas de configuración de Git
- Miedo a "romper algo" con Git

### Momentos Clave:
- **Verificar que todos tengan GitHub** antes de empezar
- **Hacer primer commit todos juntos** paso a paso
- **Verificar que aparezca en GitHub** antes de terminar la clase
- **Asegurarse que entienden que SU repo es lo importante**

---

## 🚀 Preparación para Clase 2

**Los estudiantes deben llegar con:**
- Su repositorio personal con 4 páginas HTML
- Contenido real escrito
- Git funcionando correctamente
- Navegación básica entre páginas

**En la Clase 2 veremos:**
- CSS básico para darle estilo a SU proyecto
- Colores, tipografías y espaciado
- Modelo de caja y layout básico
- Aplicación directa a su proyecto personal

¡La base sólida de la Clase 1 es crucial para el éxito del resto del curso! 🎯