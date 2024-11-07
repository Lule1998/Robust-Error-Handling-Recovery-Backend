const mongoose = require('mongoose');
const config = require('../config/config');
const User = require('../models/user.model');

const users = [
  {
    name: 'John Doe',
    email: 'john@example.com'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com'
  },
  {
    name: 'Bob Wilson',
    email: 'bob@example.com'
  },
  {
    name: 'Alice Brown',
    email: 'alice@example.com'
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('Connected to MongoDB');

    // Brisanje postojećih podataka
    await User.deleteMany({});
    console.log('Cleaned database');

    // Unos novih podataka
    await User.insertMany(users);
    console.log('Sample users inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();