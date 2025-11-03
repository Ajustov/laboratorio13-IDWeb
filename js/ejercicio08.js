document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej8');
    const out = document.getElementById('out-ej8');

    btn.addEventListener('click', () => {
        // Creamos el Map con productos y precios
        const productos = new Map([
            ["pan", 2.5],
            ["leche", 4.2],
            ["queso", 10.5],
            ["jugo", 6.0]
        ]);

        // Simulamos una lista de compras
        const lista = ["pan", "queso", "leche"];

        let total = 0;
        lista.forEach(item => {
            if (productos.has(item)) {
                total += productos.get(item);
            }
        });

        out.textContent = `Productos disponibles: ${Array.from(productos.entries())}
Lista de compras: [${lista.join(', ')}]
Precio total: S/. ${total.toFixed(2)}`;
    });
});
