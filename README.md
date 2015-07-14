# Simple API REST NODE and MySQL
This proyect show how do a simple API REST with Node.js and MySQL

First: Run this commands in your console MySQL

```shell
CREATE DATABASE db_prueba;
USE db_prueba;

CREATE TABLE user(
user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(30)
);
```

Second: Change the data of your MySQL connection on "/database/connection/mysql_connection.mysql"

Third: Run this commands in proyect directory

```shell
npm install
node ./bin/www
```
Finally: Go in your web browser

<a href="http://localhost:3000">http://localhost:3000</a>
