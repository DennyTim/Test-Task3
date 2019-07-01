### Перед запуском необходимо указать переменные окружения создав файлик .env, внутри директории `config`, в таком формате:

```.env
#Enviroment
NODE_ENV = production
#Port
PORT = <number port>
DB_URI = sql2.freemysqlhosting.net
#DB USER
DB_USER = <username>
#DB NAME
DB_NAME = <db name>
#DB PASSWORD
DB_PASSWORD = <user password>
```

## Доступные маршруты для просмотра данных:

1. `http://localhost:3001/users` GET - посмотреть все пользователей
2. `http://localhost:3001/users/2` GET - посмотреть конкретного пользователя под id = 2
3. `http://localhost:3001/users/over/20` GET - получить пользователей у которых id больше 20
4. `http://localhost:3001/users` POST - создать пользователя

За основу разработки взят архитектурный паттерн MVC.
