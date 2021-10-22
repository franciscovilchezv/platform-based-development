# SQL 102

## Changing column names returned in a `SELECT`

Whhenever you do a SELECT statement, by default the name it will displayed in the columns headers are going to be the name of the columns (member_id, fullname, birthday, etc...), for example:

```sql
SELECT member_id, fullname, birthday, ranking, gender, email, created_date, modified_date
FROM member
```

Result:

```
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
| member_id | fullname         | birthday   | ranking | gender | email                | created_date        | modified_date       |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
|         1 | Andrew Tang      | 1999-11-29 |    2512 | Male   | andrew@tang.com      | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         2 | Alireza Firouzja | 2003-06-18 |    2749 | Male   | alireza@firouzja.com | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         3 | Jorge Cori       | 1995-07-30 |    2689 | Male   | jorge@cori.com       | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         4 | Judith Polgar    | 1976-07-23 |    2675 | Female | judith@polgar.com    | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
4 rows in set (0.00 sec)
```

However, you can customize the name you want to be returned as the header of the column using the command `as`. For example, let's imagine that we want to show the column `member_id` with the name `chess_club_member_id`. We can do it in the following way:

```sql
SELECT member_id as chess_club_member_id, fullname, birthday, ranking, gender, email, created_date, modified_date
FROM member
```

```
+----------------------+-------------------+------------+---------+--------+----------------------+---------------------+---------------------+
| chess_club_member_id | fullname          | birthday   | ranking | gender | email                | created_date        | modified_date       |
+----------------------+-------------------+------------+---------+--------+----------------------+---------------------+---------------------+
|                    1 | Andrew Tang       | 1999-11-29 |    2512 | Male   | andrew@tang.com      | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|                    2 | Alireza Firouzja  | 2003-06-18 |    2749 | Male   | alireza@firouzja.com | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|                    3 | Jorge Cori        | 1995-07-30 |    2689 | Male   | jorge@cori.com       | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|                    4 | Judith Polgar     | 1976-07-23 |    2675 | Female | judith@polgar.com    | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
+----------------------+-------------------+------------+---------+--------+----------------------+---------------------+---------------------+
4 rows in set (0.01 sec)
```

## SQL Functions.

So far we have used a few functions, which we will review now

### `NOW()`

The function `NOW()` can be used whenver you need the current time. You can use it for example when you need to insert the current time in a table:

```SQL
INSERT INTO member (fullname, birthday, ranking, gender, email, created_date, modified_date)
VALUES ('Viswanathan Anand', '1969-12-11', 2774, 'Male', 'vishy@anand.com', NOW(), NOW());
```

Which will insert the current time in the `created_date` and `modified_date`.

### `UPPER()` and `LOWER()`

Turn values into uppercase or lowercase. They are useful if you want to do case insensitive comparisons, for example:

```sql
SELECT member_id, fullname, birthday, ranking, gender, email, created_date, modified_date
FROM member
WHERE UPPER(gender) = UPPER('male');
```

```
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
| member_id | fullname         | birthday   | ranking | gender | email                | created_date        | modified_date       |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
|         1 | Andrew Tang      | 1999-11-29 |    2512 | Male   | andrew@tang.com      | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         2 | Alireza Firouzja | 2003-06-18 |    2749 | Male   | alireza@firouzja.com | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         3 | Jorge Cori       | 1995-07-30 |    2689 | Male   | jorge@cori.com       | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
3 rows in set (0.00 sec)
```

Or also if you want to return values in a upper or lower case. For example, in this example we are turning the fullname in uppercase:

```sql
SELECT member_id, UPPER(fullname), birthday, ranking, gender, email, created_date, modified_date
FROM member
```

```
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
| member_id | UPPER(fullname)  | birthday   | ranking | gender | email                | created_date        | modified_date       |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
|         1 | ANDREW TANG      | 1999-11-29 |    2512 | Male   | andrew@tang.com      | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         2 | ALIREZA FIROUZJA | 2003-06-18 |    2749 | Male   | alireza@firouzja.com | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         3 | JORGE CORI       | 1995-07-30 |    2689 | Male   | jorge@cori.com       | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         4 | JUDITH POLGAR    | 1976-07-23 |    2675 | Female | judith@polgar.com    | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
4 rows in set (0.00 sec)
```

As you can see, the name of the header for the fullname column is now `UPPER(fullname)` instead of `fullname`. We can combine this with the command `as` in order to get the column name we want.

```sql
SELECT member_id, UPPER(fullname) as member_name, birthday, ranking, gender, email, created_date, modified_date
FROM member
```

```
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
| member_id | member_name      | birthday   | ranking | gender | email                | created_date        | modified_date       |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
|         1 | ANDREW TANG      | 1999-11-29 |    2512 | Male   | andrew@tang.com      | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         2 | ALIREZA FIROUZJA | 2003-06-18 |    2749 | Male   | alireza@firouzja.com | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         3 | JORGE CORI       | 1995-07-30 |    2689 | Male   | jorge@cori.com       | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
|         4 | JUDITH POLGAR    | 1976-07-23 |    2675 | Female | judith@polgar.com    | 2021-10-04 21:23:25 | 2021-10-04 21:23:25 |
+-----------+------------------+------------+---------+--------+----------------------+---------------------+---------------------+
4 rows in set (0.00 sec)
```

### `PASSWORD()`

`PASSWORD()` can be used in a similar way to `UPPER()` or `LOWER()`. The difference is that `PASSWORD()` converts a string into a 255 characters sequence. It is used usually before storing a password in the database, so the real password is never visible in the database.

## Joining values from different tables

So far, we have learned how to read values from a single table; however, sometimes we may need to get values from different tables in a single query.

Let's imagine we have a table `tournaments`, in which we store the tournament's names with the winner of the tournament.

```sql 
CREATE TABLE tournament (
  tournament_id INT NOT NULL AUTO_INCREMENT,
  tournament_name VARCHAR(255),
  winner_id INT,
  PRIMARY KEY (tournament_id),
  FOREIGN KEY (winner_id) REFERENCES member (member_id)
);

INSERT INTO member (member_id, fullname, birthday, ranking, gender, email, created_date, modified_date)
VALUES (5, 'Viswanathan Anand', '1969-12-11', 2774, 'Male', 'vishy@anand.com', NOW(), NOW());

INSERT INTO member (member_id, fullname, birthday, ranking, gender, email, created_date, modified_date)
VALUES (6, 'Magnus Carlsen', '1990-11-30', 2847, 'Male', 'magnus@carlsen.com', NOW(), NOW());

INSERT INTO tournament (tournament_name, winner_id) VALUES ('World Chess Championship 2012', 5);

INSERT INTO tournament (tournament_name, winner_id) VALUES ('World Chess Championship 2014', 6);
```

As you can see, we are storing the member_id of the winner, because of that, if we want to list the tournaments with their respective winner, we would get something like this.

```sql
SELECT tournament_id, tournament_name, winner_id
FROM tournament;
```

```
+---------------+-------------------------------+-----------+
| tournament_id | tournament_name               | winner_id |
+---------------+-------------------------------+-----------+
|             1 | World Chess Championship 2012 |         5 |
|             2 | World Chess Championship 2014 |         6 |
+---------------+-------------------------------+-----------+
2 rows in set (0.00 sec)
```

Which is fine, however, if we want to get the details of the winner, for example, their fullname, ranking, etc... we would need to do another query to get that information. This can be fixed using what is called as `JOIN` in SQL. `JOIN` will allow us to join data from different tables in a single query. There are different types of joins. Since this is not a database course, we will learn one simple way to join data:

```sql
SELECT tournament.tournament_id, tournament.tournament_name, member.fullname, member.ranking
FROM tournament, member
WHERE tournament.winner_id = member.member_id;
```

As you can see we are including the list of tables we want in the `FROM` section. Additionally, in the `WHERE` we specify that the `winner_id` attribute in the `tournament` table references to the `member_id` attribute in the `member` table. Finally, we list the columns we need including the name of the table before the column name.

The previous query will give us the following result:

```
+---------------+-------------------------------+-------------------+---------+
| tournament_id | tournament_name               | fullname          | ranking |
+---------------+-------------------------------+-------------------+---------+
|             1 | World Chess Championship 2012 | Viswanathan Anand |    2774 |
|             2 | World Chess Championship 2014 | Magnus Carlsen    |    2847 |
+---------------+-------------------------------+-------------------+---------+
2 rows in set (0.00 sec)
```