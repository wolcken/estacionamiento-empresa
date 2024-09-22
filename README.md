# Estacionamiento de Empresa

Este proyecto es una aplicación de administración de estacionamiento para una empresa, donde se pueden registrar, editar y eliminar los vehículos asociados a los empleados. También cuenta con funcionalidades para filtrar por tipo de vehículo y buscar empleados por nombre.

## Funcionalidades

- Registro de empleados con información sobre su vehículo.
- Edición y eliminación de registros de empleados.
- Filtro por tipo de vehículo (Automóvil o Moto).
- Buscador por nombre de empleado.
- Interfaz de usuario amigable y responsiva.

## Tecnologías utilizadas

- **Vue 3**: Framework principal para la construcción de la interfaz.
- **Vue Router**: Para el manejo de rutas y navegación.
- **json-server**: Simula una API REST para manejar los datos.
- **CSS Flexbox**: Para un diseño responsivo y moderno.

## Requisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/).

## Instalación

Sigue los siguientes pasos para ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/wolcken/estacionamiento-empresa.git

2. Navega dentro del directorio del proyecto:

   ```bash
   cd estacionamiento-empresa

3. Instala las dependencias:

   ```bash
   npm install

4. Inicia el json-server para simular la API:

   ```bash
   json-server --watch db.json

5. Finalmente, levanta el servidor de desarrollo:

   ```bash
   npm run serve

6. Abre tu navegador y ve a la URL:

   ```bash
   http://localhost:8080