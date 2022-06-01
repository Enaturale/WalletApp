import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';



import SignIn from './src/Screens/SignIn/SignIn';
import Dashboard from './src/Screens/Dashboard/Dashboard';


import Investement from './src/Screens/Investment/Investment';
import Savings from './src/Screens/Savings/Savings';
import Gold from './src/Screens/Gold/Gold';

import Categories from "./src/Screens/Categories/Categories";
import Profile from "./src/Screens/Profile/Profile";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function DashbaordStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{
                title: 'Welcome',
                headerStyle:{
                    backgroundColor: '#13437B',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize:25,
                    alignItems:'center'
                }
            }} />
            <Stack.Screen name="Gold Page" component={Gold} options={{headerShown:false}} />
            <Stack.Screen name="Savings Page" component={Savings} options={{headerShown:false}}/>
            <Stack.Screen name="Investment Page" component={Investement}  options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

function GoldStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Gold" component={Gold} options={{headerShown:false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />            
        </Stack.Navigator>

    )
}
function SavingsStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Savings" component={Savings} options={{headerShown:false}}/>
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>            
        </Stack.Navigator>

    )
}

function CategoriesStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="My Wallet" 
                component={Categories} 
                options={{
                    title: 'Categories',
                    headerStyle:{
                        backgroundColor: '#13437B',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize:25,
                        alignItems:'center'
                    }
                }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>            
        </Stack.Navigator>

    )
}

function ProfileStackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Profile Page" 
                component={Profile} 
                options={{
                    title: 'Profile',
                    headerStyle:{
                        backgroundColor: '#13437B',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                    }
                }}  
                
            />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>            
        </Stack.Navigator>

    )
}
// function InvestmentStackScreen() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Investment" component={Investement} options={{headerShown:false}} />
//             <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />            
//         </Stack.Navigator>

//     )
// }

export default function Navigation(props) {
    return (
      
            <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#13437B',
                tabBarstyle:{
                    backgroundColor: '#85A7E1',
                },
                tabBarLabelStyle:{
                    fontSize: 15,
                    fontWeight: 'bold',
                }
            }}
            >
                <Tab.Screen 
                  name="Home" 
                  component={DashbaordStackScreen} 
                  options={{
                      headerShown:false,
                      tabBarIcon: ({color, size}) => (
                          <MaterialIcon name = "home" color={color} size={size} />
                      )
                }}
                  />
                <Tab.Screen 
                    name="Categories" 
                    component={CategoriesStackScreen} 
                    options={{
                        headerShown:false,
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcon name = "category" color={color} size={size} />
                        )
                  }}
                    
                    />
                <Tab.Screen 
                     name="Profile" 
                     component={ProfileStackScreen} 
                     options={{
                        headerShown:false,
                        tabBarIcon: ({color, size}) => (
                            <MaterialIcon name = "person" color={color} size={size} />
                        )
                        
                        }}
                    />
                {/* <Tab.Screen name="Investment" component={InvestmentStackScreen} options={{headerShown:false}} /> */}
            </Tab.Navigator>
       
    )
}




