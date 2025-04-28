// App.js
import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screen/login';
import Signup from './screen/Signup';
import ForgotPassword from './screen/ForgotPassword';
import Other from './screen/other';
import RandomImg from './screen/RandomImg';
import CallGreet from './screen/CallGreet';
import SView from './screen/ScrollView/SView';
import HView from './screen/ScrollView/HView';
import Flist from './screen/Flatlist/Flist';
import FlatListScreen from './screen/FlatListScreen';
import ScrollViewScreen from './screen/ScrollViewScreen';

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
          <Stack.Screen name="HView" component={HView} />
          <Stack.Screen name="Flist" component={Flist} />
          <Stack.Screen name="FlatListScreen" component={FlatListScreen} />
          <Stack.Screen name="ScrollViewScreen" component={ScrollViewScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
