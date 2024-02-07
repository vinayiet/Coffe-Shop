import express from 'express';
const router = express.Router();

// GET /products
router.get('/', (req, res) => {
    // Logic to fetch all products from the database
    res.send('Get all products');
});

// GET /products/:id
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to fetch a specific product by ID from the database
    res.send(`Get product with ID ${productId}`);
});

// POST /products
router.post('/', (req, res) => {
    // Logic to create a new product in the database
    res.send('Create a new product');
});

// PUT /products/:id
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to update a specific product by ID in the database
    res.send(`Update product with ID ${productId}`);
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to delete a specific product by ID from the database
    res.send(`Delete product with ID ${productId}`);
});

module.exports = router;
