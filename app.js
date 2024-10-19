// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Función para actualizar el color de fondo de la página.
function actualizarColor() {
    const rojo = inputRojo.value; // Obtiene el valor del input rojo
    const verde = inputVerde.value; // Obtiene el valor del input verde
    const azul = inputAzul.value; // Obtiene el valor del input azul

    // Muestra los valores en los elementos <p>.
    textoRojo.textContent = rojo; 
    textoVerde.textContent = verde; 
    textoAzul.textContent = azul; 

    // Cambia el color de fondo.
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega event listeners para los inputs.
inputRojo.addEventListener('input', actualizarColor);
inputVerde.addEventListener('input', actualizarColor);
inputAzul.addEventListener('input', actualizarColor);

// Inicializa el color al cargar la página.
actualizarColor();