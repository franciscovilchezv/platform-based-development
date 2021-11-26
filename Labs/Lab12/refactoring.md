# Refactoring

Refactoring consists of improving the internal structure of an existing program's source code, while preserving its external behavior.

## NodeJS

We continously are repeating the connection of the MySQL in our code.

```js
// Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'my_chess_club'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // Step 2: Mandar el query
  // ...

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results[0]);

    // Step 4: Cerrar la conexion
    connection.end();
  });
```

We can move the repetitive parts to a function so we can reuse that in our code. Let's create a function in a new file called `db.js`

```js
var mysql = require('mysql');

exports.query = function(myQuery, myValues, callback){
  // Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'my_chess_club'
  });

  // Establecer la conexion
  connection.connect();

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;

    // Cerrar la conexion
    connection.end();

    // Devolver los resultados
    callback(results);
  });
}
```

Applied to one of APIs will look like this:

```js
// app.js

var db = require('./db.js')

app.get('/members/:member_id', function(req, res){
  var myQuery = " SELECT member_id, fullname, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, ranking, " +
                " gender, email, picture_url, created_date, modified_date " +
                " FROM member " +
                " WHERE member_id = ? ";
  var myValues = [req.params.member_id];

  db.query(myQuery, myValues, function(results){
    res.send(results[0]);
  });
});
```

## AngularJS

`environment.ts` and `environment.prod.ts`

```ts
export const environment = {
  production: false,
  apiUrl: 'http://192.168.0.126:3000'
};
```

We will use it in our services, for example `member.service.ts`

```ts
import { environment } from 'src/environments/environment';

getMembers() {
  return this.http.get<any>(`${environment.apiUrl}/members`);
}
```

We can also include it to the picture_url we get from DB.

```html
<img *ngIf="member.picture_url" [src]="getPictureUrl(member.picture_url)"/>
```

```ts
getPictureUrl(picture_url) {
  return environment.apiUrl + "/" + picture_url;
}
```

We can add support not only for our pictures but also general URLs:

```ts
getPictureUrl(picture_url) {
    if (picture_url.includes("http://") || picture_url.includes("https://")){
      return picture_url;  
    }
    return environment.apiUrl + "/" + picture_url;
  }
```