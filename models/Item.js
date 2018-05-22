const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    gst: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    createdAt: Date
});

mongoose.model('items', itemSchema);