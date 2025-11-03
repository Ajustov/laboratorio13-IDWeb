document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej3');
    const out = document.getElementById('out-ej3');

    function doblarNumeros(arr) {
        return arr.map(num => num * 2);
    }

    btn.addEventListener('click', () => {
        const entrada = prompt("Ingrese números separados por comas (ejemplo: 2,4,6):");
        if (!entrada) {
            out.textContent = "Debe ingresar al menos un número.";
            return;
        }

        const numeros = entrada.split(',').map(Number);
        if (numeros.some(isNaN)) {
            out.textContent = "Ingrese solo números válidos.";
            return;
        }

        const resultado = doblarNumeros(numeros);
        out.textContent = `Números originales: [${numeros}] \nNúmeros doblados: [${resultado}]`;
    });
});
