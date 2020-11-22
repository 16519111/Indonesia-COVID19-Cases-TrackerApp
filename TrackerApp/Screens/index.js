import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Home' }} />
          {/* <Stack.Screen name='Detail' component={DetailScreen} options={{ headerTitle: 'Detail' }} /> */}
          <Stack.Screen name='Profile' component={ProfileScreen} options={{ headerTitle: 'Profile' }} />
          <Stack.Screen name='Detail' component={DetailScreen} options={{ headerTitle: 'Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
