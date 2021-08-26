import React, { useState } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Item, Input, Label, Button } from 'native-base';
import { DateTimePickerComponent } from "../../components/DatePicker/DatePickerComponent";
import { Picker } from '@react-native-picker/picker';
import MercadoPago from "../../components/MercadoPago/mercadoPago";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from 'react-native-picker-select';


export const BuyComponent = () => {

    const navigation = useNavigation();

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [value, setValueChange] = useState();
    const [selectedDelivery, setSelectedDelivery] = useState();
    const [hola, setValorChange2] = useState();

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

    const goToBuyConfirm = () => {
        navigation.navigate("Confirmar Compra");
    }

    const isButtonAllowed = () => {
        return false
    }


    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                <View style={{ marginTop: '10%', paddingHorizontal: 10 }}>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}> Nombre</Label>
                        <Input placeholder="Lucas" />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Apellido</Label>
                        <Input placeholder="Lopez" />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Email</Label>
                        <Input placeholder="Lucaslopez@gmail.com" />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Número de telefono</Label>
                        <Input placeholder="1123456789" />
                    </Item>
                    {/* <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Dirección a entregar</Label>
                        <Input />
                    </Item> */}
                    <View style={{ marginTop: '3%' }}>
                        <DateTimePickerComponent />
                    </View>
                    <View style={{ paddingRight: "1%", marginTop: '5%' }}>
                        <View style={{ marginBottom: 8, marginLeft: 5 }}>
                            <Text>Debe seleccionar un metodo de entrega</Text>
                        </View>
                        {
                            Platform.OS == "ios" ?
                                <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                    <RNPickerSelect
                                        onValueChange={(value) => setValueChange(value)}
                                        placeholder={placeholder}
                                        items={[
                                            { label: 'Retirar en Local (Puan 1578)', value: "rl" },
                                            { label: 'Entregar en dirección propia', value: "ed" },
                                        ]}
                                        style={{ textColor: 'black' }}
                                    />
                                </View>
                                :
                                <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                    <Picker
                                        selectedValue={selectedDelivery}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedDelivery(itemValue)
                                        }
                                    >
                                        <Picker.Item label="Debe seleccionar un metodo de entrega" value={null} />
                                        <Picker.Item label="Retirar en Local (Puan 1578)" value="rl" />
                                        <Picker.Item label="Entregar en dirección propia" value="ed" />
                                    </Picker>
                                </View>
                        }
                    </View>
                    {value === "ed" || selectedDelivery === "ed" ?

                        <View style={{ flex: 1, marginTop: '5%', width: '100%' }}>
                            <View>
                                <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red' }}>
                                    Recuerda que si seleccionas la opcion de "Entregar en direccion propia" solo podrás abonar a través de Mercado Pago.
                                </Text>
                            </View>
                            <Item stackedLabel>
                                <Label style={{ color: 'black' }}>Dirección</Label>
                                <Input placeholder="Av. Rivadavia" />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black' }}>Altura</Label>
                                <Input placeholder="1234" />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black' }}>Codigo Postal</Label>
                                <Input placeholder="4321" />
                            </Item>
                            <Item stackedLabel>
                                <Label style={{ color: 'black' }}>Barrio</Label>
                                <Input placeholder="Caballito" />
                            </Item>
                        </View>
                        :
                        null
                    }
                    <View style={{ paddingRight: "1%", marginTop: '5%' }}>
                        <View style={{ marginBottom: 8, marginLeft: 5 }}>
                            <Text>Debe seleccionar un metodo de pago</Text>
                        </View>
                        {
                            Platform.OS == "ios" ?
                                <View>
                                    <View style={{ padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 10 }}>
                                        <RNPickerSelect
                                            onValueChange={(value) => setValorChange2(value)}
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
                                            selectedValue={selectedLanguage}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setSelectedLanguage(itemValue)
                                            }
                                            placeholder="Hola"
                                        >
                                            <Picker.Item label="Debe seleccionar un metodo de pago" value={null} />
                                            <Picker.Item label="Efectivo" value="efectivo" />
                                            <Picker.Item label="Mercado Pago" value="mp" />
                                        </Picker>
                                    </View>
                                </View>
                        }
                        {
                            (hola === "mp" && value === "ed") ?
                                <View style={{ flex: 1, marginTop: '3%', width: '100%' }}>
                                    <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red' }}> No puedes seleccionar Mercado Pago, si anteriormente has seleccionado en metodo de entrega la opcion "Entregar en dirección propia".</Text>
                                </View>
                                :
                                null

                        }
                        {
                            (selectedDelivery === "ed" && selectedLanguage === "mp") ?
                                <View style={{ flex: 1, marginTop: '3%', width: '100%' }}>
                                    <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red' }}> No puedes seleccionar Mercado Pago, si anteriormente has seleccionado en metodo de entrega la opcion "Entregar en dirección propia".</Text>
                                </View>
                                :
                                null

                        }
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ marginTop: '10%', marginBottom: '5%' }}>
                        <Button style={styles.button} onPress={() => { goToBuyConfirm() }} disabled={isButtonAllowed() ? true : false}>
                            <Text style={styles.text}>Continuar</Text>
                        </Button>
                    </View>
                    {
                        isButtonAllowed() ?
                            <View style={{ flex: 1, marginBottom: '10%', width: '100%', alignItems: 'center' }}>
                                <Text style={{ marginHorizontal: 5, marginBottom: 10, color: 'red', textAlign: "center" }}> Debes completar todos los datos para poder continuar</Text>
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