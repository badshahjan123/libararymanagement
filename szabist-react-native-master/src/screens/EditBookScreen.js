import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { updateBook } from '../api/booksApi';

export default function EditBookScreen({ route, navigation }) {
  const { book } = route.params;
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleUpdate = async () => {
    if (!title || !author) {
      Alert.alert('Please fill all fields');
      return;
    }
    await updateBook(book.id, { title, author });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Author"
        value={author}
        onChangeText={setAuthor}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Update Book" onPress={handleUpdate} />
    </View>
  );
}