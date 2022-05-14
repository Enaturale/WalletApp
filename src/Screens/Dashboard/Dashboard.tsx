import React from 'react';
import {View, Text} from 'react-native';
import CustomSlider from '../../Components/CustomSlider';
import data from './data';

const Dashboard = () => {
    return(
        <View>
            <CustomSlider  data={data}/>
        </View>
    )
}

export default Dashboard;