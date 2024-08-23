# Documentación de Componentes del Proyecto de Formularios

Este proyecto proporciona una página de documentación para los componentes que se necesitan implementar en el sistema de gestión de formularios. La documentación detalla la estructura y las características de cada componente, así como sus interacciones y funcionalidades.

## Índice

- [Introducción](#introducción)
- [Componentes](#componentes)
  - [Navbar](#navbar)
  - [Información del Proyecto](#información-del-proyecto)
  - [Envíos Dashboard](#envíos-dashboard)
  - [Barra de Enlaces](#barra-de-enlaces)
  - [Modal Compartir](#modal-compartir)
  - [Login](#login)
  - [Version Formulario](#version-formulario)
  - [Historial del Formulario](#historial-del-formulario)
  - [Recolectar Datos](#recolectar-datos)
  - [Sub Menú Datos](#sub-menú-datos)
  - [Sección Tabla](#sección-tabla)
  - [Sección Informes](#sección-informes)
  - [Sección Imágenes](#sección-imágenes)
  - [Sección Descargas](#sección-descargas)
  - [Sección Mapa](#sección-mapa)
  - [Sección General](#sección-general)
  - [Sección Compartir Proyecto](#sección-compartir-proyecto)
  - [Crear/Editar Formulario](#creareditar-formulario)
  - [Usar Formulario](#usar-formulario)

## Introducción

Este documento proporciona una descripción detallada de los componentes necesarios para la implementación del sistema de formularios. Incluye la estructura de cada componente, sus funcionalidades y la interacción entre ellos.

## Componentes

### Navbar

- **Ubicación**: En la parte superior de la página.
- **Descripción**: Contiene un menú vertical con cuatro opciones: Resumen, Formulario, Datos y Configuración.

### Información del Proyecto

- **Ubicación**: Ocupa 2/3 de la página de resumen.
- **Descripción**: Muestra detalles del proyecto, como título, estado, propietario, fechas importantes, y sector.

### Envíos Dashboard

- **Ubicación**: Ocupa 2/3 de la página de resumen, debajo de la Información del Proyecto.
- **Descripción**: Muestra gráficos de barras basados en el período seleccionado y estadísticas de envíos.

### Barra de Enlaces

- **Ubicación**: Ocupa 1/3 de la página de resumen, a la derecha de la Información del Proyecto.
- **Descripción**: Contiene enlaces directos y opciones para acceder a diferentes secciones de datos.

### Modal Compartir

- **Ubicación**: Aparece al presionar el botón 'Compartir Proyecto' en la Barra de Enlaces.
- **Descripción**: Configura los permisos de uso compartido y genera un enlace para compartir el proyecto.

### Login

- **Descripción**: Formulario de inicio de sesión con campos para email y contraseña, un checkbox para recordar sesión, y enlaces para registrarse.

### Version Formulario

- **Ubicación**: Muestra la versión actual del formulario, fechas de modificación e implementación, con opciones para implementar de nuevo.

### Historial del Formulario

- **Descripción**: Muestra un historial de versiones del formulario, con opción para clonar versiones anteriores.

### Recolectar Datos

- **Descripción**: Administra el estado del formulario y permite envíos anónimos. Incluye botones para copiar la URL del formulario y abrirlo.

### Sub Menú Datos

- **Ubicación**: Menú vertical a la izquierda de la página de datos.
- **Descripción**: Permite acceder a diferentes representaciones de los datos enviados: Tabla, Informes, Galería, Descarga, Mapa.

### Sección Tabla

- **Descripción**: Muestra datos en una tabla con opciones para ocultar campos y pantalla completa. Incluye paginación y botones para editar y eliminar registros.

### Sección Informes

- **Descripción**: Genera informes automatizados de datos no procesados con opciones para personalizar la representación gráfica.

### Sección Imágenes

- **Descripción**: Galería de imágenes con filtros por campo y fechas.

### Sección Descargas

- **Descripción**: Permite exportar datos en diferentes formatos (XLS, CSV, GeoJSON, KML) y muestra una lista de exportaciones disponibles para descargar.

### Sección Mapa

- **Descripción**: Muestra datos geoespaciales en un mapa OpenStreetMap si hay datos de tipo "geopoint".

### Sección General

- **Descripción**: Permite editar el nombre del proyecto, descripción, y sector. Incluye botones para guardar, archivar, y eliminar el proyecto.

### Sección Compartir Proyecto

- **Descripción**: Configura permisos de uso compartido y genera un enlace para compartir el proyecto.

### Crear/Editar Formulario

- **Descripción**: Permite crear o editar formularios, agregar preguntas y seleccionar tipos de datos. Incluye opciones para arrastrar y ordenar los campos.

### Usar Formulario

- **Descripción**: Permite realizar envíos al formulario y ver los componentes para completar. Incluye campos para diferentes tipos de datos.
