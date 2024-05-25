import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import apiRouter from './routers/api.js';
import pageRouter from './routers/pages.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from ./public
app.use(express.static(join(__dirname, '../public')));

// Use the main router for '/'
app.use('/', pageRouter);

// Use the API router for '/api'
app.use('/api', apiRouter);

export default app;
