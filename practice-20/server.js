const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users API - MongoDB',
            version: '1.0.0',
            description: 'API для управления пользователями (MongoDB)',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Локальный сервер',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect('mongodb://localhost:27017/mydatabase')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
});