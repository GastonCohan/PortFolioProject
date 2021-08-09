import React from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import { Button } from 'native-base';
import { StackActions, useNavigation } from "@react-navigation/native";

const startImageBackground = { uri: "https://con-actitud.com.ar/wp-content/uploads/2021/04/Logo-Actitud-01-Recuperado.jpg_0001_Capa-1.jpg" }

export const StartComponent = () => {

    //Properties

    const navigation = useNavigation();

    // Methods
    const goToLogin = () => {
        navigation.dispatch(StackActions.push("Login"));
    }

    const goToRegister = () => {
        navigation.dispatch(StackActions.push("Register"));
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={startImageBackground} resizeMode="cover" style={styles.image}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/logo.jpeg')}
                        style={styles.logo}
                    />
                </View>
                <View style={{ flex: 0 }} />
                <View style={styles.optionsContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Button style={styles.button} onPress={goToLogin}>
                            <Text style={styles.text}>Ingresar</Text>
                        </Button>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "2%", }}>
                        <Button style={styles.button} onPress={goToRegister}>
                            <Text style={styles.text}>Registrarse</Text>
                        </Button>
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white"
    },
    optionsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
    },
    logo: {
        width: 180,
        height: 110,
        borderRadius: 20
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 280
    },
    button: {
        borderRadius: 5,
        width: 320,
        justifyContent: "center",
        backgroundColor: '#334257'
    },
});