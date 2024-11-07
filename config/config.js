require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/error-handling-demo',
  nodeEnv: process.env.NODE_ENV || 'development'
};

