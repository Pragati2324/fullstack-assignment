const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const cardRoutes = require('./routes/Card');

// Use routes
app.use('/api', cardRoutes);


// Test Endpoint
app.get('/ping', (req, res) => {
  res.send('Server is running');
});

// Connect to MongoDB (Replace <your_mongodb_uri> with your MongoDB connection string)
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0/card', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => console.log(err));
