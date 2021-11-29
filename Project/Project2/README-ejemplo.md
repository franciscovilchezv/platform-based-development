# Grupo "los ajedrecistas"

# Integrantes:

- Francisco Vilchez (@franciscovilchezv)
- Magnus Carlsen (@DrNykterstein)
- Andrew Tang (@penguingm1)
- Alireza Firouzja (@alireza2003)

# Tema del proyecto

`Club de ajedrez para la universidad`

## Motivación

Ante el crecimiento de integrantes de ajedrez en el club de la UTEC, se ha realizado la creación del siguiente proyecto para ayudar en ...

## Funcionalidades

| Route | Backend URLs | Funcionalidad |
| --- | --- | --- |
| `/login` | `POST /login` | Realizar login | 
| `/register` | `POST /user` | Crear un nuevo usuario | 
| `/members` | `GET /members` | Ver miembros del club de ajedrez | 
| `/tournaments` | `GET /tournaments` | Ver los torneos en el club de ajedrez | 
| `/tournaments/new` | `POST /tournaments` | Crear un nuevo torneo |
| `/tournaments/delete` | `DELETE /tournaments` | Borrar un torneo |  

| Ionic Plugin | Backend URLs (si es que usa) | Funcionalidad
| --- | --- | --- |
| `Camera` | `POST /figures` | Toma la foto a un miembro y la guarda en el server | 
| `Local Notifications` | `NA` | Envia notificacion despues de crear un miembro |

## Instalación

### Base de datos

1. Abrir MySQL
2. Ejecutar el script de inicialización de la DB:

`source chess.sql`

3. Necesita tener el siguiente usuario:

- Usuario: `utec`
- Clave: `1234567890`

### Backend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`node index.js`

### Mobile

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`ionic serve`