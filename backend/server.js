import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import noteRoutes from './routes/notes.js'; // Import routes

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mount Routes
app.use('/api/notes', noteRoutes);

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});