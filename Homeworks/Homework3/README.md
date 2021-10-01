# Homework 3 (5 puntos)

El dueño de un restaurante quiere registrar su menú en una base de datos y de esa manera poder mostrarlo en una página web.

La información que desea guardar es:

- Nombre del plato
- Precio

Incluir campos de auditoría (created_date y modified_date)

## Parte 1 (1 punto)

Cree un archivo `.sql` con los comandos necesarios para crear la base de datos que necesita para cubrir dichos requerimientos. Incluir inserts con datos de prueba

## Parte 2 (2 puntos)

Cree una API `GET /url` que muestre la información de la BD.

## Parte 3 (2 puntos)

Cree una Web Application utilizando Angular que llame a la API `GET /url` y muestre la información en una tabla!

## Entregables

Subir a la plataforma del curso el link de su repositorio, el cual debe de contener:

- Su archivo `.sql` que cree la base de datos
- Un directorio llamado `backend` con su API.
- Un directorio llamado `frontend` con su Web Application que consume la API.

## Calificación

Para la corrección se realizará los siguiente procedimientos:

1. Se ejecutará los comandos de su archivo `.sql`
2. Se entrará a su backend, se ejecutará `npm install` y luego `node index.js` para ejecutar el backend.
3. Se entrará al frontend. Se ejecutará `npm install` y luego `ng serve --open`. Su página web deberá mostrar los platos del menú

## Fecha de entrega

Jueves 7 de octubre 11:59pm.