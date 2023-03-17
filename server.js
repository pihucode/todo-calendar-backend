require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const taskRoutes = require('./routes/tasks');
// const userRoutes = require('./routes/users');

const app = express();

// Middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.method, req.url);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    next();
});

// Routes
app.use('/api/tasks', taskRoutes);
// app.use('/api/users', userRoutes);

// Connect to MongoDB
const options = {
    dbName: process.env.DB_NAME,
}
mongoose.connect(process.env.MONGO_URL, options)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port: ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });
