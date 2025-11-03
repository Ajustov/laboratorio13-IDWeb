document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej9');
    const out = document.getElementById('out-ej9');

    function contarPalabras(texto) {
        const palabras = texto.toLowerCase().split(' ');
        const conteo = new Map();

        for (let palabra of palabras) {
            conteo.set(palabra, (conteo.get(palabra) || 0) + 1);
        }

        return conteo;
    }

    btn.addEventListener('click', () => {
        const texto = prompt("Ingrese una frase (ejemplo: sol luna sol sol estrella luna):");
        if (!texto) {
            out.textContent = "Debe ingresar texto.";
            return;
        }

        const resultado = contarPalabras(texto);
        let salida = "";
        resultado.forEach((valor, clave) => {
            salida += `${clave}: ${valor}\n`;
        });

        out.textContent = salida.trim();
    });
});
