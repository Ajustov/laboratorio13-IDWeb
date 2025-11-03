document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('run-ej14');
    const out = document.getElementById('out-ej14');

    function gestionarEmpleados(empleados) {
        const resultado = {};

        for (let emp of empleados) {
            if (!resultado[emp.area]) {
                resultado[emp.area] = { empleados: [], promedio: 0 };
            }
            resultado[emp.area].empleados.push(emp.nombre);
        }

        for (let area in resultado) {
            const empleadosArea = empleados.filter(e => e.area === area);
            const promedio = empleadosArea.reduce((acc, e) => acc + e.salario, 0) / empleadosArea.length;
            resultado[area].promedio = promedio;
        }

        return resultado;
    }

    btn.addEventListener('click', () => {
        const listaEmpleados = [
            { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
            { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
            { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
            { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
        ];

        const resultado = gestionarEmpleados(listaEmpleados);
        out.textContent = JSON.stringify(resultado, null, 2);
    });
});
