import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text } from 'react-native';
import Gold from '../../Screens/Gold/Gold';
import Investement from '../../Screens/Investment/Investment';
import Savings from '../../Screens/Savings/Savings';
import Dashboard from '../../Screens/Dashboard/Dashboard';

const Tab = createBottomTabNavigator();

const BottomTabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Dashboard" component={Dashboard} />                
                <Tab.Screen name="Save in Gold" component={Gold} />
                <Tab.Screen name="Investments" component={Investement} />
                <Tab.Screen name="Savings" component={Savings} />
            </Tab.Navigator>
        </NavigationContainer>

    )
};

export default BottomTabBar;