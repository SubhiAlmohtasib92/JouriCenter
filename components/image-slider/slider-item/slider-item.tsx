import { View, Image, Text, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('screen');

interface IProps {
    imageURL: string;
}

const SliderItem = (props: IProps) => {
    console.log('width', width);
    
    return (
        <View style={{
            justifyContent: 'center',
            flex: 1,
            height: '100%',
            width: width - 20,
            borderRadius: 10,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0.5, height: 0.5 },
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,
            padding: 10,
            backgroundColor: 'red',
            marginHorizontal: 5,
            marginLeft:10,
        }} >
            <Image style={{
                width: width - 20,
                height: 200,
                borderRadius: 10

            }} source={{ uri: props.imageURL }} key={props.imageURL} />
        </View>
    )
};

export default SliderItem; 