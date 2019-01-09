import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export default app;