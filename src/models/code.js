import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let CodeSchema = new Schema({
    codeType: { type: String, required: true },
    comments: { type: Number, required: true },
    lahwfs: { type: Number, required: true }
});