document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej7');
    const out = document.getElementById('out-ej7');

    function tieneDuplicados(arr) {
        return new Set(arr).size !== arr.length;
    }

    btn.addEventListener('click', () => {
        const ejemplo = [1, 2, 3, 2, 4];
        out.textContent = `Arreglo: [${ejemplo}] \n¿Tiene duplicados? ${tieneDuplicados(ejemplo)}`;
    });
});
