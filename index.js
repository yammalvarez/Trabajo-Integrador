var pasoActual = 1;
const ULTIMO_PASO = 6;

document.addEventListener('DOMContentLoaded', () => {

    const btnSiguiente = document.getElementById("btn-siguiente");

    btnSiguiente.addEventListener('click', avanzarPaso);

});

function avanzarPaso(){
    const nombrePasoActual = "paso-" + pasoActual;

    const divActual = document.getElementById(nombrePasoActual);
    divActual.style = "display: none";

    pasoActual++;

    const nuevoNombrePasoActual = "paso-" + pasoActual;
    const nuevoDivActual = document.getElementById(nuevoNombrePasoActual);
    nuevoDivActual.style.display = "";

    if(pasoActual == ULTIMO_PASO){
        deshabilitarBotonSiguiente();
        prepararResumen();
    }
}

function deshabilitarBotonSiguiente(){
    const btnSiguiente = document.getElementById("btn-siguiente");
    btnSiguiente.disabled = true;
}

function prepararResumen() {
    const resumenNombre = document.getElementById("resumen-nombre");
    const resumenFecha = document.getElementById("resumen-fecha");
    const resumenHora = document.getElementById("resumen-hora");
    const resumenServicio = document.getElementById("resumen-servicio");
    const resumenTelefono = document.getElementById("resumen-telefono");

    resumenNombre.innerText = "Nombre: " + document.getElementById("nombre").value;
    resumenFecha.innerText = "Fecha: " + document.getElementById("fecha").value;
    resumenHora.innerText = "Hora: " + document.getElementById("hora").value;
    resumenServicio.innerText = "Servicio: " + document.getElementById("servicio").value;
    resumenTelefono.innerText = "Telefono: " + document.getElementById("telefono").value;
}
