const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const userRoutes = require('./routes/users');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
const PORT = 3000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Users API',
            version: '1.0.0',
            description: 'API для управления пользователями (PostgreSQL)',
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

const sequelize = new Sequelize('mydatabase', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false
});

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('NOW()')
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('NOW()')
    }
}, {
    tableName: 'users',
    timestamps: false
});

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.use('/api/users', userRoutes(User));

sequelize.authenticate()
    .then(() => {
        console.log('Connected to PostgreSQL');
        return sequelize.sync({ force: false });
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
            console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
        });
    })
    .catch(err => {
        console.error('Connection error:', err);
    });