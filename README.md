# Aplicación de Precios

Aplicación web para la visualización y gestión de precios de productos en diferentes establecimientos.

## Características

- Filtrado de establecimientos por tipo, ubicación y producto
- Paginación de resultados
- Exportación de datos a Excel
- Interfaz de usuario intuitiva

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

## Requisitos

- Node.js (versión recomendada: 10.x o superior)
- NPM (Node Package Manager)

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Ecreea-TI/FrontAppPrecios.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor:
   ```bash
   node server.js
   ```

## Estructura del Proyecto

- `index.html`: Página principal de la aplicación
- `styles.css`: Estilos de la aplicación
- `server.js`: Servidor Express.js
- `data/`: Directorio con archivos de datos y filtros
- `public/`: Archivos estáticos

## Configuración

La aplicación utiliza un servidor Express.js para servir los archivos estáticos y manejar las solicitudes API. La configuración del servidor se encuentra en el archivo `server.js`.