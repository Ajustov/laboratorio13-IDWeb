document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej11');
    const out = document.getElementById('out-ej11');

    const auto = {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2022,
        detalles: function() {
            return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.año}`;
        }
    };

    btn.addEventListener('click', () => {
        out.textContent = auto.detalles();
    });
});
