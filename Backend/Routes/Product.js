const express = require('express');
const Product = require('../Models/Product'); // Ensure the correct path to the Product model
const router = express.Router();
const mongoose = require('mongoose');

// Get all products
router.get('/fetchproducts', async (req, res) => {
    try {
        const data = await Product.find(); // Use `await` since `.find()` is asynchronous
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

// Add products

router.post('/add-products', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error saving product:', error.message);
        res.status(500).json({ message: 'Failed to save product', error: error.message });
    }
});

router.delete('/deleteproduct/:id', async (req, res) => {
    try {
        // Validate the ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }

        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.json({ message: 'Product deleted' });
    } catch (error) {
        console.error('Error deleting product:', error.message);
        res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
})

router.put('/updateproduct/:id', async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: 'Invalid product ID format' });
        }
    
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
        
        res.json(updatedProduct);
        
    } catch (error) {
        console.error('Error updating product:', error.message);
        res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
})


// Export the router
module.exports = router;
