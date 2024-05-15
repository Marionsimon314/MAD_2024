import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Text, // Import Text
  Alert, // Import Alert
} from 'react-native';

const LoadingForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: 'Masukan username',
    password: 'Masukan password',
  });
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleInputChange = (key: string, value: string) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      // Menggunakan Alert untuk menampilkan pesan
      Alert.alert('Success', 'Data submitted successfully!');
    }, 2000);
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.textuser}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={text => handleInputChange('username', text)}
      />
      <Text style={styles.textuser}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={text => handleInputChange('password', text)}
      />
      <Button
        title={isLoginForm ? 'Login' : 'Register'}
        onPress={handleSubmit}
        disabled={loading}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 0, 25, 0.5)',
  },
  input: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 40,
    width: '100%',
  },
  text: {
    fontSize: 50, // Ukuran teks diperbesar
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    textAlign: 'left', // Teks akan diatur ke kiri
    alignSelf: 'flex-start', // Teks akan diatur ke kiri
    marginBottom: 50, // Menambahkan ruang bawah
  },
  textuser: {
    fontSize: 20, // Ukuran teks diperbesar
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'left', // Teks akan diatur ke kiri
    alignSelf: 'flex-start', // Teks akan diatur ke kiri
    marginBottom: 10, // Menambahkan ruang bawah
  },
});

export default LoadingForm;