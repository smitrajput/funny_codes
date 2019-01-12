import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import Code from './models/code';

let app = express();
let db = mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/codes', (req, res) => {
    Code.find({}, (err, codes) => {
        if(err) res.send(err);
        res.json(codes);
    })
})

export default app;