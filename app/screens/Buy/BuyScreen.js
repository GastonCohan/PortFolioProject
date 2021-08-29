import React, { useState } from "react"
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { Item, Input, Label, Button } from 'native-base';
// import { DateTimePickerComponent } from "../../components/DatePicker/DatePickerComponent";
import { Picker } from '@react-native-picker/picker';
import { StackActions, useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';


export const BuyComponent = () => {

    const navigation = useNavigation();

    const [metodoDeEntregaEnIos, setMetodoDeEntregaEnIos] = useState();
    const [metodoDePagoEnIos, setMetodoDePagoEnIos] = useState();
    const [metodoDePagoEnAndroid, setMetodoDePagoEnAndroid] = useState();
    const [metodoDeEntregaEnAndroid, setMetodoDeEntregaEnAndroid] = useState();
    const [name, onNameChange] = React.useState('');
    const [lastname, onLastnameChange] = React.useState('');
    const [email, onEmailChange] = React.useState('');
    const [telefone, onTelefoneChange] = React.useState('');
    const [direccion, onDireccionChange] = React.useState('');
    const [altura, onAlturaChange] = React.useState('');
    const [piso, onPisoChange] = React.useState('');
    const [codigoPostal, onCodigoPostalChange] = React.useState('');
    const [barrio, onBarrioChange] = React.useState('');
    const [continueClickText, setContinueClickText] = React.useState(false);

    const placeholder = {
        label: 'Selecciona una opcion',
        value: null,
        color: '#000',
    };

    const placeholder2 = {
        label: 'Selecciona una opcion',
        value: null,
        color: '#000',
    };

    const isButtonAllowed = () => {
        return false
    }

    const goToBuyConfirm = (name, lastname, email, telefone, metodoDeEntregaEnIos, metodoDeEntregaEnAndroid, metodoDePagoEnIos, metodoDePagoEnAndroid, direccion, altura, codigoPostal, barrio, piso) => {
        navigation.dispatch(StackActions.push("Confirmar Compra", {
            ["name"]: name,
            ["lastname"]: lastname,
            ["email"]: email,
            ["telefone"]: telefone,
            ["metodoDeEntregaEnIos"]: metodoDeEntregaEnIos,
            ["metodoDeEntregaEnAndroid"]: metodoDeEntregaEnAndroid,
            ["metodoDePagoEnIos"]: metodoDePagoEnIos,
            ["metodoDePagoEnAndroid"]: metodoDePagoEnAndroid,
            ["direccion"]: direccion,
            ["altura"]: altura,
            ["piso"]: piso,
            ["codigoPostal"]: codigoPostal,
            ["barrio"]: barrio,
        }));
        console.log("Nombre:", name, "Apellido:", lastname, "Email:", email, "Teléfono:", telefone, "Metodo de entrega en IOS:", metodoDeEntregaEnIos, "Metodo de entrega en Android:", metodoDeEntregaEnAndroid, "Metodo de pago en IOS:", metodoDePagoEnIos, "Metodo de entrega en Android:", metodoDePagoEnAndroid)
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

    const validateOptions = () => {
        if ((metodoDeEntregaEnIos === "ed" || metodoDeEntregaEnAndroid === "ed") && (metodoDePagoEnIos === "efectivo" || metodoDePagoEnAndroid === "efectivo")) {
            return false
        } else {
            return true
        }
    }

    const direccionFormValidate = () => {
        if (metodoDeEntregaEnAndroid === "ed" || metodoDeEntregaEnIos === "ed") {
            if (direccion.length > 3 && codigoPostal.length <= 8 && altura != "" && barrio.length >= 3) {
                console.log("true")
                return true
            } else {
                return false
            }
        } else {
            return true
        }
    }

    const isValidForm = () => {
        if (name.length >= 3 && lastname.length >= 2 && validateEmail() && telefone.length == 10 && validateOptions() && direccionFormValidate()) {
            return true
        } else {
            return false
        }
    }

    const continueClick = () => {
        if ((metodoDeEntregaEnIos != null || metodoDeEntregaEnAndroid != null) && (metodoDePagoEnAndroid != null || metodoDePagoEnIos != null) && isValidForm()) {
            setContinueClickText(false)
            goToBuyConfirm(name, lastname, email, telefone, metodoDeEntregaEnIos, metodoDeEntregaEnAndroid, metodoDePagoEnIos, metodoDePagoEnAndroid, direccion, altura, codigoPostal, barrio, piso)
        } else {
            setContinueClickText(true)
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                <View style={{ marginTop: '10%', paddingHorizontal: 10 }}>
                    <Item stackedLabel>
                        <Label style={{ color: 'black', marginBottom: "3%" }}>Nombre</Label>
                        <TextInput onChangeText={text => onNameChange(text)}
                            allowFontScaling={false}
                            value={name}
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={{ width: "100%" }}
                            placeholder={"Lucas "}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black', marginBottom: "3%" }}>Apellido</Label>
                        <TextInput onChangeText={text => onLastnameChange(text)}
                            allowFontScaling={false}
                            value={lastname}
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={{ width: "100%" }}
                            placeholder={"Lopez "}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black', marginBottom: "3%" }}>Email</Label>
                        <TextInput onChangeText={text => onEmailChange(text)}
                            allowFontScaling={false}
                            value={email}
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={{ width: "100%" }}
                            placeholder={"Lucaslopez@gmail.com "}
                        />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black', marginBottom: "3%" }}>Teléfono</Label>
                        <TextInput onChangeText={text => onTelefoneChange(text)}
                            allowFontScaling={false}
                            value={telefone}
                            autoCapitalize='none'
                            autoCorrect={false}
                            style={{ width: "100%" }}
                            placeholder={"1123456789"}
                        />
                    </Item>
                    {/* <View style={{ marginTop: '3%' }}>
                        <DateTimePickerComponent />
                    </View> */}
                    <View style={{ paddingRight: "1%", marginTop: '5%' }}>
                        <View style={{ marginBottom: 10, marginLeft: 5 }}>
                            <Text>Debe seleccionar un metodo de entrega</Text>
                        </View>
                        {
                            Platform.OS == "ios" ?
                                <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setMetodoDeEntregaEnIos(value)}
                                        placeholder={placeholder}
                                        items={[
                                            { label: 'Retirar en local (Puan 1578)', value: "rl" },
                                            { label: 'Entregar en dirección propia', value: "ed" },
                                        ]}
                                        style={{ textColor: 'black' }}
                                    />
                                </View>
                                :
                                <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                    <Picker
                                        selectedValue={metodoDeEntregaEnAndroid}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setMetodoDeEntregaEnAndroid(itemValue)
                                        }
                                    >
                                        <Picker.Item label="Debe seleccionar un metodo de entrega" value={null} />
                                        <Picker.Item label="Retirar en local (Puan 1578)" value="rl" />
                                        <Picker.Item label="Entregar en dirección propia" value="ed" />
                                    </Picker>
                                </View>
                        }
                    </View>
                    {
                        metodoDeEntregaEnIos === "rl" || metodoDeEntregaEnAndroid === "rl" ?
                            <View>
                                <Text style={{ marginHorizontal: 5, marginTop: 10, color: 'red' }}>
                                    Se le va a contactar para coordinar la entrega.
                                </Text>
                            </View>
                            :
                            null
                    }
                    {metodoDeEntregaEnIos === "ed" || metodoDeEntregaEnAndroid === "ed" ?

                        <View style={{ flex: 1, marginTop: '5%', width: '100%' }}>
                            <View>
                                <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red' }}>
                                    Recuerda que si seleccionas la opcion de "Entregar en dirección propia" solo podrás abonar a través de Mercado Pago.
                                </Text>
                            </View>
                            <Item stackedLabel>
                                <Label style={{ color: 'black', marginBottom: "3%" }}>Dirección (calle)</Label>
                                <TextInput onChangeText={text => onDireccionChange(text)}
                                    allowFontScaling={false}
                                    value={direccion}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={{ width: "100%" }}
                                    placeholder={"Av. Rivadavia"}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black', marginBottom: "3%" }}>Altura</Label>
                                <TextInput onChangeText={text => onAlturaChange(text)}
                                    allowFontScaling={false}
                                    value={altura}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={{ width: "100%" }}
                                    placeholder={"1234"}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black', marginBottom: "3%" }}>Piso</Label>
                                <TextInput onChangeText={text => onPisoChange(text)}
                                    allowFontScaling={false}
                                    value={piso}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={{ width: "100%" }}
                                    placeholder={"4 a"}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black', marginBottom: "3%" }}>Codigo Postal</Label>
                                <TextInput onChangeText={text => onCodigoPostalChange(text)}
                                    allowFontScaling={false}
                                    value={codigoPostal}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={{ width: "100%" }}
                                    placeholder={"4321"}
                                />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black', marginBottom: "3%" }}>Barrio</Label>
                                <TextInput onChangeText={text => onBarrioChange(text)}
                                    allowFontScaling={false}
                                    value={barrio}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    style={{ width: "100%" }}
                                    placeholder={"Caballito"}
                                />
                            </Item>
                        </View>
                        :
                        null
                    }
                    <View style={{ paddingRight: "1%", marginTop: '5%' }}>
                        <View style={{ marginBottom: 10, marginLeft: 5 }}>
                            <Text>Debe seleccionar un metodo de pago</Text>
                        </View>
                        {
                            Platform.OS == "ios" ?
                                <View>
                                    <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                        <RNPickerSelect
                                            onValueChange={(value) => setMetodoDePagoEnIos(value)}
                                            placeholder={placeholder2}
                                            items={[
                                                { label: 'Efectivo', value: "efectivo" },
                                                { label: 'Mercado Pago', value: "mp" },
                                            ]}
                                            style={{ textColor: 'black' }}
                                        />
                                    </View>
                                </View>
                                :
                                <View>
                                    <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                        <Picker
                                            selectedValue={metodoDePagoEnAndroid}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setMetodoDePagoEnAndroid(itemValue)
                                            }
                                        >
                                            <Picker.Item label="Debe seleccionar un metodo de pago" value={null} />
                                            <Picker.Item label="Efectivo" value="efectivo" />
                                            <Picker.Item label="Mercado Pago" value="mp" />
                                        </Picker>
                                    </View>
                                </View>
                        }
                        {
                            (metodoDePagoEnIos === "efectivo" && metodoDeEntregaEnIos === "ed") ?
                                <View style={{ flex: 1, marginTop: '3%', width: '100%' }}>
                                    <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red' }}> Recuerda que no puedes seleccionar Efectivo, si anteriormente has seleccionado en metodo de entrega la opcion "Entregar en dirección propia".</Text>
                                </View>
                                :
                                null

                        }
                        {
                            (metodoDeEntregaEnAndroid === "ed" && metodoDePagoEnAndroid === "efectivo") ?
                                <View style={{ flex: 1, marginTop: '3%', width: '100%' }}>
                                    <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red' }}> Recuerda que no puedes seleccionar Efecitvo, si anteriormente has seleccionado en metodo de entrega la opcion "Entregar en dirección propia".</Text>
                                </View>
                                :
                                null

                        }
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ marginTop: '10%', marginBottom: '5%' }}>
                        <Button style={styles.button} onPress={() => { continueClick() }} disabled={isButtonAllowed() ? true : false}>
                            <Text style={styles.text}>Continuar</Text>
                        </Button>
                    </View>
                    {
                        continueClickText ?
                            <View style={{ flex: 1, marginBottom: '10%', width: '100%', alignItems: 'center' }}>
                                <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red', textAlign: "center" }}> Corroborá que esten todos los campos completados de la forma correcta para poder continuar.</Text>
                            </View>
                            :
                            null

                    }
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    button: {
        borderRadius: 5,
        width: 320,
        justifyContent: "center",
        backgroundColor: '#334257'
    },
    text: {
        color: "white"
    },
});