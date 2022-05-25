import React from 'react';
import { View, Text, ScrollView } from 'react-native'
import Styles from './Styles';
import PlusIcon from 'react-native-vector-icons/FontAwesome';

const Categories = () => {
    return (
        <ScrollView>
            <View style={Styles.savingsContainer}>
                <Text style={Styles.savingsText}>My Savings</Text>

                <View style={Styles.cardContainer}>
                    <PlusIcon name="plus-square-o" size={40} color='white' />
                    <Text style={Styles.addCard}>Add New Card.</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default Categories;