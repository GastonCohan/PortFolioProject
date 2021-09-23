import React from "react";
import { View, ImageBackground, StyleSheet, Text, Modal, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import { Button } from "native-base";
import firebase from "firebase";
import Spinner from "react-native-loading-spinner-overlay";
import STYLES from '../../components/Styles/Styles'

const startImageBackground = { uri: "https://con-actitud.com.ar/wp-content/uploads/2021/04/Logo-Actitud-01-Recuperado.jpg_0001_Capa-1.jpg" }

export const PasswordForget = () => {

    //Properties

    const navigation = useNavigation();

    // UI STATES 

    const [email, onEmailChange] = React.useState('');
    const [showLoading, setShowLoading] = React.useState(false);
    const [errorModalVisible, setErrorModalVisible] = React.useState(false);
    const [errorText, setErrorText] = React.useState('')


    // Methods

    const emailIsInvalid = () => {

    }

    const errorFunction = (error) => {

        setShowLoading(false);

        console.log(error)
        if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
            setErrorText("El email ingresado no se encuentra en uso. Por favor, ingresa un email válido.")
            setErrorModalVisible(true)
        }
        if (error.message === "The email address is badly formatted.") {
            setErrorText("Debe ingresar un email válido")
            setErrorModalVisible(true)
        }
    }

    const goBack = () => {
        navigation.goBack()
    }

    const goToSendEmailSuccess = () => {
        setShowLoading(false)
        navigation.navigate("PasswordForgetSuccess")
    }

    const sendEmail = async () => {

        setShowLoading(true)

        try {
            firebase.auth().sendPasswordResetEmail(email).then(() => {
                goToSendEmailSuccess()
            })
                .catch(error => { errorFunction(error) })
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <ImageBackground source={startImageBackground} resizeMode="cover" style={styles.image}>
            <Spinner visible={showLoading} />
            <View style={styles.container}>
                <View style={styles.optionsContainer}>
                    <View style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, textAlign: 'center' }}>
                            Ingersa el email {"\n"} para reestablecer la contraseña
                        </Text>
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
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, }}>
                        <Button style={styles.button} onPress={() => sendEmail()}>
                            <Text style={styles.text}>Enviar mail</Text>
                        </Button>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 12, }}>
                        <Button style={styles.button} onPress={() => goBack()}>
                            <Text style={styles.text}>Volver</Text>
                        </Button>
                    </View>
                    {
                        emailIsInvalid() &&
                        <View style={styles.errorTextView}>
                            <Text style={styles.errorText}>No pudimos encontrarte con esos datos. Intentá ingresándolos nuevamente.</Text>
                        </View>
                    }
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
                                <Text style={STYLES.modals.modalText}>{errorText}</Text>
                            </View>
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Button color="#334257" style={styles.buttonRegister} onPress={() => { setErrorModalVisible(false) }}>
                                        <Text style={styles.text}>Cerrar</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>

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
        marginTop: "10%"
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