const express = require('express');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - age
 *       properties:
 *         id:
 *           type: integer
 *           description: Уникальный идентификатор
 *         first_name:
 *           type: string
 *           description: Имя пользователя
 *         last_name:
 *           type: string
 *           description: Фамилия пользователя
 *         age:
 *           type: integer
 *           description: Возраст пользователя
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: Время создания
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: Время обновления
 */

module.exports = function(User) {

    /**
     * @swagger
     * /api/users:
     *   post:
     *     summary: Создать нового пользователя
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - first_name
     *               - last_name
     *               - age
     *             properties:
     *               first_name:
     *                 type: string
     *               last_name:
     *                 type: string
     *               age:
     *                 type: integer
     *           example:
     *             first_name: Иван
     *             last_name: Иванов
     *             age: 25
     *     responses:
     *       201:
     *         description: Пользователь создан
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       400:
     *         description: Ошибка валидации
     */
    router.post('/', async (req, res) => {
        try {
            const { first_name, last_name, age } = req.body;

            if (!first_name || !last_name || !age) {
                return res.status(400).json({
                    error: 'Поля first_name, last_name и age обязательны'
                });
            }

            const user = await User.create({
                first_name,
                last_name,
                age
            });

            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    /**
     * @swagger
     * /api/users:
     *   get:
     *     summary: Получить список всех пользователей
     *     tags: [Users]
     *     responses:
     *       200:
     *         description: Список пользователей
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     */
    router.get('/', async (req, res) => {
        try {
            const users = await User.findAll({
                order: [['id', 'ASC']]
            });
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    /**
     * @swagger
     * /api/users/{id}:
     *   get:
     *     summary: Получить пользователя по ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: ID пользователя
     *     responses:
     *       200:
     *         description: Данные пользователя
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: Пользователь не найден
     */
    router.get('/:id', async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    /**
     * @swagger
     * /api/users/{id}:
     *   patch:
     *     summary: Обновить данные пользователя
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: ID пользователя
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               first_name:
     *                 type: string
     *               last_name:
     *                 type: string
     *               age:
     *                 type: integer
     *           example:
     *             age: 30
     *     responses:
     *       200:
     *         description: Пользователь обновлен
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: Пользователь не найден
     */
    router.patch('/:id', async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }

            const { first_name, last_name, age } = req.body;
            const updateData = {};

            if (first_name !== undefined) updateData.first_name = first_name;
            if (last_name !== undefined) updateData.last_name = last_name;
            if (age !== undefined) updateData.age = age;

            updateData.updated_at = new Date();

            await user.update(updateData);

            res.json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    /**
     * @swagger
     * /api/users/{id}:
     *   delete:
     *     summary: Удалить пользователя
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: ID пользователя
     *     responses:
     *       200:
     *         description: Пользователь удален
     *       404:
     *         description: Пользователь не найден
     */
    router.delete('/:id', async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }

            await user.destroy();

            res.json({ message: 'Пользователь удален' });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

    return router;
};