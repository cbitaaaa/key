document.addEventListener('DOMContentLoaded', function () {
  // Verificar si el código ha sido validado en localStorage
  if (!localStorage.getItem("codigoValido")) {
    // Si no se ha validado, redirigir a la página de código
    window.location.href = "codigo.html";  // O donde se encuentre tu página de validación
  }

  // Aquí van otras lógicas para la página 'home.html', como mostrar contenido
  const welcomeMessage = document.getElementById("welcomeMessage");
  if (welcomeMessage) {
    welcomeMessage.innerText = "¡Bienvenido a la página secreta!";
  }

  // Puedes agregar más funcionalidad aquí para gestionar la página de inicio
});
