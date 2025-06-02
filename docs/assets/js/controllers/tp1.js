export function setupTPController(getCodigoFn) {
    const puntos = document.querySelectorAll('.punto-link');
    
    puntos.forEach(punto => {
        punto.addEventListener('click', function(e) {
            e.preventDefault();
            const puntoId = this.getAttribute('data-punto');
            mostrarCodigo('algoritmos_tp1', puntoId);
        });
    });
    
    function mostrarCodigo(tpId, puntoId) {
        const codigo = getCodigoFn(tpId, puntoId);
        const codeElement = document.getElementById('codeContent');
        
        if (codeElement) {
            codeElement.textContent = codigo || 'Código no encontrado';
            
            if (typeof Prism !== 'undefined') {
                Prism.highlightElement(codeElement);
            }
        }
    }
}