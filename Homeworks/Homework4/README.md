# Homework 4

El visualizador de pokemones del maestro Pokemón Ash Ketchum se averió! Y lo necesita urgentemente para ver con qué pokemones cuenta. 

Nosotros somos la mano derecha de Ash y por lo tanto debemos hacer una aplicación para que Ash pueda seguir viendo sus pokemones. Esta debe estar realizada con **NodeJS** y **Ionic**. 

La información que desea guardar para cada pokemon es: 
- Nombre
- Altura
- Categoría
- Peso
- Habilidad
- Tipo
- URL de la imagen del pokemón.

Debe incluir un campo _id_ como **primary key**. 

## Requerimientos

### Parte 1
[Creación de una API en NodeJS y comunicación con base de datos MySQL.](./hw4-part-1.md)

### Parte 2
[Creación de aplicación con Ionic y comunicación con el backend. ](hw4-part-2.md)

## Fecha de entrega

29 de Noviembre

## Entregables
Crear un repositorio en GitHub: 
- Un archivo `pokemons.sql` para crear la base de datos.
- Un directorio llamado `backend` con su API.
- Un directorio llamado `frontend` con la aplicación web que consume la API. 

## Calificación
Para la corrección se realizará los siguiente procedimientos:

1. Se ejecutará los comandos de su archivo `pokemons.sql`. Dicho archivo será ejecutado desde el `mysql` con el comando `source`.
2. Se entrará a su backend, se ejecutará `npm install` y luego `node index.js` para ejecutar el backend.
3. Se entrará al frontend. Se ejecutará `npm install` y luego `ionic serve`. La aplicación deberá contener todas las views indicadas en el requerimiento.
