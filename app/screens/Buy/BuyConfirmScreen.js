import React, { Component } from 'react';
import { Content, Card, CardItem, Body, Button } from 'native-base';
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useCartContext } from "../../context/CartContext";

export const BuyConfirmComponent = () => {

    const navigation = useNavigation();
    const { cart, clearCart } = useCartContext();

    const goBack = () => {
        navigation.goBack("Formulario de compra");
    }

    const totalPrice = () => cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);


    return (

        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, marginTop: "5%" }}>
                    <Card>
                        <CardItem header>
                            <View style={{ alignItems: 'center', flex: 1 }}>
                                <Text style={{ fontSize: 16 }}>Datos de la Compra</Text>
                            </View>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Nombre: </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Apellido: </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Email: </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Numero de telefono: </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Metodo de entrega: </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Metodo de pago: </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Productos: </Text>
                                    <View>
                                        <View style={{ width: "100%" }}>
                                            {cart.map((item) => {
                                                return (
                                                    <View key={item.title} style={{ marginBottom: 10 }}>
                                                        <Text>{item.quantity} x {item.title}</Text>
                                                        <Text style={{ marginTop: 5, fontSize: 14, color: "grey" }}>$ {item.price}</Text>
                                                    </View>
                                                )
                                            })}
                                        </View>
                                    </View>


                                </View>
                            </Body>
                        </CardItem>
                        <CardItem footer style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 15 }}>Total: ${totalPrice()} </Text>
                        </CardItem>
                    </Card>
                </View>
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <View style={{ marginTop: '5%' }}>
                        <Button style={styles.button} onPress={() => { }} >
                            <Text style={styles.text}>Confirmar compra</Text>
                        </Button>
                    </View>
                    <View style={{ marginTop: '5%', marginBottom: '30%' }}>
                        <Button style={styles.button} onPress={() => { goBack() }} >
                            <Text style={styles.text}>Volver</Text>
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