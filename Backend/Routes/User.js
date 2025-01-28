const express = require('express');
const User = require('../Models/User'); // Ensure the correct path to the User model
const router = express.Router();

router.get('/getusers', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});






//new work

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: 'User already exists' });

        // Create a new user
        const newUser = new User({ username, email, password });
        await newUser.save();

        // Generate a token
        const token = newUser.generateAuthToken(); // This should work now
        res.status(201).json({ token, user: { id: newUser._id, username, email } });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});


// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Compare passwords
        const isMatch = await (password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

        // Generate token
        const token = user.generateAuthToken();
        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
        console.error('Error logging in user:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;


module.exports = router; // Export the router
