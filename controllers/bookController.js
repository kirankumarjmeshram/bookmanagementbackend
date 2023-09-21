const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const { title, img, author, publicationYear, isbn, description } = req.body;
    const book = new Book({ title,img, author, publicationYear, isbn, description });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({"_id":-1});
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, publicationYear, isbn, description } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, {
      title,
      author,
      publicationYear,
      isbn,
      description,
    });
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
