## How to run backend?

- ### Install Java-17 and JavaC

- ### Install Spring Tool Suite

- ### Setting up MySQL
	- Download MySQL
	- Enable and start `mysqld`
    ```
    sudo systemctl enable --now mysqld
    ```
  - Install MySQL
    ```
    sudo mysql_secure_installation
    ```

- ### Edit **`src/resources/application.properties`**
  - Edit MySql Database configuration
	```
	create database YOUR_DATABASE_NAME
	```
  - Paste your stripe payment gateway secret key
  - Paste your email and app password
	> [How to generate app password for email?](https://www.youtube.com/watch?v=T0Op3Qzz6Ms)

- ### Change file permissions [in Linux]
	```
	chmod +x ./mvnw
	```

- ### Start backend server locally
	```
	export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
	mvn spring-boot:run
	```

## How to run frontend?
```
> npm i
> npm start
```


> For further help: https://www.youtube.com/watch?v=9jkCJNoT4QA
