import { View, Image, Text, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("screen");

interface IProps {
  imageURL: string;
}

const SliderItem = (props: IProps) => {
  console.log("width", width);

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        height: "100%",
        width: "100%",
        borderRadius: 10,
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <Image
        style={{
          width: width - 40,
          height: 200,
          borderRadius: 10,
          resizeMode: 'cover',
          borderWidth: 1,
          borderColor: '#56bea8'
        }}
        source={{ uri: props.imageURL }}
        key={props.imageURL}
      />
    </View>
  );
};

export default SliderItem;
