# Proyecto 1

## Goal

Creación de una aplicación web.

## Requisitos

Su proyecto 1 debe al menos hacer uso de los siguientes requisitos:

- Uso de una base de datos MySQL para guardar información necesaria del proyecto.
- Desarrolo de una API en NodeJS usando Express framework.
- Creación de una Web Application usando Angular.

Requisitos específicos:

- Creación de al menos 8 vistas (en otras palabras, 8 rutas en su Angular router).
- Desarrollo de al menos 8 servicios web. Debe haber utilizado los métodos GET, PUT, POST y DELETE.
- Todos sus servicios web deben de ser consumidos desde la Aplicación Web.

## Entregables

### Link del repositorio

El link del repositorio del proyecto debe ser subido al canvas. Dicho repositorio debe incluir:

- Archivo `.sql` necesario para crear la BD del proyecto.
- Un directorio `backend` con las APIs del proyecto.
- Un directorio `frontend` con la aplicación web.
- Un README.md en el cual detalle:
  - Nombre del Grupo
  - Nombre de Integrantes y ID de GitHub
  - Tema del proyecto
  - Motivación
  - Funcionalidades
  - Guía de instalación en la que explica cómo una persona puede descargar su proyecto y correrlo en su computadora local.
  
Puede encontrar un ejemplo del README en el siguiente [link](./README-ejemplo.md).

*Dicho link debe ser subido a más tardar el 4 de noviembre a las 23:59pm*

### Autocalificación grupal

En el canvas del curso, hay una tarea llamada Proyecto 1. En ella deberá poner la lista de todos los integrates y un valor del 0-10 indicando qué tan comprometido estuvo con el proyecto. 

- 0: nada comprometido
- 10: totalmente comprometido

**Debe también incluirse a usted mismo en la calificación**. Puede incluir cualquier observación adicional al final si lo desea.

Puede encontrar un ejemplo en el siguiente [link](./autocalificacion.md).

*La autocalificación grupal debe ser subida a más tardar el 4 de noviembre a las 23:59pm.* De lo contrario, usted no obtendrá nota alguna por el trabajo.

## Presentación

El equipo (uno o más representantes) presentará el proyecto el día **5 de noviembre del 2021**.

La presentación (10 minutos) deberá incluir:

- Título del proyecto y motivación (1 minuto)
- Funcionalidades: Listar las 8 vistas web (urls), los 8 servicios web (urls + http method) y la funcionalidad que realiza. (2 minutos)
- DEMO del proyecto (4 minutos)
- Preguntas al grupo (3 minutos)

Se le sugiere a los integrantes del grupo mostrar su cámara durante la presentación **sólo si es que es posible**.

Código de vestimenta: Libre

## Orden de Presentación (TBD)

1. Grupo de la suerte (777)
2. Grupo 4 (DONE)
3. Grupo `null`
4. Grupo ojito ojito (DONE)
5. Grupo sandía (DONE)
6. Grupo tenedorcín (DONE)
7. Grupo solo contra el mundo
8. Grupo solo x2

## Calificación del proyecto

El puntaje máximo a obtener en el proyecto es de 20 puntos.

### Presentación (16 puntos)

El alumno presentará los flujos y se procederá a calificar si cada url realiza lo indicado.

- Funciona: 2 puntos o 1 punto + pregunta(s) de 1 punto.
- No funciona: 0 puntos

Ejemplo basado en el caso "Club de ajedrez":

| Angular Route | Funciona | Puntaje
| --- | --- | --- |
| `/login` | SI | 2 | 
| `/register` | SI | 2 | 
| `/members` | SI | 2 | 
| `/tournaments` | SI | 1 + 1 | 
| `/tournaments/new` | SI | 2 |
| `/tournaments/delete` | SI | 1 + 1 |
| `/tournaments/:tournament_id/user` | NO | 0 |
| `/tournaments/:tournament_id/user` | NO | 0 |

La calificación se detentrá si el proyecto **se cae**.

### Preguntas (4 puntos)

- Pregunta 1-4: 1-4 puntos
