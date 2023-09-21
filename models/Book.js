const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, require: true },
  img: { type: String, require: true },
  author: { type: String, require: true },
  publicationYear: { type: Number, require: true },
  isbn: { type: String, require: true },
  description: { type: String, require: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
