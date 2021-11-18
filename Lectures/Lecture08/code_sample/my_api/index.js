var express = require('express');
var app = express();

var mysql = require('mysql');

var cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/members/:member_id', function(req, res){
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
  var myQuery = " SELECT member_id, fullname, DATE_FORMAT(birthday, '%Y-%m-%d') as birthday, ranking, " +
                " gender, email, created_date, modified_date " +
                " FROM member " +
                " WHERE member_id = ? ";
  var myValues = [req.params.member_id];

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results[0]);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

app.get('/members', function(req, res){
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
  var myQuery = " SELECT member_id, fullname, birthday, ranking, " +
                " gender, email, created_date, modified_date " +
                " FROM member " +
                " WHERE 1 = 1";
  var myValues = [];

  if(req.query.ranking_ht){
    myQuery += " AND ranking > ? ";
    myValues.push(req.query.ranking_ht);
  }

  if(req.query.ranking_lt){
    myQuery += " AND ranking < ? ";
    myValues.push(req.query.ranking_lt);
  }

  if(req.query.gender){
    myQuery += " AND UPPER(gender) = UPPER(?) ";
    myValues.push(req.query.gender);
  }

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});


app.post('/members', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'my_chess_club'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // ;Step 2: Mandar el query
  var myQuery = " INSERT INTO member (fullname, birthday, ranking, " +
                " gender, email, created_date, modified_date ) " +
                " VALUES (?, ?, ?, ?, ?, NOW(), NOW()); ";

  var myValues = [req.body.fullname, req.body.birthday, req.body.ranking, req.body.gender, req.body.email ];

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

app.delete('/members/:member_id', function(req, res){
  // Step 0: Definir la conexion a la BD
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'utec',
    password: '1234567890',
    database: 'my_chess_club'
  });

  // Step 1: Establecer la conexion
  connection.connect();

  // ;Step 2: Mandar el query
  var myQuery = " DELETE FROM member " +
                " WHERE member_id = ?; ";

  var myValues = [ req.params.member_id ];

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

app.put('/members/:member_id', function(req, res){
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
  var myQuery = " UPDATE member SET modified_date = NOW() ";
  var myValues = [ ];
  
  if (req.body.fullname){
    myQuery += " , fullname = ? ";
    myValues.push(req.body.fullname);
  }

  if (req.body.birthday){
    myQuery += " , birthday = ? ";
    myValues.push(req.body.birthday);
  }

  if (req.body.ranking){
    myQuery += " , ranking = ? ";
    myValues.push(req.body.ranking);
  }

  if (req.body.gender){
    myQuery += " , gender = ? ";
    myValues.push(req.body.gender);
  }

  if (req.body.email){
    myQuery += " , email = ? ";
    myValues.push(req.body.email);
  }

  myQuery += " WHERE member_id = ? "
  myValues.push(req.params.member_id);

  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

app.post('/users', function(req, res){
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
  var myQuery = " INSERT INTO user (username, password, modified_date, created_date) " +
                " VALUES (?, MD5(?), NOW(), NOW()) ";
  
  var myValues = [ req.body.username, req.body.password ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

app.post('/login', function(req, res){
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
  var myQuery = " SELECT id, username " +
                " FROM user " +
                " WHERE username = ? " +
                " AND password = MD5(?) ";
  
  var myValues = [ req.body.username, req.body.password ];
  
  connection.query(myQuery, myValues, function(error, results, fields){
    // Ya tengo el resultado del query en `results`. Si hay algun error, llegará en `error`
    if (error) throw error;
    
    // Step 3: Procesar el resultado de la BD
    res.send(results[0]);

    // Step 4: Cerrar la conexion
    connection.end();
  });
});

app.listen(3000, function(){
  console.log("Server started in port 3000!!!")
})