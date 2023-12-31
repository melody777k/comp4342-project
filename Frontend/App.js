import React from 'react';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        
      </Stack.Navigator>



    </NavigationContainer>
  );
}


export default App;
