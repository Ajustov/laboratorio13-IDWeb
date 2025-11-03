document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej6');
    const out = document.getElementById('out-ej6');

    btn.addEventListener('click', () => {
        const nombres = ["Ana", "Luis", "Pedro", "Ana", "María", "Pedro"];
        const setNombres = new Set(nombres);
        out.textContent = `Original: [${nombres.join(', ')}]\nSin duplicados: [${[...setNombres].join(', ')}]`;
    });
});
