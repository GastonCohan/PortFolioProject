import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";
import { TextInput } from "react-native";
import { Button, CheckBox } from 'native-base';
import { TouchableOpacity } from "react-native-gesture-handler";
import { auth } from "../../firebase/firebase";

const passwordHiddenIcon = require('../../assets/ic-show-password.png');
const passwordNotHiddenIcon = require('../../assets/ic-hide-password.png');

export const RegisterComponent = () => {

    //Properties

    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [repeatPassword, onRepeatPasswordChange] = React.useState('');
    const [email, onEmailChange] = React.useState('');
    const [check, setOnCheck] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    // Methods

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const checkBox = () => {
        setOnCheck(!check)
        return check
    }

    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: username
                })
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#C9CCD5' }}>
            <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', marginTop: '10%', marginBottom: "-25%" }}>
                <Text style={{ fontSize: 20 }}>Andiamo Project </Text>
            </View>
            <View style={styles.container}>
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
                <View style={styles.input}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "row" }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingHorizontal: 15 }}>
                            <TextInput onChangeText={text => onRepeatPasswordChange(text)}
                                placeholder="Repita la contraseña"
                                placeholderTextColor="white"
                                value={repeatPassword}
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
                <View style={styles.recoverPasswordView}>
                    <View style={{ marginRight: '5%' }} >
                        <CheckBox
                            checked={check}
                            onPress={() => checkBox()}
                        />
                    </View>
                    <TouchableOpacity>
                        <Text allowFontScaling={false} >He leído y acepto los términos.</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "10%" }}>
                    <Button style={styles.buttonRegister} onPress={register}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text style={styles.text}>Registrarse</Text>
                        </View>
                    </Button>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "5%" }}>
                    <Button style={styles.buttonRegister} onPress={{}}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text style={styles.text}>Volver</Text>
                        </View>
                    </Button>
                </View>
            </View >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderRadius: 5,
        width: 320,
        justifyContent: "center",
        backgroundColor: 'black',
        marginTop: "5%",
        height: 40
    },
    buttonRegister: {
        width: '70%',
        justifyContent: "center",
        backgroundColor: '#334257',
        alignItems: 'center'
    },
    text: {
        color: "white",
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width: "100%"
    },
    recoverPasswordView: {
        marginTop: "5%",
        flexDirection: 'row'
    },
});