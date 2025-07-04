# 📚 CLASE 8: Local Storage + Proyecto Final

## 🎯 Objetivos de la Clase
- Aplicar **tema claro/oscuro** con Local Storage al proyecto personal
- Implementar **auto-guardado de formularios** con Local Storage
- Dedicar el mayor tiempo a **completar el proyecto final**
- Preparar la presentación para la Clase 9

## ⏰ Cronograma

### 🔍 Parte 1: Repaso y Diagnóstico
- **Revisión rápida de proyectos**

### 🎯 Parte 2: Local Storage - Demos Específicos
- **Demo 1: Tema claro/oscuro** con ejemplo1-storage-basico.html
- **Demo 2: Auto-guardado de formularios** con ejemplo2-storage.html
- **Explicación del proyecto ejemplo**

### 🛠️ Parte 3: Trabajo en Proyectos Personales
- **Aplicar tema claro/oscuro** a su proyecto
- **Implementar auto-guardado** en formulario de contacto
- **Completar proyecto final** - trabajo libre

### 🎯 Parte 4: Cierre y Preparación
- **Checklist del proyecto final**
- **Preparación para presentaciones**

---

## 🔍 Repaso Rápido (15 min)

### Verificación de estado
**Preguntas clave:**
- ¿Todos tienen JavaScript funcionando?
- ¿Formulario de contacto validando?
- ¿Diseño responsive?
- ¿Navegación entre páginas?

**Objetivo:** Identificar qué falta para completar el proyecto.

---

## 🎯 Local Storage - Demos Específicos (45 min)

### Demo 1: Tema Claro/Oscuro (20 min)

#### Archivo: `ejemplos/ejemplo1-storage-basico.html`
**Conceptos a demostrar:**
- Qué es Local Storage y para qué sirve
- `localStorage.setItem()` y `localStorage.getItem()`
- Alternar clases CSS con `classList.toggle()`
- Persistencia entre sesiones

#### Flujo de demostración:
1. **Mostrar concepto** (5 min): "Local Storage es la memoria del navegador"
2. **Demo en vivo** (10 min): Cambiar tema, recargar página
3. **Inspeccionar DevTools** (5 min): Ver datos guardados en Application

### Demo 2: Auto-guardado de Formularios (20 min)

#### Archivo: `ejemplos/ejemplo2-storage.html`
**Conceptos a demostrar:**
- Guardar objetos con `JSON.stringify()`
- Recuperar objetos con `JSON.parse()`
- Auto-guardado con `addEventListener('input')`
- Cargar datos automáticamente con `window.addEventListener('load')`

#### Flujo de demostración:
1. **Mostrar problema** (5 min): "Usuario pierde datos al navegar"
2. **Demo en vivo** (10 min): Escribir formulario, simular navegación
3. **Explicar auto-guardado** (5 min): Guardar mientras usuario escribe

### Explicación del Proyecto Ejemplo (5 min)

#### Estructura del proyecto ejemplo:
```
proyecto-ejemplo/
├── index.html
├── contacto.html
├── css/
│   └── styles.css      # Con tema claro/oscuro
├── js/
│   ├── main.js         # Tema para todas las páginas
│   └── contacto.js     # Auto-guardado del formulario
```

**Mensaje clave:** "Esto es exactamente lo que vas a aplicar a tu proyecto"

---

## 🛠️ Trabajo en Proyectos Personales (105 min)

### Fase 1: Aplicar Tema Claro/Oscuro

#### Proceso paso a paso:
1. **Agregar CSS del tema**
   - Copiar estilos del tema oscuro del proyecto ejemplo
   - Adaptar colores a su proyecto específico

2. **Agregar botón de tema**
   - Botón en navegación: `<button onclick="cambiarTema()">🌙</button>`
   - Verificar que aparezca en todas las páginas

3. **Implementar función cambiarTema()**
   - Copiar lógica del `proyecto-ejemplo/js/main.js`
   - Agregar `window.addEventListener('load')` para carga automática
   - Probar funcionamiento

#### Verificación:
- [ ] Botón cambia colores
- [ ] Tema persiste al recargar página
- [ ] Tema persiste al navegar entre páginas
- [ ] DevTools muestra datos en Local Storage

### Fase 2: Implementar Auto-guardado

#### Proceso paso a paso:
1. **Verificar IDs del formulario**
   - `<input type="text" id="nombre">`
   - `<input type="email" id="email">`
   - `<textarea id="mensaje">`

2. **Implementar funciones de guardado**
   - `guardarFormulario()`: Leer campos y guardar
   - `cargarFormulario()`: Recuperar y llenar campos
   - `limpiarFormulario()`: Limpiar todo

3. **Agregar auto-guardado**
   - `addEventListener('input')` en cada campo
   - `window.addEventListener('load')` para cargar automáticamente

#### Verificación:
- [ ] Escribir → se guarda automáticamente
- [ ] Recargar → formulario se llena automáticamente
- [ ] Navegar y volver → datos siguen ahí
- [ ] DevTools muestra formulario guardado

### Fase 3: Completar Proyecto Final

#### Trabajo libre guiado:
**Profesor debe circular y ayudar individualmente**

#### Checklist de completitud:
- [ ] **4 páginas HTML** con navegación funcional
- [ ] **Diseño responsive** en móvil y desktop
- [ ] **Tema claro/oscuro** con Local Storage
- [ ] **Formulario con auto-guardado**
- [ ] **Contenido real** (no Lorem Ipsum)
- [ ] **Imágenes** cargando correctamente
- [ ] **Console sin errores**
- [ ] **Código comentado** y organizado

#### Prioridades si falta tiempo:
1. **Funcionalidad básica** (navegación, formulario)
2. **Responsive** (móvil funcional)
3. **Local Storage** (tema y formulario)
4. **Pulir detalles** (contenido, imágenes)

---

## 🎯 Cierre y Preparación (15 min)

### Checklist Final del Proyecto (10 min)

#### Verificación técnica:
- [ ] **Abrir en móvil** - ¿Se ve bien?
- [ ] **Probar navegación** - ¿Todos los links funcionan?
- [ ] **Cambiar tema** - ¿Persiste entre páginas?
- [ ] **Llenar formulario** - ¿Se guarda automáticamente?
- [ ] **Abrir DevTools** - ¿Sin errores rojos?

#### Verificación de contenido:
- [ ] **Texto profesional** - ¿Representa bien tu proyecto?
- [ ] **Imágenes apropiadas** - ¿Cargan correctamente?
- [ ] **Información completa** - ¿4 páginas con contenido real?

### Preparación para Presentaciones (5 min)

#### Estructura de presentación (3-4 minutos):
1. **"¡Hola! Soy [nombre] y creé [tipo de proyecto]"** (20 segundos)
2. **Demo de navegación** - mostrar las 4 páginas (1 minuto)
3. **Demo del tema claro/oscuro** - cambiar tema (30 segundos)
4. **Demo del formulario** - mostrar auto-guardado (1 minuto)
5. **"Lo que más me gustó fue..."** (30 segundos)

#### Tips para la presentación:
- **Practica en casa** - Cronometra tu demo
- **Prepara tu pantalla** - Cierra otras aplicaciones
- **Ten backup** - URL online de tu proyecto
- **Destaca lo impresionante** - Responsive + Local Storage

---

## 📝 Tarea para Casa

### 🎯 Objetivo:
**Proyecto 100% terminado** para presentar en Clase 9.

### 📋 Entregable:
- **Proyecto final completamente funcional**
- **Tema claro/oscuro** implementado
- **Auto-guardado del formulario** funcionando
- **Presentación practicada** de 3-4 minutos

### ⏰ Deadline:
**Antes de la Clase 9** - No hay extensiones porque es la clase de presentaciones.

---

## 🎉 Mensaje Motivacional

### Para los estudiantes:
> "¡Estás a un paso de completar tu primer sitio web profesional! Con tema claro/oscuro y auto-guardado, tu proyecto tiene funcionalidades que muchos sitios web reales usan. ¡En 8 clases pasaste de no saber nada a crear sitios web completos!"

### Para el profesor:
> "Esta clase es sobre aplicación práctica, no teoría nueva. Tu trabajo es ser coach: ayuda individualmente, celebra cada logro, y prepara a los estudiantes para brillar en sus presentaciones. ¡Están listos para impresionar!"

---

## 🚀 Resultado Esperado

Al final de esta clase, cada estudiante debe tener:
- ✅ **Proyecto personal 100% terminado**
- ✅ **Tema claro/oscuro funcionando**
- ✅ **Auto-guardado del formulario**
- ✅ **Confianza total para presentar**
- ✅ **Orgullo por su logro**

**¡El gran final está aquí! 🌟**