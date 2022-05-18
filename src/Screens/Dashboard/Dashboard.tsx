import React from 'react';
import {View, Text} from 'react-native';
import CustomSlider from '../../Components/CustomSlider';
import data from './data';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gold from '../Gold/Gold';
import Investement from '../Investment/Investment';
import Savings from '../Savings/Savings';

const Tab = createBottomTabNavigator();


const Dashboard = () => {
    return(
        <View style={{backgroundColor:'white'}}>
            <CustomSlider  data={data}/>

            {/* <NavigationContainer>
            <Tab.Navigator>
                {/* <Tab.Screen name="Dashboard" component={Dashboard} />                 */}
                {/* <Tab.Screen name="Save in Gold" component={Gold} />
                <Tab.Screen name="Investments" component={Investement} />
                <Tab.Screen name="Savings" component={Savings} />
            </Tab.Navigator> 
          </NavigationContainer> */}
            
        </View>
    )
}

export default Dashboard;