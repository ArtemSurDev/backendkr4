# Практическая работа №19
API для управления списком пользователей с использованием PostgreSQL и Swagger.
## Стек
- Node.js + Express
- PostgreSQL + Sequelize
- Swagger UI
## Установка и запуск
npm install
npm start
## API эндпоинты
| Метод | Адрес | Описание |
|---|---|---|
| POST | /api/users | Создать пользователя |
| GET | /api/users | Список пользователей |
| GET | /api/users/:id | Пользователь по ID |
| PATCH | /api/users/:id | Обновить пользователя |
| DELETE | /api/users/:id | Удалить пользователя |
## Скриншоты

### POST /api/users

![POST](screenshots/post.png)

### GET /api/users

![GET](screenshots/get-all.png)

### GET /api/users/:id

![GET by ID](screenshots/get-by-id.png)

### PATCH /api/users/:id

![PATCH](screenshots/patch.png)

### DELETE /api/users/:id

![DELETE](screenshots/delete.png)

### 404 ошибка

![404](screenshots/404.png)
