import express from 'express';
import rateLimit from 'express-rate-limit';
import slowDown from 'express-slow-down';
import pg from 'pg';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import NodeCache from 'node-cache';

dotenv.config();

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    limit: 300
})

// const slowLimiter = slowDown({
//     windowMs: 15 * 60 * 1000,
//     delayAfter: 10,
//     delayMs: (hits) => hits * hits * 1000
// })

const PORT = process.env.PORT;
const URL = '/api';
const { Pool } = pg;
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});
const app = express();
const cache = new NodeCache();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// app.use(limiter)
// app.use(slowLimiter)

// METHODS -------
// Cache middleware
const cacheware = (req,res,next) => {
    const cacheData = cache.get(req.url);

    if(cacheData){ 
        console.log(`sending cache ${req.url}`)
        return res.json(cacheData)
    }
    console.log(`creating ${req.url} cache`)
    next()
}


//GET ALL
app.get(`${URL}`, cacheware, async (req, res, next) => {
    try {
        const result = await pool.query(
            'SELECT * FROM club'
        );
        cache.set(URL,result.rows,300)
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error)
    }
})

//GET ONE
app.get(`${URL}/:id`, cacheware, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        console.log(id);
        if (isNaN(id)) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        console.log(`${id}`);
        const result = await pool.query(
            `SELECT * FROM club WHERE id = ${id}`
        );
        if (result.rows.length === 0) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        cache.set(req.url,result.rows,300)
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//CREATE
app.post(`${URL}`, async (req, res, next) => {
    try {
        const { image_urls, title, price, sale_price, left_hand, loft, custom_options } = req.body;
        //TODO: create error handling as applicable
        /* if (!XXXXXX) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        } */
        const result = await pool.query(
            `INSERT INTO club (image_urls, title, price, sale_price, left_hand, loft, custom_options) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
            [image_urls, title, price, sale_price, left_hand, loft, custom_options]
        )
        res.status(201).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//UPDATE
app.patch(`${URL}/:id`, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            const error = new Error('Not found');
            error.status = 404;
            throw(error);
        }
        const { image_urls, title, price, sale_price, left_hand, loft, custom_options } = req.body;
        const result = await pool.query(
            `UPDATE club SET image_urls = $1, title = $2, price = $3, sale_price = $4, left_hand = $5, loft = $6, custom_options =$7 WHERE id = $8 RETURNING *`, 
            [id]
        );
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error);
    }
})

//DELETE
app.delete(`${URL}/:id`, async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        const result = await pool.query(
            `DELETE FROM club WHERE id = $1 RETURNING *`,
            [id]
        );
        if (result.rows.length === 0) {
            const error = new Error('Not found');
            error.status = 404;
            throw error;
        }
        res.status(200).send(result.rows);
    }
    catch (error) {
        next(error)
    }
})

//ERROR handling
app.use((error, req, res, next) => {
    console.error(error);
    const statusCode = error.status || 500;
    res.status(error.status).send({error: error.message});
})

// LISTENER ------

app.listen(PORT, (req, res) => {
    console.log(`Listening on PORT: ${PORT}`);
})