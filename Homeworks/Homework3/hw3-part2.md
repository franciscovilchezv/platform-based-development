## Parte 3 (2 puntos)

Cree una Web Application utilizando Angular lamado `my-restaurant` que llame a la API `GET /url` y muestre la información en una tabla!

### Error al hacer push

El proyecto de Angular crea por defecto una configuracion de GitHub para el proyecto, lo cual puede generar conflicto cuando queramos hacer el push, ya que va a detectar un proyecto github dento de otro proyecto github. Para arreglar eso, podemos borrar la configuracion que tenemos de GitHub en nuestro proyecto de Angular.

Para hacer eso, nos vamos a la carpeta de nuestro proecto de Github:

`cd my-restaurant`

Y borramos la configuracion de GitHub, la cual se encuentra en la carpeta `.git`:

`rm -rf .git`
