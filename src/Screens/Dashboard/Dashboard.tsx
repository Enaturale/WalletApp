import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CustomSlider from '../../Components/CustomSlider';
import data from './data';
import person from './person';


const Dashboard = ({ navigation }) => {
    const gotoProfile = () => {
        navigation.navigate('Profile');
    }
    return (


        <View style={{ backgroundColor: 'white', height: '100%' }}>
            {/* Slider here */}
            <CustomSlider data={data} />

            {/* Update Profile */}
            <View>
                <Pressable style={styles.pressable} onPress={gotoProfile}>
                    <Text style={styles.pressableText} >Update your Profile!</Text>
                </Pressable>
            </View>

            {/* Transactions */}
            <View style={styles.recentContainer} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View><Text style={styles.recentText} >Recent Activities</Text></View>
                    <View><Pressable><Text style={styles.seeallText}>See All</Text></Pressable></View>

                </View>

                <ScrollView>
                    <View style={styles.listing}>
                        {person.map((person) => {
                            return (
                                <View style={styles.list}>
                                    <View>
                                        <Text style={styles.listText}>{person.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.listText}>{person.amount}</Text>
                                    </View>
                                </View>
                            )
                        })}

                    </View>
                </ScrollView>



            </View>

            {/* cards */}
            <View style={styles.cardContainer}>
                <View>
                    <Text>My Cards</Text>
                    <Text>Add New Card</Text>
                </View>

            </View>
        </View>






    )
}

const styles = StyleSheet.create({
    pressable: {
    },
    pressableText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    recentText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    seeallText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 34,

    },
    recentContainer: {
        backgroundColor: '#0693E3',
        height: '40%',
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 15,
    },
    list: {
        flexDirection: 'row',
        paddingBottom: 20,
        marginLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    listing: {

    },
    listText: {
        fontSize: 20,
        color: 'white',
        paddingRight: 40,

    },
    cardContainer: {
        backgroundColor: '#0693E3',
        height: '40%',
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 15,

    },
})

export default Dashboard;