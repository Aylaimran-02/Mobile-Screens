import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AboutUsScreen from './components/AboutUsScreen';
import ContactUsScreen from './components/ContactUsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About Us" component={AboutUsScreen} />
        <Stack.Screen name="Contact Us" component={ContactUsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
