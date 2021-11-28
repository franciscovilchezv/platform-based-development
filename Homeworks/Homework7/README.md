# Homework 7 (No realizar)

Misión: Agregar un login a su aplicación de pokemones desarrollada en la [PC2](../Homework4/README.md). De esta manera, el usuario que se logee solo podrá ver sus propios pokemones.

*PD: En caso no haya desarrollado la aplicación de la PC2, le bastará con desarrollar la app donde se lista los pokemones y donde se crea los pokemones con navegación por tabs para poder completar esta tarea.*

## Requisitos específicos

1. Agregar una columna a su tabla `pokemon` que permita almacenar el dueño del pokemon.

2. Incluir dicho campo en los servicios de su proyecto NodeJS.

3. Crear un servicio web `POST /login` y `POST users/new` que permitan realizar el login y agregar un usuario respectivamente.

4. Agregar una página a su proyecto de Ionic `/register` donde se pueda registrar un nuevo usuario. Dicha página se abre al presiona un botón `register` el cual aparece en el home page.

5. Agregar una página `/login` donde se pueda hacer el login. Una vez realizado el login, se debe redireccionar a la vista que lista los pokemones. Dicha página se abre al presionar un botón login el cual aparece en el home page.

6. Los botones `login` y `register` son visibles sólamente cuando el usuario NO está loggeado.

7. El listar pokemones (`/pokemons`) debe tener un botón en el header, el cual al ser presionado redirecciona a la vista para crear un pokemon.

8. Una vez creado el pokemon, debe redireccionar a la vista de listar pokemones (no debe ser necesario especificar el dueño del pokemon. El dueño será el usuario loggeado actualmente).

9. Solo el usuario logeado puede listar pokemones y crear pokemones.

10. Agregar un boton en el homepage para hacer logout, el cual solo puede ser visto cuando el usuario esta loggeado.

## Entregables

Subir el link de su repositorio a la plataforma del curso.

**NO utilizar el mismo repositorio que usó para la PC2**

## Fecha de entrega

Lunes 13 de diciembre a las 11:59pm



