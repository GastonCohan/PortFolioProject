import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ImageBackground, Image, TouchableOpacity, Modal } from "react-native";
import { TextInput } from "react-native";
import { Button, CheckBox } from 'native-base';
import { auth } from "../../firebase/firebase";
import Icon from 'react-native-vector-icons/Ionicons';
import STYLES from "../../components/Styles/Styles";
import Spinner from "react-native-loading-spinner-overlay";

const passwordHiddenIcon = require('../../assets/ic-show-password.png');
const passwordNotHiddenIcon = require('../../assets/ic-hide-password.png');

export const RegisterComponent = ({ navigation }) => {

    //Properties

    const [username, onUsernameChange] = React.useState('');
    const [password, onPasswordChange] = React.useState('');
    const [repeatPassword, onRepeatPasswordChange] = React.useState('');
    const [email, onEmailChange] = React.useState('');
    const [check, setOnCheck] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [errorText, setError] = React.useState(false);
    const [errorModalVisible, setErrorModalVisible] = React.useState(false);
    const [errorText2, setErrorText] = React.useState('')
    const [showLoading, setShowLoading] = React.useState(false);

    // Methods

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="arrow-back" size={25} color="white"> </Icon>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const checkBox = () => {
        setOnCheck(!check)
        return check
    }

    const goBack = () => {
        navigation.goBack()
    }

    const validateEmail = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email)) {
            return true;
        }
        else {
            return false
        }
    }

    const passwordIsValid = () => {
        var pattern = new RegExp(/^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
        if (pattern.test(password)) {
            return true;
        } else {
            return false;
        }
    }

    const errorFunctionText = (error) => {

        setShowLoading(false);

        if (error.message === "The email address is already in use by another account.") {
            setErrorText("El mail ingresado ya se encuentra en uso.")
            setErrorModalVisible(true)
        }
    }

    const RegisterCheck = () => {
        setErrorModalVisible(false)
    }

    const register = async () => {

        setShowLoading(true)

        if (username !== null && !passwordIsValid() && password === repeatPassword && validateEmail() && check === true) {
            auth
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    setErrorText("Usuario creado con éxito.")
                    setErrorModalVisible(true)
                })
                .catch((error) => errorFunctionText(error));
        } else {
            setError(true)
            setShowLoading(false)
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#C9CCD5' }}>
            <Spinner visible={showLoading} />
            {/* <View style={{ flex: 0.1, alignItems: 'center', justifyContent: 'center', marginTop: '10%', marginBottom: "-25%" }}>
                <Text style={{ fontSize: 20 }}>Andiamo Project </Text>
            </View> */}
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
                                width="90%"
                            >
                            </TextInput>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={toggleShowPassword} style={{ flex: 2, marginRight: 8, justifyContent: 'center' }}>
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
                                width="90%"
                            >
                            </TextInput>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity onPress={toggleShowPassword} style={{ flex: 2, marginRight: 40, justifyContent: 'center' }}>
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
                {errorText ?
                    <View style={{ alignItems: 'center', marginTop: 15 }}>
                        <Text style={{ color: 'red', textAlign: "center" }}> Completá los datos de forma adecuada {"\n"} para poder avanzar</Text>
                    </View>
                    :
                    null
                }
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "8%" }}>
                    <Button style={styles.buttonRegister} onPress={register}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text style={styles.text}>Registrarse</Text>
                        </View>
                    </Button>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: "5%" }}>
                    <Button style={styles.buttonRegister} onPress={goBack}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                            <Text style={styles.text}>Volver</Text>
                        </View>
                    </Button>
                </View>
            </View>

            <Modal
                animationType="slide"
                transparent={true}
                visible={errorModalVisible}
                onRequestClose={() => setErrorModalVisible(false)}
            >
                <View style={STYLES.modals.centeredView}>
                    <View style={STYLES.modals.modalTitle}>
                        <Text style={STYLES.modals.modalTitleText}>Aviso</Text>
                    </View>
                    <View style={STYLES.modals.modalView}>
                        <View>
                            <Text style={STYLES.modals.modalText}>{errorText2}</Text>
                        </View>
                        <View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Button color="#334257" style={styles.buttonRegister2} onPress={() => { RegisterCheck }}>
                                    <Text style={styles.text}>Cerrar</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
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
        alignItems: 'center',
    },
    buttonRegister2: {
        width: '100%',
        justifyContent: "center",
        backgroundColor: '#334257'
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
        marginTop: "8%",
        flexDirection: 'row'
    },
});