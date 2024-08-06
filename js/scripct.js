let nombre = prompt('¿Cual es tu nombre?');
console.log(nombre);

function calcularMateriales() {
    let metrosCuadrados = document.getElementById('metrosCuadrados').value;
    let materialPorMetro = document.getElementById('materialPorMetro').value;
    let paredes = document.getElementById('paredes').value;

    if (metrosCuadrados === '' || materialPorMetro === '' || paredes === '') {
        alert('Por favor, ingrese valores válidos.');
        return;
    } else if (metrosCuadrados == 0 || materialPorMetro == 0 || paredes ==0 ){
        console.warn('Por favor colocar un valor distinto a 0');
        alert ('Por favor colocar un valor distinto a 0');
        return;
    }

    metrosCuadrados = parseFloat(metrosCuadrados);
    materialPorMetro = parseFloat(materialPorMetro);
    paredes = parseInt(paredes);

    let cantidadMaterial = metrosCuadrados * materialPorMetro;
    let constanteMaterial = 1.5;  // Ajusta esta constante según sea necesario
    let totalMaterial = cantidadMaterial * paredes * constanteMaterial;

    document.getElementById('resultado').innerHTML = 
        '<p>Cliente: ' + nombre + '</p>' +
        '<p>Total de material: ' + totalMaterial + ' unidades</p>';
}