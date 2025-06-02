const db = require('../config/db');

const Book = {
  getAll: (callback) => {
    db.query('SELECT * FROM books', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
  },
  create: (book, callback) => {
    db.query('INSERT INTO books SET ?', book, callback);
  },
  update: (id, book, callback) => {
    db.query('UPDATE books SET ? WHERE id = ?', [book, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM books WHERE id = ?', [id], callback);
  }
};

module.exports = Book;