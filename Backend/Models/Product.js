const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    prodid: { type: Number, required: true, unique: true },
    Productname: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    description: { type: String },
    image: { type: String },
    category: { type: String, required: true },
    subcat: { type: String, required: true },
    color: { type: [String], required: true }, // Array of colors
    size: { type: [String], required: true }, // Array of sizes
    rating: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    brand: { type: String, required: true },
    reviews: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
