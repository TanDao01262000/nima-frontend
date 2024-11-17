import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '../data/SliderData'

type Props = {
    item: ImageSliderType;
    index: number;
}

const {width} = Dimensions.get('screen');

const SliderItem = ({item, index}: Props) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image}/>
            <Text> {item.title}</Text>
        </View>
    )
}

export default SliderItem

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        width: width
    },
    image: {
        width: 300, 
        height: 500,
        borderRadius: 16, 
    }
});