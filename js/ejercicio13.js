document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej13');
    const out = document.getElementById('out-ej13');

    function combinarCatalogos(tiendaA, tiendaB) {
        const combinado = { ...tiendaA };

        for (let producto in tiendaB) {
            if (combinado[producto]) {
                combinado[producto] = Math.min(combinado[producto], tiendaB[producto]);
            } else {
                combinado[producto] = tiendaB[producto];
            }
        }

        // Redondear a 2 decimales
        for (let prod in combinado) {
            combinado[prod] = combinado[prod].toFixed(2);
        }

        return combinado;
    }

    btn.addEventListener('click', () => {
        const tiendaA = { laptop: 3500.5, mouse: 100.35, teclado: 250.9 };
        const tiendaB = { mouse: 95.2, monitor: 720.457, teclado: 260.1 };

        const resultado = combinarCatalogos(tiendaA, tiendaB);
        out.textContent = JSON.stringify(resultado, null, 2);
    });
});
