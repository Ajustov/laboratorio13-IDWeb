document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej5');
    const out = document.getElementById('out-ej5');

    function reordenarPalabras(oracion) {
        return oracion.toUpperCase().split(' ').sort();
    }

    btn.addEventListener('click', () => {
        const texto = prompt("Ingrese una oración (ejemplo: sol luna estrella planeta):");
        if (!texto) {
            out.textContent = "Debe ingresar una oración.";
            return;
        }

        const resultado = reordenarPalabras(texto);
        out.textContent = `Palabras ordenadas: [${resultado.join(', ')}]`;
    });
});
