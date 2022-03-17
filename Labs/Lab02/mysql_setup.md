# Mysql initial configuration

## Installation

```
sudo apt update
sudo apt install mysql-server
```

### Update: install Mysql > 11 November (maybe some things in configuration may change)

```
sudo apt update
sudo apt install default-mysql-server
```

[Configure the user](./mysql_setup.md) for your MySQL Server

## Start Server

`sudo /etc/init.d/mysql start`

## Login with default user

`sudo mysql`

## Create a new user

Type it with the quotes.

```
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';

FLUSH PRIVILEGES;
```

## Exit MySQL Prompt
`exit`

## Login with new
`mysql -u newuser -p`

## Stop
`sudo /etc/init.d/mysql stop`
