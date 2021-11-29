# Proyecto 2

## Goal

Creación de una Aplicación Móvil

## Requisitos

Su proyecto debe tener los mismos requisitos del proyecto 1 pero aplicado a Ionic:

- Uso de una base de datos MySQL para guardar información necesaria del proyecto.
- Desarrolo de una API en NodeJS usando Express framework.
- Creación de una Aplicación móvil usando Ionic.

Requisitos específicos:

- Creación de al menos 6 vistas (en otras palabras, 6 rutas en su router).
- Desarrollo de al menos 6 servicios web. Debe haber utilizado los métodos GET, PUT, POST y DELETE.
- Todos sus servicios web deben de ser consumidos desde la Aplicación Web.

Adicionalmente, debe de cubrir los siguientes requisitos:

- Uso de al menos 2 plugins de Ionic
- Deploy de la app en un dispositivo móvil.

## Entregables

### Link del repositorio

El link del repositorio del proyecto debe ser subido al canvas. Dicho repositorio debe incluir:

- Archivo `.sql` necesario para crear la BD del proyecto.
- Un directorio `backend` con las APIs del proyecto.
- Un directorio `mobile` con la aplicación móvil.
- Un README.md en el cual detalle:
  - Nombre del Grupo
  - Nombre de Integrantes y ID de GitHub
  - Tema del proyecto
  - Motivación
  - Funcionalidades
  - Guía de instalación en la que explica cómo una persona puede descargar su proyecto y correrlo en su computadora local.
  
Puede encontrar un ejemplo del README en el siguiente [link](./README-ejemplo.md).

*Dicho link debe ser subido a más tardar el 16 de diciembre a las 23:59pm*

Si desea, puede utilizar el mismo repositorio que utilizó para el proyecto 1.

### Autocalificación grupal

En el canvas del curso, hay una tarea llamada Proyecto 2. En ella deberá poner la lista de todos los integrates y un valor del 0-10 indicando qué tan comprometido estuvo con el proyecto. 

- 0: nada comprometido
- 10: totalmente comprometido

**Debe también incluirse a usted mismo en la calificación**. Puede incluir cualquier observación adicional al final si lo desea.

Puede encontrar un ejemplo en el siguiente [link](../Project1/autocalificacion.md).

*La autocalificación grupal debe ser subida a más tardar el 16 de diciembre a las 23:59pm.* De lo contrario, usted no obtendrá nota alguna por el trabajo.

## Presentación

El equipo (uno o más representantes) presentará el proyecto el día **16 de diciembre y el 21 de diciembre del 2021**.

La presentación (10 minutos) deberá incluir:

- Título del proyecto y motivación (1 minuto)
- Funcionalidades: Listar las 8 vistas web (urls), los 8 servicios web (urls + http method) y la funcionalidad que realiza. (1 minuto).
- Plugins: Mencionar los plugins que utilizará y con que propósito. (1 minuto)
- DEMO del proyecto (4 minutos)
- Preguntas al grupo (3 minutos)

Se le sugiere a los integrantes del grupo mostrar su cámara durante la presentación **sólo si es que es posible**.

Código de vestimenta: Libre

## Orden de Presentación

Se lanzará [dadito](https://www.google.com/search?q=Roll%20a%20die&stick=H4sIAAAAAAAAAOOwfcRoxC3w8sc9YSnNSWtOXmNU5uILyM-pzEhNKUrMcclMThUS5OLMK82NL85MSS0WYpFiEmDjAQAnwJaNNwAAAA), empezando con los grupos con más de 1 integrante.

### 16 de diciembre

- Grupo de la suerte (777) [WO]
- Grupo 4
- Grupo tenedorcín
- Grupo ojito ojito
- Grupo sandía
- Grupo solo x3 [WO]
- Grupo `null`
- Grupo solo contra el mundo
- Grupo solo x2

### 21 de diciembre

TBD

## Calificación del proyecto

El puntaje máximo a obtener en el proyecto es de 20 puntos.

### Presentación (16 puntos)

**La presentación debe ser realizada en un dispositivo móvil.**

El alumno presentará los flujos y se procederá a calificar si cada url y plugin realiza lo indicado.

**Se tomará en cuenta el aspecto visual de la aplicación durante la calificación (parte de pregunta adicional).**

- Funciona: 2 puntos directos o 1 punto + 1 punto de pregunta(s) o aspecto visual.
- No funciona: 0 puntos

Ejemplo basado en el caso "Club de ajedrez":

| Ionic Route | Funciona | Puntaje
| --- | --- | --- |
| `/login` | SI | 2 | 
| `/register` | NO | 0 |
| `/members` | SI | 2 | 
| `/tournaments` | SI | 1 + 1 | 
| `/tournaments/new` | NO | 0 |
| `/tournaments/delete` | SI | 1 + 1 |

| Ionic Plugin | Funciona | Puntaje
| --- | --- | --- |
| `Camera` | SI | 1 + 1 | 
| `Local Notifications` | NO | 0 |

La calificación se detentrá si el proyecto **se cae**.

### Preguntas (4 puntos)

- Pregunta 1-4: 1-4 puntos
