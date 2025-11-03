document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej12');
    const out = document.getElementById('out-ej12');

    function contarLetras(texto) {
        const letras = texto.toLowerCase().split('');
        const conteo = {};

        for (let letra of letras) {
            if (letra !== ' ') {
                conteo[letra] = (conteo[letra] || 0) + 1;
            }
        }
        return conteo;
    }

    btn.addEventListener('click', () => {
        const texto = prompt("Ingrese una palabra o frase (ejemplo: banana):");
        if (!texto) {
            out.textContent = "Debe ingresar un texto válido.";
            return;
        }

        const resultado = contarLetras(texto);
        out.textContent = JSON.stringify(resultado, null, 2);
    });
});
