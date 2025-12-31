const express = require('express');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/taskRoutes');
const connectDB = require('./config/db');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/task', taskRoutes);

connectDB();

app.get('/', (req, res) => {
    res.send('API server is up and running ....');
});

const PORT = process.env.PORT || 5000;

app.listen( PORT, ()=> console.log(`Server is running on: http://localhost:${PORT}`));