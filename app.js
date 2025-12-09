const express = require('express');
const app = express();

// Choose port from environment (cloud) or default to 3000 (local)
const port = process.env.PORT || 3000;

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// Basic root endpoint for functional testing
app.get('/', (req, res) => {
  res.status(200).json({
    message: 'DevOps CI/CD Demo API',
    version: '1.0.0',
  });
});

// Start server only when running this file directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

// Export app for testing (Jest + Supertest)
module.exports = app;
