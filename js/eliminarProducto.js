import { conexionApi } from "./conexionApi.js";


document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar el contenedor principal
    const contenedorProductos = document.querySelector('[data-product]');

 
async function eliminarProducto(evento) {
    evento.preventDefault();

    // Obtener el botón clickeado
    //console.log("Evento disparado:", evento); 
    const boton = evento.target.closest('.delete-button');
    //console.log("Botón clickeado:", boton);

    // Obtener el ID del producto desde el atributo 'data-id'
    const idProducto = boton.getAttribute('data-id');
    //console.log(`Producto a eliminar: ${idProducto}`);

    try {
        
        await conexionApi.eliminarProductoEnApi(idProducto);
        
        // Eliminar el producto del DOM
        //boton.closest('.product-container').remove();
        

    } catch (e) {
        alert(e);
    }
}

    // Delegar el evento 'click' al contenedor
    contenedorProductos.addEventListener('click', async evento =>eliminarProducto(evento));
        
});













