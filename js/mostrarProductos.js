import { conexionApi } from "./conexionApi.js";

const lista = document.querySelector('[data-product]');


// Crear estructura HTML para renderizarla dinámicamente 
export default function crearCardProducto(nombre, precio, imagen, id) {  
    const producto = document.createElement("div");
    producto.className ="product-container";
    producto.innerHTML = `
    <div class="img-container">
        <img src="${imagen}" alt="${nombre}">
    </div>
    <div class="card-container--info" data-info>
        <p>${nombre}</p>
        <div class="card-container--value">
            <p>$ ${precio}</p>
            <button class="delete-button" data-id="${id}">
                <img src="./assets/delete.svg" alt="Eliminar">
            </button>
        </div>
    </div>
    `;

    return producto;
}

async function listarProductos() {
    try {
        const listaAPI = await conexionApi.listarProductos()

        listaAPI.forEach(producto => lista.appendChild(crearCardProducto(producto.nombre,producto.precio,producto.imagen, producto.id)))
    
    } catch {
        lista.innerHTML = `<h2 class ="mensaje__titulo">Ha ocurrido un problema con la conexión :( </h2>`;
    }
        
    }
 

listarProductos();