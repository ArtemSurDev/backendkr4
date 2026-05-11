<img width="945" height="652" alt="Снимок экрана 2026-05-11 в 15 49 03" src="https://github.com/user-attachments/assets/46e58039-47e8-41b2-8303-2b9afe9af526" />
<img width="945" height="652" alt="Снимок экрана 2026-05-11 в 15 49 03" src="https://github.com/user-attachments/assets/d9489daf-08fc-4a36-9b1d-6b6caa58b41a" />
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

<img width="954" height="852" alt="Снимок экрана 2026-05-07 в 14 13 19" src="https://github.com/user-attachments/assets/1082d456-ca94-48b4-a415-4583817beb34" />

### GET /api/users

<img width="950" height="643" alt="Снимок экрана 2026-05-07 в 14 21 21" src="https://github.com/user-attachments/assets/51390abd-6e94-4201-a5ee-998e38b63d57" />

### GET /api/users/:id

<img width="950" height="690" alt="Снимок экрана 2026-05-07 в 14 24 41" src="https://github.com/user-attachments/assets/b34c7394-eca7-4001-9728-fba16d1aba83" />

### PATCH /api/users/:id

<img width="712" height="755" alt="Снимок экрана 2026-05-07 в 14 26 04" src="https://github.com/user-attachments/assets/14e48ce7-c176-4a74-9e90-a617de615429" />

### DELETE /api/users/:id

<img width="1066" height="730" alt="Снимок экрана 2026-05-07 в 14 27 22" src="https://github.com/user-attachments/assets/e71fad53-2a41-4840-8a98-9b78b4b94031" />

# Практическая работа №20

API для управления списком пользователей с использованием MongoDB и Swagger.

## Стек

- Node.js + Express
- MongoDB + Mongoose
- Swagger UI

## Установка и запуск

npm install
npm start

Сервер: http://localhost:3000
Swagger: http://localhost:3000/api-docs

## База данных

MongoDB, коллекция `users`:

| Поле | Тип | Описание |
|---|---|---|
| _id | ObjectId | Уникальный идентификатор |
| first_name | String | Имя |
| last_name | String | Фамилия |
| age | Number | Возраст |
| created_at | Date | Время создания |
| updated_at | Date | Время обновления |

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

<img width="608" height="801" alt="Снимок экрана 2026-05-11 в 15 47 10" src="https://github.com/user-attachments/assets/17125ca6-e7ee-43c7-9859-3b6ec77f5520" />

### GET /api/users

<img width="945" height="652" alt="Снимок экрана 2026-05-11 в 15 49 03" src="https://github.com/user-attachments/assets/57cdc90a-02c8-464f-b912-56fcf3b504ae" />

### GET /api/users/:id

![GET by ID](screenshots/get-by-id.png)

### PATCH /api/users/:id

![PATCH](screenshots/patch.png)

### DELETE /api/users/:id

![DELETE](screenshots/delete.png)
