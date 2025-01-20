async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");

    const conexionConvertida = conexion.json();
    
   // console.log(conexionConvertida);
   return conexionConvertida
}


async function enviarProducto(nombre,precio,imagen) {
    const conexion = await fetch("http://localhost:3001/productos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            nombre:nombre,
            precio:precio,
            imagen:imagen
        })
    })

    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el producto.");
    }
    
    return conexionConvertida;
}


async function eliminarProductoEnApi(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
    
    const conexionConvertida = await conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al eliminar el producto.");

    }
    console.log(`Producto con id ${id} eliminado exitosamente`);
    
    return conexionConvertida;
    
}


export const conexionApi={
    listarProductos, enviarProducto, eliminarProductoEnApi
}

//listarProductos();