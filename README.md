# Base de Datos MySQL con Python y React
## Descripción del Proyecto
Este repositorio de GitHub contiene un proyecto que integra una base de datos MySQL, un script de Python para importar datos desde un archivo CSV y una aplicación web construida con React. El sistema almacena datos relacionados con tiendas, y puedes acceder y visualizar estos datos a través de la aplicación web.

## Componentes del Proyecto
### 1. Configuración de la Base de Datos
El proyecto utiliza una base de datos MySQL para almacenar datos relacionados con las tiendas.
Detalles de la base de datos:
Host: ------------------------------------
Usuario: ---------
Contraseña: -------------
Base de Datos: -------------
### 2. Script de Importación de Datos en Python
El script de Python (data_import.py) se conecta a la base de datos MySQL e importa datos desde un archivo CSV llamado 'Stores.csv' a la tabla 'store'.
El script utiliza las bibliotecas mysql.connector y pandas para la conectividad con la base de datos y el procesamiento del archivo CSV.
### 3. Servidor Node.js
El servidor Node.js (server.js) configura una aplicación Express para servir como el backend.
El servidor se conecta a la base de datos MySQL utilizando las mismas credenciales y recupera datos de la tabla 'store'.
### 4. Aplicación Web en React
La aplicación web está construida con React y recupera datos desde el servidor Node.js para mostrarlos en una página web.
El componente principal de la aplicación está definido en App.js.
La aplicación obtiene datos desde la ruta /api del servidor y los muestra en un formato tabular.
Inicio Rápido

## Sigue estos pasos para poner en marcha el proyecto:

Configuración de la Base de Datos:

Asegúrate de tener MySQL instalado o acceso a un servidor MySQL.
Crea una base de datos llamada store_db.
Ejecuta el script SQL proporcionado en database_schema.sql para crear la estructura de la tabla necesaria.
Importación de Datos en Python:

Instala los paquetes de Python necesarios con pip install mysql-connector-python pandas.
Modifica el script de Python (data_import.py) con la ruta correcta al archivo CSV que contiene tus datos.
Ejecuta el script de Python para importar los datos a la base de datos.
Servidor Node.js:

Instala Node.js si aún no lo tienes instalado.
En el archivo server.js, asegúrate de que los detalles de conexión a la base de datos MySQL sean correctos.
Ejecuta npm install para instalar los paquetes de Node.js necesarios.
Inicia el servidor con node server.js.
Aplicación Web en React:

Navega al directorio 'client' en el proyecto.
Ejecuta npm install para instalar los paquetes necesarios.
Inicia el servidor de desarrollo de React con npm start.
Acceso a la Aplicación:

La aplicación React debería ser accesible en tu navegador web en http://localhost:3000.
Mostrará los datos almacenados en la base de datos MySQL.
## Implementación en AWS
Este proyecto se diseñó originalmente para ser implementado en un entorno distribuido en máquinas virtuales de AWS con un balanceador de carga y réplicas de la base de datos. En las máquinas virtuales, se utilizó un servidor proxy inverso para administrar el tráfico. Puedes adaptar esta configuración a tus necesidades específicas de implementación en la nube.


