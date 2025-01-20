# AluraGeek


**AluraGeek** es una aplicación web que permite a los usuarios gestionar una lista de productos. Los usuarios pueden **visualizar**, **agregar** y **eliminar** productos, utilizando tecnologías frontend modernas y un servidor JSON simulado.

## 🔥 Características

- **Visualizar** productos existentes.
- **Agregar** nuevos productos proporcionando nombre, precio e imagen.
- **Eliminar** productos de la lista.
- Manejo dinámico del DOM para actualizar productos sin recargar la página.
- Conexión con un servidor simulado mediante **json-server** para realizar operaciones **CRUD**.

## 💻 Tecnologías Utilizadas

- **HTML5/CSS**: Estructura y diseño.
- **JavaScript (ES6 Modules)**: Lógica e interacción.
- **json-server**: API RESTful simulada.
- **Fetch API**: Solicitudes HTTP.


## 🚀 Instalación

### Requisitos previos

- **Node.js** instalado.

### Pasos

1. Clona este repositorio:

   ```bash
   git clone https://github.com/CaroZTSDWeb/alura-geek-challenge.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd alura-geek-challenge
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor JSON:

   ```bash
   npm start
   ```

5. Abre `index.html` en tu navegador.

## 🗂️ Estructura del Proyecto

- **index.html**: Estructura de la aplicación.
- **styles/reset.css**: Reinicio de estilos.
- **styles/style.css**: Estilos personalizados.
- **js/**: Lógica de conexion, mostrar, agregar y eliminar productos.
- **db.json**: Base de datos simulada para **json-server**.
- **package.json**: Dependencias y scripts.

## 🛠️ API Simulada

**json-server** simula una API RESTful con las siguientes rutas:

- `GET /productos`: Lista los productos.
- `POST /productos`: Crea un nuevo producto.
- `DELETE /productos/:id`: Elimina un producto.

## 📋 Uso de la Aplicación

1. **Visualizar Productos**: Los productos se cargan automáticamente desde el servidor simulado al abrir la página.
   
2. **Agregar Producto**: Completa el formulario con nombre, precio y URL de la imagen, luego haz clic en **"Enviar"**.
   
3. **Eliminar Producto**: Haz clic en el ícono de la papelera para eliminar un producto.

---
Challenge de  Alura Latam