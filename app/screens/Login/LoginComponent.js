import React, { useEffect } from "react";
import { View, ImageBackground, StyleSheet, Text, Image } from "react-native";
import { useNavigation, StackActions, CommonActions } from "@react-navigation/native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button } from 'native-base';
import { Avatar } from 'react-native-elements';
import * as Google from 'expo-google-app-auth';
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import { auth } from "../../firebase/firebase";


const startImageBackground = { uri: "https://con-actitud.com.ar/wp-content/uploads/2021/04/Logo-Actitud-01-Recuperado.jpg_0001_Capa-1.jpg" }
const passwordHiddenIcon = require('../../assets/ic-show-password.png');
const passwordNotHiddenIcon = require('../../assets/ic-hide-password.png');

export const LoginComponent = () => {

    //Properties

    const navigation = useNavigation();

    // UI STATES 

    const [email, onEmailChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);


    // Methods

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home")
            }
        });

        return unsubscribe
    }, [])

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

    const cleanStackAndGoToMainAction = CommonActions.reset({
        routes: [
            { name: "Home" }
        ],
    });

    const goToHome = () => {
        navigation.dispatch(cleanStackAndGoToMainAction);
    }

    const goToRegister = () => {
        navigation.dispatch(StackActions.push("Registro"));
    }

    const loginWithGoogle = async () => {

        const response = await Google.logInAsync({
            iosClientId: '955211733707-u01fru2njijvfqqfgrg1i9f01ecanmet.apps.googleusercontent.com',
            androidClientId: '955211733707-n5pcp01vopnoeij4fd4hdj4rc5i0084p.apps.googleusercontent.com',
            iosStandaloneAppClientId: '955211733707-u01fru2njijvfqqfgrg1i9f01ecanmet.apps.googleusercontent.com',
            androidStandaloneAppClientId: '955211733707-n5pcp01vopnoeij4fd4hdj4rc5i0084p.apps.googleusercontent.com',
            scopes: ["profile", "email"]
        });

        var credential = firebase.auth.GoogleAuthProvider.credential(
            response.idToken,
            response.accessToken
        );

        firebase.auth().signInWithCredential(credential).catch(e => { console.log(e) })

        if (response.type === 'success') {
            goToHome()
        }

        console.log(response)
    }

    const loginWithFacebook = async () => {
        try {
            await Facebook.initializeAsync({
                appId: "999302834196705",
                appName: "AndiamoProject"
            });
            const {
                type,
                token
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ["public_profile", "email"],
            }, "Bluerabbit");
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,name,picture&type=large`);
                const data = await response.json()
                console.log("data", data)
                const credential = firebase.auth.FacebookAuthProvider.credential(token)
                firebase.auth().signInWithCredential(credential)
                goToHome()
            } else {
                return
            }
        } catch ({ message }) {
            console.log(message)
        }
    }

    const loginwithemail = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                navigation.replace('Home')
            })
            .catch(error => { alert(error.message) })
    }

    return (
        <ImageBackground source={startImageBackground} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>

                    {/* <Image
                        source={require('../../assets/logo.jpeg')}
                        style={styles.logo}
                    /> */}

                </View>
                <View style={{ flex: 0 }} />
                <View style={styles.optionsContainer}>
                    <View style={styles.input}>
                        <View style={{ justifyContent: 'flex-start', paddingHorizontal: 15 }}>
                            <TextInput onChangeText={text => onEmailChange(text)}
                                placeholder="Email"
                                placeholderTextColor="white"
                                value={email}
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
                            <Text allowFontScaling={false} >He olvidado la contraseña</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', paddingVertical: 15 }}>
                        <View>
                            <TouchableOpacity onPress={() => loginWithFacebook()}>
                                <Avatar
                                    rounded
                                    size='medium'
                                    icon={{ name: 'facebook', color: 'white', type: 'font-awesome' }}
                                    activeOpacity={0.7}
                                    backgroundColor="blue"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: "5%" }}>
                            <TouchableOpacity onPress={() => loginWithGoogle()}>
                                <Avatar
                                    rounded
                                    size='medium'
                                    icon={{ name: 'email', color: 'white', type: 'Zocial' }}
                                    activeOpacity={0.7}
                                    backgroundColor="red"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, }}>
                        <Button style={styles.button} onPress={loginwithemail}>
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
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={styles.buttonRegister} onPress={goToRegister}>
                        <Text style={styles.text}>Registrarse</Text>
                    </Button>
                </View>

            </View >
        </ImageBackground>
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
    buttonRegister: {
        width: '100%',
        justifyContent: "center",
        backgroundColor: '#334257'
    },
});