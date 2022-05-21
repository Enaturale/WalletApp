import React from 'react';
import {StyleSheet} from 'react-native'
import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import Register from './src/Screens/Register/Register';
import SignIn from './src/Screens/SignIn/SignIn';
import Dashboard from './src/Screens/Dashboard/Dashboard';
import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Investement from './src/Screens/Investment/Investment';
import Savings from './src/Screens/Savings/Savings';
import Gold from './src/Screens/Gold/Gold';

import 'react-native-gesture-handler';
import Navigation from './Navigator';

const Stack = createStackNavigator();


const App = () => {

  return(
   <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component ={HomeScreen} options={{headerShown:false}}/>       
       <Stack.Screen name="signIn" component ={SignIn} options={{headerShown:false}}/>       
       <Stack.Screen name="Dashboard" component ={Navigation} options={{headerShown:false}} />      
    </Stack.Navigator>      
  
  </NavigationContainer>
  )
}
 
const styles = StyleSheet.create({

});

export default App;