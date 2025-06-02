const Book = require('../models/book');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getBookById = (req, res) => {
  Book.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Book not found' });
    res.json(results[0]);
  });
};

exports.createBook = (req, res) => {
  Book.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.updateBook = (req, res) => {
  Book.update(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Book updated' });
  });
};

exports.deleteBook = (req, res) => {
  Book.delete(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Book deleted' });
  });
};