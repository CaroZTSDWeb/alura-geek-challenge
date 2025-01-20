import { conexionApi } from "./conexionApi.js";

const formulario = document.querySelector('[data-formulario');

async function agregarProducto(evento) {

    evento.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const precio = document.querySelector('[data-precio]').value;
    const imagen = document.querySelector('[data-imagen]').value;

    try {
        await conexionApi.enviarProducto(nombre,precio,imagen);
        formulario.reset(); 

    } catch (e) {
        alert(e);
    }
    
}

function manejarReset() {
    mensajeError.textContent = '';
}


formulario.addEventListener("submit", evento =>agregarProducto(evento));
formulario.addEventListener("reset", evento =>manejarReset);
