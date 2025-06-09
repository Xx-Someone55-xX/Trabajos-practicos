document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todos los puntos de navegación
  const navPoints = document.querySelectorAll('.nav-point');
  const mobileNavSelect = document.querySelector('.mobile-nav-select');
  
  // Función para manejar el cambio de punto activo
  function setActivePoint(pointNumber) {
    // Remover clase 'active' de todos los puntos
    navPoints.forEach(point => {
      point.classList.remove('active');
    });
    
    // Añadir clase 'active' al punto seleccionado
    const activePoint = document.querySelector(`.nav-point[data-point="${pointNumber}"]`);
    if (activePoint) {
      activePoint.classList.add('active');
    }
    
    // Actualizar el select en móviles
    if (mobileNavSelect) {
      mobileNavSelect.value = pointNumber;
    }
    
    // Aquí añade tu lógica para cambiar el contenido principal
    // Por ejemplo:
    // scrollToSection(pointNumber);
    // loadContent(pointNumber);
    console.log(`Navegando al punto ${pointNumber}`);
  }
  
  // Event listeners para los puntos de navegación
  navPoints.forEach(point => {
    point.addEventListener('click', function() {
      const pointNumber = this.getAttribute('data-point');
      setActivePoint(pointNumber);
    });
  });
  
  // Event listener para el select en móviles
  if (mobileNavSelect) {
    mobileNavSelect.addEventListener('change', function() {
      setActivePoint(this.value);
    });
  }
  
  // Opcional: Navegación con teclado (izq/der)
  document.addEventListener('keydown', function(e) {
    const activePoint = document.querySelector('.nav-point.active');
    if (!activePoint) return;
    
    const currentPoint = parseInt(activePoint.getAttribute('data-point'));
    
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextPoint = Math.min(currentPoint + 1, navPoints.length);
      setActivePoint(nextPoint);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevPoint = Math.max(currentPoint - 1, 1);
      setActivePoint(prevPoint);
    }
  });
});