// Tarea #5
// Abraham Méndez

// Función para obtener la suma de las notas
function calcularSumaNotas(notas) {
    let suma = 0;
    for (let nota of notas) {
        suma += nota;
    }
    return suma;
}

// Función para obtener el promedio de las notas
function calcularPromedioNotas(notas) {
    let suma = calcularSumaNotas(notas); // Llamada a la función de suma
    let promedio = suma / notas.length; // Cálculo del promedio
    return promedio;
}

// Array de notas
const notas = [6, 8, 9, 2, 5, 10];

// Ejecución de las funciones y pruebas
let suma = calcularSumaNotas(notas);
let promedio = calcularPromedioNotas(notas);

// Resultados
console.log("Suma de las notas:", suma); // Debería imprimir: 40
console.log("Promedio de las notas:", promedio.toFixed(2)); // Debería imprimir: 6.67
