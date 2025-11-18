/* ======= FUNCIONALIDAD DE LA CALCULADORA ======= */

// Capturamos el elemento de la pantalla
const display = document.getElementById('display');

// Capturamos todos los botones
const buttons = document.querySelectorAll('button');

// Recorremos cada botón y le asignamos un evento "click"
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtenemos el texto del botón presionado
        const value = button.textContent;

        // Si el botón es "C", se limpia la pantalla
        if (value === 'C') {
            display.value = '';
        } 
        // Si el botón es "=", se evalúa la operación
        else if (value === '=') {
            try {
                // Reemplazamos los símbolos visuales por operadores reales de JavaScript
                display.value = eval(
                    display.value
                        .replace('÷', '/')
                        .replace('×', '*')
                        .replace('−', '-')
                );
            } catch {
                // En caso de error (por ejemplo, operación incorrecta)
                display.value = 'Error';
            }
        } 
        // En caso contrario, se añade el número u operador al display
        else {
            display.value += value;
        }
    });
});
