const jwt = require('jsonwebtoken');
const JWT_SECRET= "rubanis@12goodgirl";

// Middleware for authentication
const authMiddleware = (req, res, next) => {
    // Get the token from the 'Authorization' header
    const token = req.header('Authorization');

    // If no token is provided, send a 401 response
    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        // Verify the token using the JWT_SECRET (from environment variable)
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach the decoded user data to the request object for future use
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If the token is invalid or expired, send a 400 response
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Export the middleware so it can be used in other files
module.exports = authMiddleware;
 