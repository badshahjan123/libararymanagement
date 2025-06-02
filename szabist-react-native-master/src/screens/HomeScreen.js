import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import BookList from '../components/BookList';
import { getBooks, deleteBook } from '../api/booksApi';

export default function HomeScreen({ navigation }) {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadBooks);
    return unsubscribe;
  }, [navigation]);

  const handleDelete = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Book" onPress={() => navigation.navigate('AddBook')} />
      <BookList
        books={books}
        onEdit={(book) => navigation.navigate('EditBook', { book })}
        onDelete={handleDelete}
      />
    </View>
  );
}