document.addEventListener("DOMContentLoaded", function () {
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");
  const mainButton = document.getElementById("mainPageButton");  // Botón que redirige
  const codeSection = document.getElementById("codeSection");  // Sección donde está el formulario de código

  // Verificar si el código ya ha sido validado y redirigir si es necesario
  if (localStorage.getItem("accesoPermitido") === "true" && window.location.pathname !== "/home.html") {
    window.location.href = "/home.html";  // Redirigir a home.html si ya está validado
    return;  // Detener la ejecución del script si ya está validado
  }

  // Establecer la fecha y hora objetivo: 9 de diciembre a las 00:00
  const targetDate = new Date('2024-12-09T00:00:00');  // Año, mes, día, hora, minuto, segundo

  // Función para actualizar el contador
  function updateCountdown() {
    const currentTime = new Date().getTime();
    const timeLeft = targetDate - currentTime;

    if (timeLeft <= 0) {
      // Si el contador llega a cero, mostrar el formulario de código
      clearInterval(interval);  // Detener el contador
      daysElement.innerHTML = "00";
      hoursElement.innerHTML = "00";
      minutesElement.innerHTML = "00";
      secondsElement.innerHTML = "00";
      mainButton.disabled = false;  // Habilitar el botón
      mainButton.innerHTML = "Ingresar Código Secreto";  // Cambiar texto del botón
      codeSection.style.display = "block";  // Mostrar formulario de código
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      // Actualizar los valores en el contador
      daysElement.innerHTML = String(days).padStart(2, "0");
      hoursElement.innerHTML = String(hours).padStart(2, "0");
      minutesElement.innerHTML = String(minutes).padStart(2, "0");
      secondsElement.innerHTML = String(seconds).padStart(2, "0");
    }
  }

  // Función que maneja el clic en el botón
  mainButton.addEventListener("click", function() {
    // Redirigir al formulario de código para que el usuario ingrese el código
    window.location.href = "codigo.html";  // Cambia "codigo.html" si tu página de código tiene otro nombre
  });

  // Redirigir a la página de código si la fecha y hora aún no han llegado
  if (window.location.pathname === "/codigo.html" && new Date().getTime() < targetDate.getTime()) {
    // Si se intenta acceder a "codigo.html" antes del 9 de diciembre a las 00:00, redirigir a la página de inicio
    window.location.href = "/index.html";  // Cambia "index.html" por la página donde esté el contador
    return;  // Detener la ejecución de código
  }

  const interval = setInterval(updateCountdown, 1000);  // Ejecutar el contador cada segundo
  updateCountdown();  // Ejecutar inmediatamente para que el contador se muestre al cargar la página
});