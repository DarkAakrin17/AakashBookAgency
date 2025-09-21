import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  SLNO: Number,
  isbn: String,
  author: String,
  title: String,
  publisher: String,
  price: Number,
  currency: String,
  category: String,
  CATEGORY2: String,
  AVAILABILITY: String,
  Image: String,
});

const Book = mongoose.model('Book', bookSchema, 'vicky_collection'); // 👈 Use third param to link exact collection

export default Book;
