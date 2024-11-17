import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '../data/SliderData'

type Props = {
    item: ImageSliderType;
    index: number;
}

const SliderItem = (props: Props) => {
    return (
        <View>
            <Text> SliderItem</Text>
        </View>
    )
}

export default SliderItem

const styles = StyleSheet.create({});