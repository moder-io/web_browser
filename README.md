
# Web Browser

Este es un proyecto de navegador web simple creado con HTML, CSS y JavaScript. La página incluye accesos directos a aplicaciones populares como Gmail, YouTube, Google Photos, Microsoft Office, y más. También permite realizar búsquedas en la web utilizando Google.

## Características

- **Accesos rápidos**: La página contiene accesos directos a varias aplicaciones como Gmail, YouTube, Google Photos, Microsoft Office, OneDrive, entre otros.
- **Buscador web**: Incluye una barra de búsqueda que redirige a los resultados en Google.
- **Notas**: Hay una sección dedicada para tomar y descargar notas localmente.
- **Interfaz personalizable**: El usuario puede agregar enlaces personalizados a las aplicaciones y personalizar ciertos elementos visuales como el tamaño del texto.

## Archivos Principales

- `index.html`: Página principal con el buscador y accesos directos.
- `apps.html`: Página con accesos rápidos a aplicaciones de Google, Microsoft y otros.
- `notas.html`: Página donde los usuarios pueden escribir y descargar notas.
- `css/estilos.css`: Archivo de estilos que controla la apariencia de la página.
- `css/barra-lateral.css`: Estilos específicos para la barra lateral.
- `js/busqueda.js`: Script que maneja la funcionalidad del buscador.
- `js/ajustes.js`: Script para la configuración de la página.
- `js/tiempo.js`: Script que gestiona el widget del tiempo, aqui deveras agregar tu api de Open Weather Map y tu localidad.

## Requisitos

- Api de Open Weather Map, puedes optener una en el siguiente link:
   `https://openweathermap.org/api`


## Instalación

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/yourusername/web_browser.git
   ```

2. Abre el archivo `index.html` en tu navegador.

## Cómo usar

- Para realizar una búsqueda, simplemente escribe el término en la barra de búsqueda y presiona "Enter".
- Para agregar una aplicación personalizada, ve a la sección de "Apps", introduce la URL de la aplicación y la imagen, y presiona "Añadir App".
- Usa la página de notas para escribir y descargar recordatorios o notas importantes.

