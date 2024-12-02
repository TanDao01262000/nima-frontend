import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '../data/SliderData'
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';
import { useRouter } from 'expo-router';

type Props = {
    item: ImageSliderType;
    index: number;
}

const { width } = Dimensions.get('screen');

const SliderItem = ({ item, index }: Props) => {
    const router = useRouter();

    const handlePress = () => {
        // Navigate to the chat screen with the item's description
        router.push({
            pathname: '../(tabs)/chat',
            params: { question: item.description }, // Pass description as a parameter
        });
    };
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
                <Image source={item.image} style={styles.image} />
                <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} style={styles.background}>
                    <Text style={styles.title}> {item.title}</Text>
                    <Text style={styles.description}> {item.description}</Text>
                </LinearGradient>
            </TouchableOpacity>
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
        borderRadius: 20,
    },
    background: {
        position: 'absolute',
        width: 300,
        height: 500,
        padding: 20,
        borderRadius: 20,
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.white,
        fontSize: 10,
        fontWeight: '600',
        letterSpacing: 1.5
    },
    description: {
        color: Colors.white,
        fontSize: 12,
        letterSpacing: 1.2,
        gap: 10,
    }
});