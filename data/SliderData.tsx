import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Home Alone',
        image: require('../assets/movie1.png'),
        description: 'Desc for movie 1'
    },
    {
        title: 'Avengers Infinity War',
        image: require('../assets/movie2.png'),
        description: 'Desc for movie 2'
    },
    {
        title: 'Planet Earth: A Blue Planet',
        image: require('../assets/movie3.png'),
        description: 'Desc for movie 3'
    }
]