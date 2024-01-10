import express from 'express';
import { Pool } from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const URL = '/api';
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

// METHODS -------

// LISTENER ------

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})