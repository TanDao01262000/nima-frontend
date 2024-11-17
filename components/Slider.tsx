import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSlider } from '../data/SliderData'
import SliderItem from './SliderItem'

const Slider = () => {
    return (
        <View>
            <FlatList
                data={ImageSlider}
                renderItem={({item, index }) => (
                    <SliderItem item = {item} index = {index} />
                )} 
            />
        </View>

    )
}


export default Slider

const styles = StyleSheet.create({})