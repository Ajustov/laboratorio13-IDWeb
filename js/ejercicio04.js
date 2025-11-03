document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej4');
    const out = document.getElementById('out-ej4');

    function filtrarYTransformar(arr) {
        const positivos = arr.filter(num => num >= 0);
        const cuadrados = positivos.map(num => num * num);
        const suma = cuadrados.reduce((acc, val) => acc + val, 0);
        return suma;
    }

    btn.addEventListener('click', () => {
        const ejemplo = [2, -3, 4, -1, 5];
        const resultado = filtrarYTransformar(ejemplo);
        out.textContent = `Arreglo original: [${ejemplo}]\nResultado: ${resultado}`;
    });
});
