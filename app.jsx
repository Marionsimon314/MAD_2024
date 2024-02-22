import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TextInput } from 'react-native';

const App = () => {
  const [textInputValue, setTextInputValue] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>
          Basic Components in RN
        </Text>
        <View style={styles.motivationContainer}>
          <Text style={styles.motivationText}>
            "Setiap langkah kecil yang Anda ambil menuju pendidikan membawa Anda lebih dekat ke arah kesuksesan yang besar."
          </Text>
        </View>
          <Image
            style={styles.image}
            source={{ uri: 'https://i.ytimg.com/vi/en7eEJezwNY/maxresdefault.jpg' }}
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://i.ytimg.com/vi/en7eEJezwNY/maxresdefault.jpg' }}
          />
          <Image
            style={styles.image}
            source={{ uri: 'https://i.ytimg.com/vi/en7eEJezwNY/maxresdefault.jpg' }}
          />
        <TextInput
          style={styles.textInput}
          placeholder="useless placeholder.."
          value={textInputValue}
          onChangeText={(text) => setTextInputValue(text)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    width: 300,
    height: 250,
    marginVertical: 10,
  },
  textInput: {
    width: '73%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
  },
  motivationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  motivationText: {
    fontStyle: 'italic',
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginHorizontal: 20,
  },
});

export default App;