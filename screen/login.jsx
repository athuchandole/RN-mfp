// screen/login.jsx
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    Alert.alert('Sign Up Details', `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <TextInput
        placeholder="Enter Email Id"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
        <Text style={styles.btntext}>Sign Up</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10',
  },
  signup: {
    fontSize: 50,
    margin: 10,
    color: 'blue',
  },
  input: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'blue',
    margin: '10',
  },
  btn: {
    backgroundColor: 'pink',
    width: '50%',
    margin: 20,
    padding: 10,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Login;
