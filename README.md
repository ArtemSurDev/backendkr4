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

### 404 ошибка

![404](screenshots/404.png)
