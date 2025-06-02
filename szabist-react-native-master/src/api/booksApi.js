const API_URL = 'http://192.168.224.168:3000/api/books'; // Use your machine's IP

export const getBooks = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getBook = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  return res.json();
};

export const addBook = async (book) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return res.json();
};

export const updateBook = async (id, book) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book),
  });
  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  return res.json();
};