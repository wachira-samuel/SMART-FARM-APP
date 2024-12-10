import app from './app.js';
import dotenv from './config/dotenv.js';
import { connectDB } from './config/database.js';

dotenv.config();

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
