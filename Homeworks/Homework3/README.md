# Homework 3 (5 puntos)

El dueño de un restaurante quiere registrar su menú en una base de datos y de esa manera poder mostrarlo en una página web.

La información que desea guardar es:

- Nombre del plato
- Precio

Incluir campos de auditoría (created_date y modified_date)

## Requerimientos

### Parte 1

Requisitos: [Creación de una API en NodeJS y comunicación con una base de datos MySQL.](./hw3-part1.md)

### Parte 2

Requisitos: [Creación de una applicación web y comunicación con el backend](./hw3-part2.md)

## Fecha de entrega

Parte 1: Miércoles 6 de octubre 11:59pm.

Parte 2: Lunes 11 de octubre 11:59pm.

## Entregables

Crear un único repositorio con el siguiente contenido:

### Incluir para la parte 1

- Su archivo `.sql` que cree la base de datos
- Un directorio llamado `backend` con su API.

### Incluir para la parte 2

- Un directorio llamado `frontend` con su Web Application que consume la API.

Subir a la plataforma del curso el link de su repositorio.

## Calificación

Para la corrección se realizará los siguiente procedimientos:

1. Se ejecutará los comandos de su archivo `.sql`
2. Se entrará a su backend, se ejecutará `npm install` y luego `node index.js` para ejecutar el backend.
3. Se entrará al frontend. Se ejecutará `npm install` y luego `ng serve --open`. Su página web deberá mostrar los platos del menú
