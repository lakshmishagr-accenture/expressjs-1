require('dotenv').config();
const app = require('./app');
const { connectToMongo } = require('./db/mongoose');

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectToMongo(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start app:', err);
    process.exit(1);
  }
}

start();
