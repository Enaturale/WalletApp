import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import styles from '../Screens/Dashboard/styles';

function CarouselItem({ item, key }, parallaxProps) {
  return (
    <Pressable onPress={() => alert('Image description:' + item.description)}>
      <SafeAreaView style={styles.item}>
        <View style={{flexDirection: 'row', }}>
        <Text key={key} style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>

          <ParallaxImage
            source={{ uri: item.image }}
            containerStyle={styles.imageContainer}
            style={styles.image}
            {...parallaxProps}
          />
          
        </View>

        <Text  key={key} style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text  key={key} style={styles.description} numberOfLines={2}>
          {item.amount}
        </Text>
      </SafeAreaView>
    </Pressable>
  );
}

export default CarouselItem;