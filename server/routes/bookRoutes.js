import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books
    console.log("📦 Books fetched:", books.length);
    res.json(books);
  } catch (err) {
    console.error("❌ Error fetching books:", err);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

export default router;
