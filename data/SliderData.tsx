import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'asdflas;j',
        image: require('@/assets/movie1.png'),
        description: 'asdfjlasdf'
    },
    {
        title: 'asdflas;j',
        image: require('@/assets/movie2.png'),
        description: 'asdfjlasdf'
    },
    {
        title: 'asdflas;j',
        image: require('@/assets/movie3.png'),
        description: 'asdfjlasdf'
    }
]