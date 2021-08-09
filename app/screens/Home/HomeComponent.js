import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export const HomeComponent = () => {

    //Properties

    const navigation = useNavigation();

    // UI STATES 

    const [menOption, setMenOption] = React.useState(true)
    const [womanOption, setWomanOption] = React.useState(false)
    const [boysOption, setBoysOption] = React.useState(false)
    const [girlsOption, setGirlsOption] = React.useState(false)

    // Methods

    const menOptionFunction = () => {
        setMenOption(true)
        setWomanOption(false)
        setBoysOption(false)
        setGirlsOption(false)
    }

    const womanOptionFunction = () => {
        setMenOption(false)
        setWomanOption(true)
        setBoysOption(false)
        setGirlsOption(false)
    }

    const boysOptionFunction = () => {
        setMenOption(false)
        setWomanOption(false)
        setBoysOption(true)
        setGirlsOption(false)
    }

    const menOptionFuntion = () => {
        setMenOption(false)
        setWomanOption(false)
        setBoysOption(false)
        setGirlsOption(true)
    }

    const goToMenShirts = () => {
        navigation.dispatch(StackActions.push("Men Shirts"));
    }


    return (
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.title}>
                        <Text style={styles.titleText}> Shop </Text>
                        <TouchableOpacity>
                            <Icon name="shopping-cart" size={25} style={{ marginRight: 10 }}>
                            </Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.options}>
                        <TouchableOpacity onPress={menOptionFunction}>
                            <Text style={{ fontSize: 15, fontWeight: menOption ? "bold" : "normal" }}> Men</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={womanOptionFunction}>
                            <Text style={{ fontSize: 15, fontWeight: womanOption ? "bold" : "normal" }}> Woman</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={boysOptionFunction}>
                            <Text style={{ fontSize: 15, fontWeight: boysOption ? "bold" : "normal" }}> Boys</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={menOptionFuntion}>
                            <Text style={{ fontSize: 15, fontWeight: girlsOption ? "bold" : "normal" }}> Girls</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            menOption ?
                                <ScrollView style={styles.scroll}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 200 }}>
                                        <TouchableOpacity onPress={goToMenShirts} style={styles.backgroundImage}>
                                            <ImageBackground
                                                source={require('../../assets/remerasOption.jpg')}
                                                style={styles.remeraOption}
                                                resizeMode="cover"
                                            >
                                                <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                                    <Text style={styles.optionTitle}>Remeras</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 200, marginTop: '2%' }}>
                                        <ImageBackground
                                            source={require('../../assets/zapatillasOption.jpg')}
                                            style={styles.remeraOption}
                                            resizeMode="cover"
                                        >
                                            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                                <Text style={styles.optionTitle}>Zapatillas</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 200, marginBottom: "2%", marginTop: '2%' }}>
                                        <ImageBackground
                                            source={require('../../assets/buzosOption.jpg')}
                                            style={styles.remeraOption}
                                            resizeMode="cover"
                                        >
                                            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                                <Text style={styles.optionTitle}>Buzos</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </ScrollView>
                                :
                                null
                        }
                        {
                            womanOption ?
                                <ScrollView style={styles.scroll}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 200 }}>
                                        <TouchableOpacity style={{ width: "100%" }}>
                                            <ImageBackground
                                                source={require('../../assets/remeraMujerOption.jpg')}
                                                style={styles.remeraOption}
                                                resizeMode="cover"
                                            >
                                                <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                                    <Text style={{ color: "black", fontSize: 25 }}>Remeras</Text>
                                                </View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 200, marginTop: '2%' }}>
                                        <ImageBackground
                                            source={require('../../assets/zapatillasMujerOption.jpg')}
                                            style={styles.remeraOption}
                                            resizeMode="cover"
                                        >
                                            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                                <Text style={{ color: "black", fontSize: 25 }}>Zapatillas</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, height: 200, marginBottom: "2%", marginTop: '2%' }}>
                                        <ImageBackground
                                            source={require('../../assets/buzosMujerOption.jpg')}
                                            style={styles.remeraOption}
                                            resizeMode="cover"
                                        >
                                            <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                                                <Text style={{ color: "black", fontSize: 25 }}>Buzos</Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </ScrollView>
                                :
                                null
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center",
        marginTop: "15%",
        paddingHorizontal: "5%"
    },
    titleText: {
        fontSize: 25
    },
    options: {
        flexDirection: "row",
        marginTop: "10%",
        paddingHorizontal: "5%"
    },
    button: {
        marginLeft: "8%"
    },
    remeraOption: {
        height: 200,
        width: "100%"
    },
    scroll: {
        marginTop: '5%'
    },
    backgroundImage: {
        width: "100%"
    },
    optionTitle: {
        color: "white",
        fontSize: 25,
    },




});