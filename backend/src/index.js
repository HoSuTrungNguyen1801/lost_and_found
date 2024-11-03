const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const app = express();
const port = process.env.PORT || 5173;

routes(app);

mongoose.connect('mongodb+srv://lostnfound:k2HOMRjQjlQ4zr5t@cluster0.sxv75.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err.message);
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
