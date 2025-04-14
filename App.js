// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screen/login';
import Signup from './screen/Signup';
import ForgotPassword from './screen/ForgotPassword';
import Other from './screen/other';
import RandomImg from './screen/RandomImg';
import CallGreet from './screen/CallGreet';
import SView from './screen/SView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="other" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="other" component={Other} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="RandomImg" component={RandomImg} />
          <Stack.Screen name="CallGreet" component={CallGreet} />
          <Stack.Screen name="SView" component={SView} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
