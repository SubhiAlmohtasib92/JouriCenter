import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    StatusBar,
    Dimensions
} from "react-native";
import Constants from 'expo-constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import ImageSlider from "../../components/image-slider/image-slider";
import Categories from "../../components/categories/categories";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.homeScreenWrapper}>

            <View style={{ width: '100%' }}>
                <View style={styles.actionBar}>
                    <Ionicons
                        name={'search-outline'}
                        size={35}
                        color={'#56bea8'}
                    />
                    <Text
                        style={{
                            fontFamily: 'regular',
                            color: '#808080',
                            fontSize: 22
                        }} >جوري سنتر</Text>
                    <Ionicons
                        name={'notifications-outline'}
                        size={35}
                        color={'#56bea8'}
                    />
                </View>

                <ScrollView
                    horizontal={false}
                    alwaysBounceVertical={false}
                >
                    <ImageSlider />
                    <Categories />
                    <View>
                        <View
                            style={{
                                flexDirection: 'row-reverse',
                                justifyContent: 'space-between'

                            }}>
                            <Text style={{
                                fontFamily: 'regular',
                                textAlign: 'center',
                                color: '#808080',
                                fontSize: 14,
                                marginBottom: 3
                            }}>وصلنا حديثا</Text>
                            <Text style={{
                                fontFamily: 'regular',
                                fontSize: 12,
                                color: '#808080'
                            }}>عرض الجميع</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                height: 200,
                                flexDirection: 'row',
                                flexWrap: 'wrap'
                            }} >
                            <View
                                style={{
                                    width: '50%',
                                    height: 100,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            ><Text>first card</Text></View>
                            <View style={{
                                width: Dimensions.get('screen').width / 2 - 15,
                                height: 100,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'red',
                                shadowColor: 'red',
                                shadowOffset: { width: 2, height: 2 },
                                shadowOpacity: 1
                                , marginHorizontal: 2,
                                elevation: 5
                            }}><Text>second card </Text></View>
                            <View style={{
                                width: '50%',
                                height: 100,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}><Text>third card </Text></View>
                            <View style={{
                                width: '50%',
                                height: 100,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}><Text>third card </Text></View>
                        </View>
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
        backgroundColor: '#FAFAFA',
        paddingTop: Constants.statusBarHeight
    },
    actionBar: {
        flexDirection: "row-reverse",
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,

    },
    logo: {
        width: 40,
        height: 40
    }
})