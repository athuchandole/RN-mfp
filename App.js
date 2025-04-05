import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <TextInput placeholder='Enter Email Id' style={styles.input}/>
      <TextInput placeholder='Enter Password' style={styles.input}/>
<TouchableOpacity style={styles.btn}>
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
    padding:'10',
    
  },

  signup:{
    fontSize:50,
    margin:10,
    color:'blue',
  },

  input:{
    width : '80%',
    borderWidth:2,
    borderColor:'blue',
    margin:'10',
    alignItems:'center'
  },

  btn:{
    backgroundColor:'pink',
    width:'50%',
    // textAlign:'center',
    margin:20,
    padding: 10,
  },

  btntext:{
    textAlign:'center',
    fontSize:20,
    // borderRadius:"50%",
  }
});
