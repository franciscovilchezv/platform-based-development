# Homework 4 (PC2) (10 puntos)

El visualizador de pokemones de la maestra Pokemón Misty se averió! Y lo necesita urgentemente para ver con qué pokemones cuenta. 

Nosotras(os) somos su mano derecha y por lo tanto debemos hacer una aplicación para que pueda seguir viendo sus pokemones. Esta debe estar realizada con **NodeJS** y **Ionic**. 

La información que desea guardar para cada pokemon es: 
- Nombre
- Altura
- Categoría
- Peso
- Habilidad
- Tipo (si el pokemón tiene varios tipos, puede elegir sólo uno de ellos)
- URL de la imagen del pokemón.

Debe incluir un campo _id_ como **primary key**. 

Puede consultar el siguiente [link](https://www.pokemon.com/us/pokedex) para obtener información de prueba de algunos pokemones.

## Requerimientos

### Parte 1
[Creación de una API en NodeJS y comunicación con base de datos MySQL.](./hw4-part-1.md)

### Parte 2
[Creación de aplicación con Ionic y comunicación con el backend. ](hw4-part-2.md)

## Fecha de entrega

29 de Noviembre

## Entregables

**Realice la creación del proyecto desde cero con `ionic start`. Caso contrario, el trabajo no será calificado.**

Crear un repositorio en GitHub: 
- Un archivo `pokedex.sql` para crear la base de datos.
- Un directorio llamado `backend` con su API.
- Un directorio llamado `frontend` con la aplicación web que consume la API.

Subir el link del repositorio a la plataforma del curso.

## Calificación
Para la corrección se realizará los siguiente procedimientos en el siguiente orden:

1. Se ejecutará los comandos de su archivo `pokedex.sql`. Dicho archivo será ejecutado desde el `mysql` con el comando `source`.
2. Se entrará a su backend, se ejecutará `npm install` y luego `node index.js` para ejecutar el backend.

De funcionar ambos pasos correctamente, se le otorgará 1 punto.

3. Se entrará al frontend. Se ejecutará `npm install` y luego `ionic serve`. La aplicación deberá contener todas las views indicadas en el requerimiento.

Por cada vista que funcione correctamente (incluida la interacción con el API) se le asignará 1.5 puntos. Si la funcionalidad no es la correcta, se le otorgará 0.5 punto.

Total: 10 puntos

**La calificación se dentendrá en el momento en que una de los pasos realizados, o alguna de las vistas accedidas retorne un error**
