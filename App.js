import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
   <Provider store={Store}>
     <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen        
          name="loginScreen"
          component={LoginScreen}
          options={{headerShown:false}}
        />


        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          
        />
        
      </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
