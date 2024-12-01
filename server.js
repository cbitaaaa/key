const express = require('express');
const path = require('path');
const app = express();

// Configurar el puerto
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (CSS, JS, imágenes) desde la carpeta /static
app.use('/static', express.static(path.join(__dirname, 'static')));


// Ruta para la raíz ("/") que sirve la página de inicio (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Sirve index.html cuando se accede a "/"
});

app.get('/home.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Ruta para la página de código (codigo.html)
app.get('/codigo.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'codigo.html'));
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
