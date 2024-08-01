document.addEventListener("DOMContentLoaded", function() {
    const sectBtn = document.querySelectorAll(".sect");
    const eje = document.querySelectorAll(".item");
    
    sectBtn.forEach(button => {
        button.addEventListener("click", () => {
            
            //button.classList.add("active");
            const filterEje = button.getAttribute("data-filter");

            console.log(filterEje);
            console.log(eje)
            eje.forEach(item => {
                console.log(item.classList.contains(filterEje));
                if (item.classList.contains(filterEje)) {
                    item.style.display = 'flex';                    
                } else {
                    item.style.display = 'none';
                }
            });

        });
    });
});

function calcularFactorial() {
    const input = document.getElementById('factorialInput');
    const resultado = document.getElementById('resultadoFactorial');
    if (!isNaN(input.value) && input.value !== "" && input.value >= 0) {
        const n = parseInt(input.value);
        let result = 1;
        for (let i = n; i > 1; i--) {
            result *= i;
        }
        resultado.textContent = `El factorial de ${n} es ${result}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa un número válido y positivo.';
    }
}

function encontrarMayor() {
    const input = document.getElementById('numeroMayorInput');
    const resultado = document.getElementById('resultadoMayor');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        let mayor = arr[0];
        for (let numero of arr) {
            if (numero > mayor) {
                mayor = numero;
            }
        }
        resultado.textContent = `El número mayor es ${mayor}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}

function ordenarArray() {
    const input = document.getElementById('ordenarArrayInput');
    const resultado = document.getElementById('resultadoArray');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        arr.sort((a, b) => a - b);
        resultado.textContent = `El arreglo ordenado es: ${arr.join(', ')}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}

let arr =[1,2, 5, 8, 7]

function filtrarNumeros() {
    const inputValores = document.getElementById('filtrarNumerosValor');
    const inputArreglo = document.getElementById('filtrarNumerosArreglo');
    const resultado = document.getElementById('resultadoFiltrar');
    const resultado2 = document.getElementById('resultadoFiltrar2');
    const val = Number(inputValores.value);
    let arr = inputArreglo.value.split(',').map(Number);
    if (!isNaN(val) && arr.length > 0 && arr.every(num => !isNaN(num))) {
        const numFil = arr.filter(numero => numero > val);
        resultado.textContent = `Números mayores que ${val}: ${numFil.join(', ')} .`;
        resultado2.textContent = `Nuevo Arreglo: ${numFil.join(', ')} .`;
    } else {
        resultado.textContent = 'Por favor, ingresa un valor y números válidos separados por comas.';
    }
}

function sumarTodosLosNumeros() {
    const input = document.getElementById('sumarNumerosInput');
    const resultado = document.getElementById('resultadoSuma');
    const arr = input.value.split(',').map(Number);
    if (arr.length > 0 && arr.every(val => !isNaN(val))) {
        const sum = arr.reduce((acc, val) => acc + val, 0);
        resultado.textContent = `La suma de los números es ${sum}.`;
    } else {
        resultado.textContent = 'Por favor, ingresa números válidos separados por comas.';
    }
}