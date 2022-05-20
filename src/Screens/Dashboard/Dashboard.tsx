import React from 'react';
import {View, Text} from 'react-native';
import CustomSlider from '../../Components/CustomSlider';
import data from './data';




const Dashboard = () => {
    return(
       
        <View style={{ backgroundColor: 'white' }}>
            <CustomSlider data={data} />
        </View>  

       
           
           
         
    )
}

export default Dashboard;