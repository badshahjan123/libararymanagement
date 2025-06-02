import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { addBook } from '../api/booksApi';

export default function AddBookScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAdd = async () => {
    if (!title || !author) {
      Alert.alert('Please fill all fields');
      return;
    }
    await addBook({ title, author });
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
      <Button title="Add Book" onPress={handleAdd} />
    </View>
  );
}