const mongoose = require('mongoose');

async function connectToMongo(uri) {
  if (!uri) {
    throw new Error('MONGODB_URI is not set in environment');
  }

  // Mongoose connection options can be adjusted as needed
  await mongoose.connect(uri, {
    // useNewUrlParser, useUnifiedTopology are defaulted in recent mongoose versions
  });

  console.log('Connected to MongoDB');
}

module.exports = { connectToMongo };
