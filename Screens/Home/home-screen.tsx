import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageSlider from "../../components/image-slider/image-slider";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.homeScreenWrapper}>
            <View style={{ width: '100%' }}>
                <View style={styles.actionBar}>
                    <Ionicons
                        name={'search-outline'}
                        size={35}
                        color={'#808080'}
                    />
                    <Text
                        style={{
                            fontFamily: 'regular'
                        }} >جوري سنتر</Text>
                    <Ionicons
                        name={'notifications-outline'}
                        size={35}
                        color={'#808080'}
                    />
                </View>

                <ScrollView
                    horizontal={false}
                    alwaysBounceVertical={false}
                >

                    <ImageSlider />

                    <View>
                        <Text>test123</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'red',
                        height: 150,
                        margin: 3,
                        borderRadius: 10
                    }}>
                        <Text>test</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'red',
                        height: 150,
                        margin: 3,
                        borderRadius: 10
                    }}>
                        <Text>test</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'red',
                        height: 150,
                        margin: 3,
                        borderRadius: 10
                    }}>
                        <Text>test</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'red',
                        height: 150,
                        margin: 3,
                        borderRadius: 10
                    }}>
                        <Text>test</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'red',
                        height: 150,
                        margin: 3,
                        borderRadius: 10
                    }}>
                        <Text>test</Text>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>);
}

export default HomeScreen;

const styles = StyleSheet.create({
    homeScreenWrapper: {
        flex: 1,

        backgroundColor: '#fff'
    },
    actionBar: {
        flexDirection: "row-reverse",
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: '#ddd'
    },
    logo: {
        width: 40,
        height: 40
    }
})