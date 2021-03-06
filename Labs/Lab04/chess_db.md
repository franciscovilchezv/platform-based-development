# Creating the Chess Club DB

We will explain how to create the database for the [chess scenario](./chess_scenario.md).

## Create the database

```
create database my_chess_club;

use my_chess_club;
```

## Define table structure for members

```
CREATE TABLE member (
  member_id int NOT NULL AUTO_INCREMENT,
  fullname varchar(255) NOT NULL,
  birthday DATE NOT NULL,
  ranking int,
  gender varchar(255),
  email varchar(255) NOT NULL,
  created_date DATETIME NOT NULL,
  modified_date DATETIME NOT NULL,
  PRIMARY KEY (member_id)
);
```

## Sample data

```
INSERT INTO member (fullname, birthday, ranking, gender, email, created_date, modified_date) VALUES ('Andrew Tang', '1999-11-29', 2512, 'Male', 'andrew@tang.com', now(), now());

INSERT INTO member (fullname, birthday, ranking, gender, email, created_date, modified_date) VALUES ('Alireza Firouzja', '2003-06-18', 2749, 'Male', 'alireza@firouzja.com', now(), now());

INSERT INTO member (fullname, birthday, ranking, gender, email, created_date, modified_date) VALUES ('Jorge Cori', '1995-07-30', 2689, 'Male', 'jorge@cori.com', now(), now());

INSERT INTO member (fullname, birthday, ranking, gender, email, created_date, modified_date) VALUES ('Judith Polgar', '1976-07-23', 2675, 'Female', 'judith@polgar.com', now(), now());
```

## Show data

```
SELECT member_id, fullname, birthday, ranking, gender, email, created_date, modified_date
FROM member;
```
