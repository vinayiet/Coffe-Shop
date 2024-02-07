// Import any necessary dependencies
import jwt from 'jsonwebtoken';

// Define the authentication middleware function
const authMiddleware = (req, res, next) => {
    // Get the token from the request headers or cookies
    const token = req.headers.authorization || req.cookies.token;

    // Check if the token exists
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify the token (e.g., using JWT)
        // const decoded = jwt.verify(token, 'your-secret-key');

        // Attach the decoded token to the request object for further use
        // req.user = decoded;

        // Call the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

// Export the middleware function
export default authMiddleware;
