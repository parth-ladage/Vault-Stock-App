import { connectToDatabase } from './database/mongoose.ts';

(async () => {
  try {
    await connectToDatabase();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
})();