// =========================================== 
// MAIN.JS - SE USA EN TODAS LAS PÁGINAS
// ===========================================

// ===========================================
// FUNCIÓN PARA CAMBIAR TEMA OSCURO/CLARO
// ===========================================
function cambiarTema() {
    console.log('🔄 Cambiando tema...');
    
    // 1. Ver si body tiene clase "oscuro"
    const tieneOscuro = document.body.classList.contains('oscuro');
    console.log('¿Tiene tema oscuro?', tieneOscuro);
    
    // 2. Cambiar al contrario
    if (tieneOscuro) {
        document.body.classList.remove('oscuro');
        console.log('❌ Tema oscuro REMOVIDO');
    } else {
        document.body.classList.add('oscuro');
        console.log('✅ Tema oscuro APLICADO');
    }
    
    // 3. Ver qué quedó activo después del cambio
    const esOscuroAhora = document.body.classList.contains('oscuro');
    
    // 4. GUARDAR en Local Storage
    localStorage.setItem('cafeteria-tema-oscuro', esOscuroAhora);
    console.log('💾 Tema guardado en Local Storage:', esOscuroAhora);
}

// ===========================================
// CARGA AUTOMÁTICA AL ABRIR CUALQUIER PÁGINA
// ===========================================
window.addEventListener('load', function() {
    console.log('🚀 Página cargada - cargando tema automáticamente...');
    
    // Recuperar tema guardado de Local Storage
    const temaGuardado = localStorage.getItem('cafeteria-tema-oscuro');
    console.log('📄 Tema en Local Storage:', temaGuardado);
    
    // Si el tema guardado es 'true', aplicar tema oscuro
    if (temaGuardado === 'true') {
        document.body.classList.add('oscuro');
        console.log('🌙 Tema oscuro aplicado automáticamente');
    } else {
        console.log('☀️ Tema claro aplicado automáticamente');
    }
    
    console.log('✅ Tema cargado automáticamente');
});