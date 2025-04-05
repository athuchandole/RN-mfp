import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp  = () => {
    Alert.alert('Signpu Dietails', `Email: ${email}\nPass: ${password}`); };
  return (
    <View style={styles.container}>
  <Text style={styles.signup}>Sign Up</Text>
  <TextInput
    placeholder="Enter Email Id"
    style={styles.input}
    value={email}  // State-bound value for email
    onChangeText={setEmail}  // Update email state
  />
  <TextInput
    placeholder="Enter Password"
    style={styles.input}
    secureTextEntry  // Hide the password text
    value={password}  // State-bound value for password
    onChangeText={setPassword}  // Update password state
  />
  <TouchableOpacity style={styles.btn} onPress={handleSignUp}>
    <Text style={styles.btntext}>Sign Up</Text>
  </TouchableOpacity>
  <StatusBar style="auto" />
</View>
  );
}

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
    alignItems: 'center'
  },

  btn: {
    backgroundColor: 'pink',
    width: '50%',
    // textAlign:'center',
    margin: 20,
    padding: 10,
  },

  btntext: {
    textAlign: 'center',
    fontSize: 20,
    // borderRadius:"50%",
  }
});
