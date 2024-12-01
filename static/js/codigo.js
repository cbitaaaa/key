document.addEventListener('DOMContentLoaded', () => {
  // Establecer la fecha y hora objetivo: 9 de diciembre a las 00:00
  const targetDate = new Date('2024-12-09T00:00:00');  // Año, mes, día, hora, minuto, segundo
  
  // Verificar si se está accediendo a la página de código antes de la fecha establecida
  if (new Date().getTime() < targetDate.getTime()) {
    // Si se intenta acceder a "codigo.html" antes del 9 de diciembre a las 00:00, redirigir a la página de inicio
    window.location.href = '/index.html';  // Cambia "index.html" por la página donde esté el contador
    return;  // Detener la ejecución si no es la fecha válida
  }

  // Verificar si ya hay acceso permitido en localStorage
  if (localStorage.getItem('codigoValido') === 'true') {
    window.location.href = '/home.html';  // Redirigir a home.html si el código ya fue validado
    return;  // Detener la ejecución si ya tiene acceso
  }

  // Obtener el formulario y el campo de código
  document.getElementById('codigoForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Evitar el envío por defecto del formulario
    const codigoIngresado = document.getElementById('codigo').value.trim();

    // Código especial predefinido
    const CODIGO_ESPECIAL = '1q2w';

    if (codigoIngresado === CODIGO_ESPECIAL) {
      // Guardamos en localStorage que el usuario tiene acceso
      localStorage.setItem('codigoValido', 'true');
      alert('Código válido. Ahora puedes ingresar a la página secreta.');
      window.location.href = '/home.html';  // Redirigir a home.html
    } else {
      // Mostrar mensaje de error si el código es incorrecto
      const statusElement = document.getElementById('status');
      statusElement.innerText = 'Código incorrecto. Intente de nuevo.';
      statusElement.style.color = 'red'; // Puedes cambiar el color si lo deseas
    }
  });
});
