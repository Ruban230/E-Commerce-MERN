const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Define the schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

// Pre-save middleware for password hashing
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Add the generateAuthToken method to the schema
userSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { userId: this._id }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: '1h' } // Expiry time
    );
};

// Create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
