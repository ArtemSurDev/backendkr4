<img width="950" height="643" alt="Снимок экрана 2026-05-07 в 14 21 21" src="https://github.com/user-attachments/assets/51390abd-6e94-4201-a5ee-998e38b63d57" /># Практическая работа №19
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

<img width="950" height="643" alt="Снимок экрана 2026-05-07 в 14 21 21" src="https://github.com/user-attachments/assets/d2c4b357-7b3f-435e-933a-2fb6b60900ea" />

### GET /api/users/:id

![GET by ID](screenshots/get-by-id.png)

### PATCH /api/users/:id

![PATCH](screenshots/patch.png)

### DELETE /api/users/:id

![DELETE](screenshots/delete.png)

### 404 ошибка

![404](screenshots/404.png)
