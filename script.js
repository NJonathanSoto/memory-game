document.getElementById('comprobarResultados').style.display = 'none';

const darComienzo = document.getElementById('darComienzo');

darComienzo.addEventListener('click', () => {

    document.getElementById('primerIngreso').value = ' ';
    document.getElementById('segundoIngreso').value = ' ';
    document.getElementById('tercerIngreso').value = ' ';
    document.getElementById('cuartoIngreso').value = ' ';
    document.getElementById('quintoIngreso').value = ' ';

    darComienzo.style.display = 'none';

    document.getElementById('comprobarResultados').style.display = 'block';

    let numerosGeneradosAlAzar = [
        Math.floor(Math.random() * (10 - 1) + 1),
        Math.floor(Math.random() * (10 - 1) + 1),
        Math.floor(Math.random() * (10 - 1) + 1),
        Math.floor(Math.random() * (10 - 1) + 1),
        Math.floor(Math.random() * (10 - 1) + 1),
    ];

    let numerosIngresadosPorElUsuario = new Array(5);

    let numerosCpu = numerosGeneradosAlAzar.filter((numCpu) => {
        return numCpu;
    });

    setTimeout(() => {
        document.getElementById('generador').textContent = numerosCpu[0];
    }, 2000);

    setTimeout(() => {
        document.getElementById('generador').textContent = numerosCpu[1];
    }, 4000);

    setTimeout(() => {
        document.getElementById('generador').textContent = numerosCpu[2];
    }, 6000);

    setTimeout(() => {
        document.getElementById('generador').textContent = numerosCpu[3];
    }, 8000);

    setTimeout(() => {
        document.getElementById('generador').textContent = numerosCpu[4];
    }, 10000);

    setTimeout(() => {
        document.getElementById('generador').textContent = '-';
    }, 12000);

    setTimeout(() => {
        document.getElementById('primerIngreso').disabled = false;
        document.getElementById('segundoIngreso').disabled = false;
        document.getElementById('tercerIngreso').disabled = false;
        document.getElementById('cuartoIngreso').disabled = false;
        document.getElementById('quintoIngreso').disabled = false;

        document.getElementById('comprobarResultados').addEventListener('click', () => {
            ingresar();

            setTimeout(() => {
                comprobar();
                darComienzo.style.display = 'block';
            }, 2000);

            document.getElementById('comprobarResultados').style.display = 'none';

            darComienzo.textContent = 'Volver a empezar';
        });
    }, 13000);

    let ingresar = () => {
        let primerIngreso = document.getElementById('primerIngreso');
        let segundoIngreso = document.getElementById('segundoIngreso');
        let tercerIngreso = document.getElementById('tercerIngreso');
        let cuartoIngreso = document.getElementById('cuartoIngreso');
        let quintoIngreso = document.getElementById('quintoIngreso');

        if(primerIngreso.value == ' ' || segundoIngreso == ' ' || tercerIngreso == ' ' || cuartoIngreso == ' ' || quintoIngreso == ' ') {
            alert('Completá todos los campos.');
        } 
        else {
            numerosIngresadosPorElUsuario[0] = parseInt(primerIngreso.value);
            numerosIngresadosPorElUsuario[1] = parseInt(segundoIngreso.value);
            numerosIngresadosPorElUsuario[2] = parseInt(tercerIngreso.value);
            numerosIngresadosPorElUsuario[3] = parseInt(cuartoIngreso.value);
            numerosIngresadosPorElUsuario[4] = parseInt(quintoIngreso.value);
        }
    }

    let comprobar = () => {
        document.getElementById('primerIngreso').disabled = true;
        document.getElementById('segundoIngreso').disabled = true;
        document.getElementById('tercerIngreso').disabled = true;
        document.getElementById('cuartoIngreso').disabled = true;
        document.getElementById('quintoIngreso').disabled = true;

        if(numerosCpu[0] == numerosIngresadosPorElUsuario[0]) {
            document.getElementById('primerIngreso').value = '✔️​';
        }
        else {
            document.getElementById('primerIngreso').value = '❌​​';
        }
        if(numerosCpu[1] == numerosIngresadosPorElUsuario[1]) {
            document.getElementById('segundoIngreso').value = '✔️​';
        }
        else {
            document.getElementById('segundoIngreso').value = '❌​​';
        }
        if(numerosCpu[2] == numerosIngresadosPorElUsuario[2]) {
            document.getElementById('tercerIngreso').value = '✔️​';
        }
        else {
            document.getElementById('tercerIngreso').value = '❌​​';
        }
        if(numerosCpu[3] == numerosIngresadosPorElUsuario[3]) {
            document.getElementById('cuartoIngreso').value = '✔️​';
        }
        else {
            document.getElementById('cuartoIngreso').value = '❌​​';
        }
        if(numerosCpu[4] == numerosIngresadosPorElUsuario[4]) {
            document.getElementById('quintoIngreso').value = '✔️​';
        }
        else {
            document.getElementById('quintoIngreso').value = '❌​​';
        }
    }
});
