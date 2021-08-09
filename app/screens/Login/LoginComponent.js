import React from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import { useNavigation, StackActions } from "@react-navigation/native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from 'native-base';

const startImageBackground = { uri: "https://con-actitud.com.ar/wp-content/uploads/2021/04/Logo-Actitud-01-Recuperado.jpg_0001_Capa-1.jpg" }
const passwordHiddenIcon = require('../../assets/ic-show-password.png');
const passwordNotHiddenIcon = require('../../assets/ic-hide-password.png');

export const LoginComponent = () => {

    //Properties

    const navigation = useNavigation();

    // UI STATES 

    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);


    // Methods

    const usernameIsInvalid = () => {
        if (1 < 0) {
            return true
        } else {
            return false
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const goToHome = () => {
        // todo Verificacion de usuario y contraseña
        navigation.dispatch(StackActions.push("Home"));
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={startImageBackground} resizeMode="cover" style={styles.image}>
                <View style={styles.logoContainer}>
                    <Text>Imagen</Text>
                </View>
                <View style={{ flex: 0 }} />
                <View style={styles.optionsContainer}>
                    <View style={styles.input}>
                        <View style={{ justifyContent: 'flex-start', paddingHorizontal: 15 }}>
                            <TextInput onChangeText={text => onUsernameChange(text)}
                                placeholder="Usuario"
                                placeholderTextColor="white"
                                value={username}
                                autoCapitalize='none'
                                autoCorrect={false}
                                color="white"
                            >
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.input}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingHorizontal: 15 }}>
                                <TextInput onChangeText={text => onPasswordChange(text)}
                                    placeholder="Contraseña"
                                    placeholderTextColor="white"
                                    value={password}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    color="white"
                                    secureTextEntry={!showPassword}
                                >
                                </TextInput>
                                <View style={{ alignItems: 'center' }}>
                                    <TouchableOpacity onPress={toggleShowPassword} style={{ flex: 2, marginRight: 8, marginTop: 8 }}>
                                        <Image source={showPassword ? passwordNotHiddenIcon : passwordHiddenIcon} style={{ width: 24, height: 24, resizeMode: "contain", tintColor: "white" }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.recoverPasswordView}>
                        <TouchableOpacity onPress={() => { }}>
                            <Text allowFontScaling={false} >Recuperar contraseña</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, }}>
                        <Button style={styles.button} onPress={goToHome}>
                            <Text style={styles.text}>Ingresar</Text>
                        </Button>
                    </View>
                    {
                        usernameIsInvalid() &&
                        <View style={styles.errorTextView}>
                            <Text style={styles.errorText}>No pudimos encontrarte con esos datos. Intentá ingresándolos nuevamente.</Text>
                        </View>
                    }
                </View>

            </ImageBackground>
        </View >
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
    input: {
        borderRadius: 5,
        width: 320,
        justifyContent: "center",
        backgroundColor: 'black',
        marginTop: "2%",
        height: 40
    },
    recoverPasswordView: {
        marginTop: 12
    },
    errorText: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 12,
        color: "red"
    },
    button: {
        borderRadius: 5,
        width: 320,
        justifyContent: "center",
        backgroundColor: '#334257'
    },
});