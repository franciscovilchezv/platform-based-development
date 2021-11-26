var express = require('express');
var app = express();

var db = require('./db.js')

var fs = require("fs");

var picturesDirectory = 'figures/';

var cors = require('cors');
app.use(cors());

app.use(express.json({limit: '50mb'}));

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

app.get('/members', function(req, res){
  var myQuery = " SELECT member_id, fullname, birthday, ranking, " +
                " gender, email, picture_url, created_date, modified_date " +
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

  db.query(myQuery, myValues, function(results){
    res.send(results);
  });
});


app.post('/members', function(req, res){
  var myQuery = " INSERT INTO member (fullname, birthday, ranking, " +
                " gender, email, picture_url, created_date, modified_date ) " +
                " VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW()); ";

  var myValues = [req.body.fullname, req.body.birthday, req.body.ranking, req.body.gender, req.body.email, req.body.picture_url ];

  db.query(myQuery, myValues, function(results){
    res.send(results);
  });
});

app.delete('/members/:member_id', function(req, res){
  var myQuery = " DELETE FROM member " +
                " WHERE member_id = ?; ";

  var myValues = [ req.params.member_id ];

  db.query(myQuery, myValues, function(results){
    res.send(results);
  });
});

app.put('/members/:member_id', function(req, res){
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

  if (req.body.picture_url){
    myQuery += " , picture_url = ? ";
    myValues.push(req.body.picture_url);
  }

  myQuery += " WHERE member_id = ? "
  myValues.push(req.params.member_id);

  db.query(myQuery, myValues, function(results){
    res.send(results);
  });
});

app.post('/users', function(req, res){
  var myQuery = " INSERT INTO user (username, password, modified_date, created_date) " +
                " VALUES (?, MD5(?), NOW(), NOW()) ";
  
  var myValues = [ req.body.username, req.body.password ];

  db.query(myQuery, myValues, function(results){
    res.send(results);
  });
});

app.post('/login', function(req, res){
  var myQuery = " SELECT id, username " +
                " FROM user " +
                " WHERE username = ? " +
                " AND password = MD5(?) ";
  
  var myValues = [ req.body.username, req.body.password ];

  db.query(myQuery, myValues, function(results){
    res.send(results[0]);
  });
});

app.post('/figures', function(req, res){
  var fileName = `${new Date().getTime()}.jpeg`;
  var picture_url = `${picturesDirectory}${fileName}`;

  fs.writeFile(`${picture_url}`, req.body.picture, 'base64', function(error) {
    if (error) throw error;

    res.send({picture_url: picture_url});
  });
})

app.use('/figures', express.static('figures'))

app.listen(3000, function(){
  console.log("Server started in port 3000!!!")
})