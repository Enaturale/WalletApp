import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from '../Screens/Dashboard/styles';
import CarouselItem from './CarouselItem';
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

export default function CustomSlider({ data }) {
    const settings = {
        sliderWidth: width,
        sliderHeight: width,
        itemWidth: width - 80,
        data: data,
        renderItem: CarouselItem,
        hasParallaxImages: true,
      };
      return (
        <View style={styles.container}>
          <Carousel {...settings} />
        </View>
      );
}