document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej10');
    const out = document.getElementById('out-ej10');

    function invertirMap(map) {
        const nuevo = new Map();
        for (let [clave, valor] of map) {
            nuevo.set(valor, clave);
        }
        return nuevo;
    }

    btn.addEventListener('click', () => {
        const capitales = new Map([
            ["Perú", "Lima"],
            ["Chile", "Santiago"]
        ]);

        const invertido = invertirMap(capitales);
        let texto = "";
        invertido.forEach((v, k) => {
            texto += `${k} => ${v}\n`;
        });

        out.textContent = texto.trim();
    });
});
