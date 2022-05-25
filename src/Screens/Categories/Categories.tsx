import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, TextInput, Alert } from 'react-native'
import Styles from './Styles';
import PlusIcon from 'react-native-vector-icons/FontAwesome';
import { Modal } from '../../Components/Modal';



const Categories = ({ navigation }) => {
    // for showing modal when add card is clicked on
    const [showModal, setShowModal] = useState(false);

    const handleModal = () => setShowModal(() => !showModal);

    //WHen the save button of the modal is clicked on
    const handleSave = () => {
        return (
            Alert.alert(
                "Add Card", "Card Saved Successfully!",
                [
                    {
                        text: "Okay",
                        onPress: () => handleModal()
                    }
                ]
            )

        )
    }

    //WHen the cancel button of the modal is clicked on
    const handleCancel = () => {
        return (
            Alert.alert(
                "Add Card", "Are you sure?",
                [
                    {
                        text: "Yes",
                        onPress: () => handleModal(),

                    },
                    {
                        text: "Cancel",
                        onPress: () => setShowModal(showModal),
                        style: 'destructive',

                    }

                ]
            )

        )
    }

    const addCardSavings = () => {
        return (
            navigation.navigate('Savings')
        )

    }
    return (
        <ScrollView>
            <View style={Styles.savingsContainer}>
                {/* <Modal isVisible={showModal}>
                    <Pressable onPress={handleModal}><Text style={{fontSize: 30, color:'white'}}>Go Back</Text></Pressable>
                </Modal> */}

                <Modal isVisible={showModal}>
                    <Modal.Container>
                        <Modal.Header title="Add Card" />
                        <Modal.Body>
                            <TextInput placeholder='Enter Card Name' style={Styles.input} />
                            <TextInput placeholder='Enter Card Number' style={Styles.input} />
                            <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 10, }}>
                                <View style={[Styles.inputShort, { flex: 2, marginRight: 10, }]}>
                                    <TextInput placeholder='Enter Expiry Date' />
                                </View>
                                <View style={[Styles.inputShort, { flex: 2, }]}>
                                    <TextInput placeholder='Enter CVV' />
                                </View>
                            </View>
                        </Modal.Body>
                        <Modal.Footer>
                            <Pressable onPress={handleSave} style={Styles.pressable}><Text style={Styles.pressableText}>Save</Text></Pressable>
                            <Pressable onPress={handleCancel} style={Styles.pressableOutline}><Text style={Styles.pressableTextOutline}>Cancel</Text></Pressable>
                        </Modal.Footer>
                    </Modal.Container>

                </Modal>

                <Text style={Styles.savingsText}>My Savings</Text>

                <View style={Styles.cardContainer}>
                    <View style={{ flex: 0.15, marginLeft: 90 }}>
                        <Pressable onPress={handleModal}><PlusIcon name="plus-square-o" size={30} color='white' /></Pressable>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Pressable onPress={addCardSavings}><Text style={Styles.addCard}>Add New Card.</Text></Pressable>
                    </View>
                </View>
            </View>

            {/* Investment's Container */}
            <View style={Styles.savingsContainer}>
                <Text style={Styles.savingsText}>My Investments</Text>

                <View style={Styles.cardContainer}>
                    <View>
                        <Pressable style={Styles.investExplore}>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Nunito-Bold', }}>
                                Explore
                            </Text>
                        </Pressable>
                        <Pressable style={Styles.investExplore}>
                            <Text style={{ fontSize: 20, color: 'white', fontFamily: 'Nunito-Bold', }}>
                                Check Balance
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* Gold Container */}
            <View style={Styles.savingsContainer}>
                <Text style={Styles.savingsText}>Value in Gold</Text>

                <View style={Styles.cardContainer}>
                </View>
            </View>
        </ScrollView>
    )
}

export default Categories;