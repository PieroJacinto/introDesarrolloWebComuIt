# Git Básico - Comandos Esenciales

## 🔧 Comandos que usamos en clase

### Clonar un repositorio
```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
Ver estado de archivos
bashgit status
Agregar archivos para guardar
bash# Agregar un archivo específico
git add index.html

# Agregar todos los archivos
git add .
Guardar cambios (commit)
bashgit commit -m "Descripción clara de los cambios"
Subir cambios a GitHub
bashgit push
Bajar cambios desde GitHub
bashgit pull
✅ Buenas Prácticas
Mensajes de commit claros:

✅ "Agregar página de inicio"
✅ "Corregir formulario de contacto"
✅ "Actualizar información personal"
❌ "cambios"
❌ "fix"
❌ "asdf"

Flujo de trabajo típico:

Hacer cambios en archivos
git add .
git commit -m "Descripción"
git push

🆘 ¿Problemas?
Si te pide usuario y contraseña:

Configurar: git config --global user.name "Tu Nombre"
Configurar: git config --global user.email "tu@email.com"

Si da error al push:

Primero hacer: git pull
Luego: git push


---

## 📄 recursos/html-etiquetas.md

```markdown
# HTML - Etiquetas Esenciales

## 🏗️ Estructura básica
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>
</head>
<body>
    <!-- Contenido aquí -->
</body>
</html>
📝 Etiquetas de texto
Títulos
html<h1>Título principal (solo uno por página)</h1>
<h2>Título secundario</h2>
<h3>Subtítulo</h3>
Párrafos y texto
html<p>Párrafo normal</p>
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
🔗 Enlaces e imágenes
html<a href="https://google.com">Enlace externo</a>
<a href="otra-pagina.html">Enlace interno</a>

<img src="imagen.jpg" alt="Descripción de la imagen">
📋 Listas
html<ul>
    <li>Elemento 1</li>
    <li>Elemento 2</li>
    <li>Elemento 3</li>
</ul>
🏢 Estructura semántica
html<header>
    <h1>Título del sitio</h1>
    <nav>
        <!-- Navegación aquí -->
    </nav>
</header>

<main>
    <!-- Contenido principal -->
</main>

<footer>
    <!-- Pie de página -->
</footer>
📋 Formularios
html<form>
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="mensaje">Mensaje:</label>
    <textarea id="mensaje" name="mensaje" rows="5"></textarea>
    
    <button type="submit">Enviar</button>
</form>
💡 Consejos

Siempre usar alt en imágenes
Conectar label con input usando for e id
Un solo h1 por página
Usar etiquetas semánticas (header, main, footer)


---

## 🎯 NOTAS PARA EL PROFESOR

### Timing por sección:
- **Introducción (30 min):** Presentaciones, explicar curso, herramientas
- **Git (45 min):** Crear cuenta GitHub, clonar repo, comandos básicos
- **HTML (90 min):** Mostrar ejemplos, hacer ejercicio, explicar etiquetas
- **Proyecto (30 min):** Elegir tema, crear primera página, subir a GitHub
- **Cierre (15 min):** Tarea, próxima clase

### Puntos clave a enfatizar:
1. **Git es para NO PERDER el trabajo** - motivación principal
2. **HTML es el esqueleto** - estructura antes que diseño
3. **Semántica importa** - usar etiquetas correctas
4. **Formularios requieren labels** - accesibilidad básica
5. **Commits descriptivos** - buena práctica desde el inicio

### Errores comunes a prevenir:
- Olvidar `<!DOCTYPE html>`
- No cerrar etiquetas
- Usar `<br>` en lugar de `<p>`
- Links que no funcionan
- Imágenes sin `alt`
- Formularios sin `label`

### Momentos de práctica:
- Que escriban el HTML básico mientras explicas
- Que elijan su proyecto y justifiquen por qué
- Que hagan su primer commit con mensaje descriptivo
- Que naveguen entre sus páginas y vean que funcionan