# Mysql initial configuration

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