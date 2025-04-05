import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alart } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [pass, setpass] = useState('');

  const Alart = () => {
    Alart.alart('Signpu Dietails', `email:${email}, \n pass:${pass}`)
  };
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <TextInput placeholder='Enter Email Id' value='email' style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder='Enter Password' value='pass' style={styles.input}  onChangeText={setpass}/>
      <TouchableOpacity style={styles.btn} onPress={Alart}>
        <Text style={styles.btntext}>Signup</Text>
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
