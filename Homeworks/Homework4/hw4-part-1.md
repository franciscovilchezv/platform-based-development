# Parte 1(5 puntos)

Deberá crear una archivo `pokemons.sql` con los comandos para crear la base datos, las tablas necesarias e insertar algunos datos de prueba. 
- Nombre BD: `pokedex`
- Tabla para guardar pokemones: `pokemon`
- Usuario: `utec`
- Password: `1234567890`

[Cree los usuarios](https://github.com/franciscovilchezv/platform-based-development/blob/main/Labs/Lab2/mysql_setup.md#create-a-new-user) necesarios en su BD local para realizar las pruebas necesarias con el usuario `utec`. **No necesita incluir los comandos para la creación del usuario en su archivo** `pokemons.sql` ya que la BD donde se corregirá su trabajo ya lo tiene creado.

El archivo será ejecutado desde el mysql:
```
mysql> source pokemons.sql
```

## API NodeJS
En el lado NodeJS se pide los siguientes servicios:

- `GET /pokemons`: Listar todos los pokemons (arreglo de pokemones)
- `GET /pokemons/:id`: Data de un solo pokemón (un objeto, NO un arreglo)
- `POST /pokemons`: Insertar un pokemón
- `PUT /pokemons/:id`: Actualizar un pokemón
- `DELETE /pokemons/:id`: Eliminar un pokemón

El proyecto será ejecutado:
```terminal
npm install
node index.js
```
