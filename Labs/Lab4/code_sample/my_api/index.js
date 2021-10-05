var express = require('express');
var app = express();

var mysql = require('mysql');

/*

SELECT member_id, fullname, birthday, ranking,
gender, email, created_date, modified_date
FROM member; 

*/

app.get('/sayhi', hello_world);

function hello_world(req, res){
    res.send("Hello world, this is my API!!");
}

app.get('/members', getMembers);

function getMembers(req, res){

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
    var myQuery =   " SELECT member_id, fullname, birthday, ranking, " +
                    " gender, email, created_date, modified_date " +
                    " FROM member; "

    connection.query(myQuery, function(error, results, fields){
        // Ya tengo el resultado del query en `results`
        
        // Step 3: Procesar el resultado de la BD
        res.send(results);

        // Step 4: Cerrar la conexion
        connection.end();
    });   
}

app.listen(3000, function(){
    console.log("Server started in port 3000!!!")
})