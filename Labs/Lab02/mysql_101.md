# MySQL 101

The very basics

## Create a database

A database (also called a schema) is the place where all the information will be stored. For example, if we are going to store information for our online shop, we are probably going to have a database called `my_online_shop` which will have information (tables) for `customers`, `orders`, `products`, etc...

`create database my_online_shop;`

You can view the databases you have created by running:

`show databases;`

To start manipulating one database type:

`use my_online_shop;`

## Manipulating data

### Create tables

[Syntax](https://www.w3schools.com/sql/sql_create_table.asp)

[Datatypes](https://www.w3schools.com/sql/sql_datatypes.asp)

Summary datatypes:
- Use `int` for integer values
- Use `varchar(255)` for string (size limit 255)
- Use `float` for floating values

Tables store the information we want. Let's create our first table:

```
CREATE TABLE product (
  product_id int,
  product_name varchar(255),
  stock int,
  price float
);
```

You can list the tables you have with the following command:

`show tables;`

You can view the structure of your table by running:

`desc product;`

### Insert data

[Syntax](https://www.w3schools.com/sql/sql_insert.asp)

*Don't forget the single quotes for strings*

```
INSERT INTO product (product_id, product_name, stock, price)
VALUES (1, 'iPhone 13', 1000, 699.99);
```

#### NULL Values

If you don't want to insert a value, you can use the keywork `NULL`

```
INSERT INTO product (product_id, product_name, stock, price)
VALUES (2, 'iPhone 13', NULL, 699.99);
```

### Select (view) data

[Syntax](https://www.w3schools.com/sql/sql_select.asp)

```
SELECT  product_id, product_name, stock, price
FROM    product;
```

#### Where clause

You can also filter values useing a [where clause](https://www.w3schools.com/sql/sql_where.asp)

```
SELECT  product_id, product_name, stock, price
FROM    product
WHERE   product_id = 1;
```

### Update data

[Syntax](https://www.w3schools.com/sql/sql_update.asp)

```
UPDATE  product
SET     product_name = 'Samsung Galaxy',
        price = 399.99
WHERE   product_id = 1;
```

### Delete data

[Syntax](https://www.w3schools.com/sql/sql_delete.asp)

```
DELETE FROM product
WHERE       product_id = 1;
```

### Alter a table

[Syntax](https://www.w3schools.com/sql/sql_alter.asp)

Allows you to add, remove or change columns (or their types).

#### Add

```
ALTER TABLE product
ADD description varchar(255);
```

#### Update

```
ALTER TABLE product
MODIFY COLUMN description varchar(100);
```

#### Remove

```
ALTER TABLE product
DROP COLUMN description;
```

### Delete a table

[Syntax](https://www.w3schools.com/sql/sql_drop_table.asp)

```
DROP TABLE product;
```

## Constraining data

Adding contrains allows us to restrict the data that we are using and reference its value in a different table, which is called *joining tables*.

### Not null values

During the table creation, you can define that a value can't be null in a table:

```
CREATE TABLE product (
  product_id int NOT NULL,
  product_name varchar(255) NOT NULL,
  stock int,
  price float
);
```

### Defining an ID

During the table creation, you can define an attribute as the ID (Primary Key) of the table:

```
CREATE TABLE product (
  product_id int NOT NULL,
  product_name varchar(255),
  stock int,
  price float,
  PRIMARY KEY (product_id)
);
```

A Primary Key makes an attribute NOT NULL by default, but it is a good practice to mention it.

### Referencing an ID from another table

During the table creation, you can restrict that one (or more) of their values come from another table and they must exist there. This is called referencing a Foreign Key.

Let's create a purchase_order table that references a product_id:

```
CREATE TABLE purchase_order (
  purchase_order_id int,
  product_id int,
  quantity int,
  total_price float,
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);
```

You can make the foering key also a primary key by additionally applying the same command `PRIMARY KEY`.

```
CREATE TABLE purchase_order (
  purchase_order_id int,
  product_id int,
  quantity int,
  total_price float,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);
```

If you want to have more than one primary key, you need to separate them by comma.


```
CREATE TABLE purchase_order (
  purchase_order_id int,
  product_id int,
  quantity int,
  total_price float,
  PRIMARY KEY (purchase_order, product_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);
```

### Autoincrement

You can add `AUTO_INCREMENT` to a value so it automatically will insert the next proper value during an insert. It is commonly used in primary keys.

```
CREATE TABLE product (
  product_id int NOT NULL AUTO_INCREMENT,
  product_name varchar(255),
  stock int,
  price float,
  PRIMARY KEY (product_id)
);
```
