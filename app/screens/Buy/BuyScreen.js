import React, { useState } from "react"
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Item, Input, Label, Button } from 'native-base';
import { DateTimePickerComponent } from "../../components/DatePicker/DatePickerComponent";
import { Picker } from '@react-native-picker/picker';

export const BuyComponent = () => {

    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                <View style={{ marginTop: '10%', paddingHorizontal: 10 }}>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Nombre</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Apellido</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Email</Label>
                        <Input />
                    </Item>
                    <Item stackedLabel>
                        <Label style={{ color: 'black' }}>Número de telefono</Label>
                        <Input />
                    </Item>
                    <DateTimePickerComponent />
                    <View style={{ marginTop: '5%', paddingRight: "1%" }}>
                        <Picker
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }
                        >
                            <Picker.Item label="Efectivo" value="efectivo" />
                            <Picker.Item label="Tarjeta de Crédito" value="tc" />
                            <Picker.Item label="Tarjeta de Débito" value="td" />
                            <Picker.Item label="Transferencia Bancaria" value="tb" />
                            <Picker.Item label="Mercado Pago" value="mp" />
                        </Picker>
                        <View style={{ marginTop: 8, marginLeft: 5 }}>
                            <Text>Debe seleccionar un metodo de pago</Text>
                        </View>
                        {selectedLanguage === "tc" ?
                            <View style={{ flex: 1, marginTop: '5%', alignItems: 'center' }}>
                                <Text>Tarjeta de credito seleccionado (hacer)</Text>
                            </View>
                            :
                            null
                        }
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ marginTop: '10%', marginBottom: '10%' }}>
                        <Button style={styles.button}  >
                            <Text style={styles.text}>Continuar</Text>
                        </Button>
                    </View>
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