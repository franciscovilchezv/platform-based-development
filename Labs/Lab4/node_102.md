# Accessing MySQL from NodeJS

We will work over the progress done in the [previous guide about APIs](./api_101.md).

## Installation

We will begin installing the [module for `mysql`](https://www.npmjs.com/package/mysql).

```
npm install mysql --save
```

## Defining the connection

First of all, we need to tell the library the details of the database that we want to connect. Let's import the library and use its function `createConnection` to define the connection.

```
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'youruser',
  password : 'yourpassword',
  database : 'yourdbname'
});
```

## Have our SQL statement ready

The first thing we want to do is create a function that returns the members of the chess club registered in the database. The SQL statement that we need is the next one:

```
SELECT member_id, full_name, birthday, ranking,
gender, email, created_date, modified_date
FROM member; 
```

We can test it in our MySQL terminal to verify if it works.

## Creating defining our API URL and the function

Let's link the API that can be invoked to return the members of the chess club. Let's use `GET /members`.

```
app.get('/members', getMembers);

function getMembers(req, res){
  // The code that access the DB
  res.send("Here goes the whole data");
}
```

## Accessing the DB

The steps for accessing the DB from NodeJS are the next ones:

0. Setup the connection.
1. Open the connection.
2. Send the query: Let's define it in a variable first to make it more readable.
3. Process the result from the query in a *callback function*: Let's use an *anonymous function* this time. By default, there are some parameters received in a *callback function* for the mysql module (error, results, fields).
4. Close the connection.

Let's include those in our `getMembers` function:

```
function getMembers(req, res){
  
  // Step 0: Setup the connection
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'youruser',
    password : 'yourpassword',
    database : 'yourdbname'
  });

  // Step 1: Open the connection
  connection.connect();

  // Step 2: Send the query
  const myQuery = " SELECT member_id, fullname, " +
                " birthday, ranking, " +
                " gender, email, created_date, " +
                " modified_date " +
                " FROM member; ";

  connection.query(myQuery, function (error, results, fields) {
    
    // Step 3: Process the result inside the callback
    res.send(results);

    // Step 4: Close the connection
    connection.end();
  });

}
```

## ER_NOT_SUPPORTED_AUTH_MODE

If you get the error ER_NOT_SUPPORTED_AUTH_MODE, run the following command in your `mysql` instance.

```
mysql> ALTER USER 'youruser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'youpassword';

mysql> FLUSH PRIVILEGES;
```
