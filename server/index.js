// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// dotenv.config()

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('✅ MongoDB Connected Successfully'))
//   .catch((err) => console.log('❌ MongoDB Connection Error: ', err))

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// DB Connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
