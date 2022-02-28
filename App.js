import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomePage from './screens/WelcomePage.js'
import Login from './screens/LoginPage.js'
import Chatscreen from './screens/ChatScreen'


const Stack = createNativeStackNavigator();


export default function App() {


  return (
    <NavigationContainer  >
      <Stack.Navigator
        initialRouteName="Welcome" screenOptions={{
          headerStyle: { backgroundColor: '#F24472' }
        }}
      >
        <Stack.Screen name="Welcome"
          component={WelcomePage}
          options={{

            title: 'Welcome',
          }} />

        <Stack.Screen name="SignIn"
          component={Login}
          options={{

            title: 'Sign In',
            headerLeft: () => (
              false
            )
          }} />

        <Stack.Screen
          name="ChatRoom"
          component={Chatscreen}
          options={{
            title: 'Chat Room',

            headerLeft: () => (
              false
            )
          }} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
