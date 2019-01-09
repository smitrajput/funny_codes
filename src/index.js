import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';

let app = express();
let db = mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export default app;