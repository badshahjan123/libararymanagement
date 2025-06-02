import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const BookList = ({ books, onEdit, onDelete }) => (
  <FlatList
    data={books}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={{ padding: 10, borderBottomWidth: 1 }}>
        <Text>Title: {item.title}</Text>
        <Text>Author: {item.author}</Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Button title="Edit" onPress={() => onEdit(item)} />
          <View style={{ width: 10 }} />
          <Button title="Delete" onPress={() => onDelete(item.id)} />
        </View>
      </View>
    )}
  />
);

export default BookList;