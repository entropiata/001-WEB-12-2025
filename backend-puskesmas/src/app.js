const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/artikel', require('./routes/artikel.routes'));
app.use('/api/pelayanan', require('./routes/pelayanan.routes'));
app.use('/api/inovasi', require('./routes/inovasi.routes'));
app.use('/api/contact', require('./routes/contact.routes'));

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Puskesmas Backend API' });
});

module.exports = app;
