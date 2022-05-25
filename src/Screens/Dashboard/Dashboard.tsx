import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CustomSlider from '../../Components/CustomSlider';
import data from './data';
import person from './person';
import PlusIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Dashboard = ({ navigation }) => {
    const gotoProfile = () => {
        navigation.navigate('Profile');
    }
    return (


        <View style={{ backgroundColor: 'white', height: '100%' }}>
            {/* Title */}
            <Text style={{ fontSize: 25, color: '#B80000',marginHorizontal: 30, marginTop: 20, fontWeight: 'bold' }}>
                My Wallet
            </Text>

            {/* Slider here */}
            <CustomSlider data={data} />


            <View style={{ backgroundColor: 'white', height: 800, borderRadius: 25, }}>
                {/* Update Profile */}
                <View style={{ marginTop: 10, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 30, }}>
                    <Pressable style={styles.pressable} onPress={gotoProfile}>
                        <Text style={styles.pressableText}>Update your Profile!</Text>
                    </Pressable>
                </View>

                {/* Transactions */}
                <View style={styles.recentContainer} >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View><Text style={styles.recentText} >Recent Activities</Text></View>
                        <View><Pressable><Text style={styles.seeallText}>See All</Text></Pressable></View>

                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.listing}>
                            {person.map((person) => {
                                return (
                                    <View>
                                        <View style={styles.list}>
                                            <View>
                                                <Text style={styles.listText1}>{person.name}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.listText}>{person.amount}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{marginLeft: 20, marginBottom: 20, fontSize: 15, color:'#B80000' }}>{person.date}</Text>
                                        </View>
                                    </View>

                                )
                            })}

                        </View>
                    </ScrollView>



                </View>

                {/* cards
                <View style={styles.cardContainer}>
                    <View>
                        <Text style={styles.cardTitle}>My Cards</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <PlusIcon name="plus-circle-outline" color='white' />
                            <Text style={{ fontSize: 25, color: 'white', }}>Add New Card</Text>
                        </View>

                    </View>

                </View> */}

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
        color: '#B80000',
    },
    recentText: {
        fontSize: 23,
        color: '#B80000',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    seeallText: {
        fontSize: 20,
        color: '#607D8B',
        fontWeight: 'bold',
        marginTop: 20,
        marginRight: 34,

    },
    recentContainer: {
        backgroundColor: 'white',
        height: '40%',
        marginTop: 10,
        borderRadius: 20,
        marginHorizontal: 15,
    },
    list: {
        flexDirection: 'row',
        paddingBottom: 5,
        marginLeft: 20,
        justifyContent: 'space-between',
        alignItems: 'flex-start',

    },
    listing: {
        marginTop: 20,

    },
    listText: {
        fontSize: 20,
        color: 'black',
        paddingRight: 40,

    },
    listText1:{
        fontSize: 20,        
        paddingRight: 40,
        color:'#00796B',

    },
    cardContainer: {
        backgroundColor: 'white',
        height: '40%',
        marginTop: 20,
        borderRadius: 20,
        marginHorizontal: 15,

    },
    cardTitle: {
        fontSize: 20,
        color: 'white',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold'
    }
})

export default Dashboard;