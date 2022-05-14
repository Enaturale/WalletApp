import * as React from 'react';
import { View, Text, Dimensions,  Button } from 'react-native';
import styles from '../Screens/Dashboard/styles';
import CarouselItem from './CarouselItem';
import Carousel from "react-native-snap-carousel";
import CustomPaging from './CustomPaging';


const { width } = Dimensions.get("window");

export default function CustomSlider({ data }) {
    const [slideIndex, setSlideIndex] = React.useState(0);
    
    const settings = {
        sliderWidth: width,
        sliderHeight: width,
        itemWidth: width - 80,
        data: data,
        renderItem: CarouselItem,
        hasParallaxImages: true,
        onSnapToItem: (index) => setSlideIndex(index),
      };

      return (
        <View style={styles.container}>
          <Carousel 
            {...settings}            
          />

          <CustomPaging data={data}  activeSlide={slideIndex} />
        </View>
      );
}