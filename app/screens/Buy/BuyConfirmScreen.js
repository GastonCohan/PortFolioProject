import React, { useState } from 'react';
import { Card, CardItem, Body, Button, Left, Thumbnail } from 'native-base';
import { View, StyleSheet, ScrollView, Text, Alert } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { useCartContext } from "../../context/CartContext";
import { useRoute } from "@react-navigation/native";
import { db } from '../../firebase/firebase';


export const BuyConfirmComponent = () => {

    const navigation = useNavigation();
    const { cart, clearCart } = useCartContext();
    const params = useRoute().params;

    let nameRecived = params["name"];
    let lastnameRecived = params["lastname"];
    let emailRecived = params["email"];
    let telefoneRecived = params["telefone"];
    let metodoDeEntregaEnIosRecived = params["metodoDeEntregaEnIos"];
    let metodoDeEntregaEnAndroidRecived = params["metodoDeEntregaEnAndroid"];
    let metodoDePagoEnIosRecived = params["metodoDePagoEnIos"];
    let metodoDePagoEnAndroidRecived = params["metodoDePagoEnAndroid"];
    let direccionRecived = params["direccion"];
    let alturaRecived = params["altura"];
    let codigoPostalRecived = params["codigoPostal"];
    let barrioRecived = params["barrio"];
    let pisoRecived = params["piso"];

    const [name] = React.useState(nameRecived);
    const [lastname] = React.useState(lastnameRecived);
    const [email] = React.useState(emailRecived);
    const [telefone] = React.useState(telefoneRecived);
    const [metodoDeEntregaEnIos] = React.useState(metodoDeEntregaEnIosRecived);
    const [metodoDeEntregaEnAndroid] = React.useState(metodoDeEntregaEnAndroidRecived);
    const [metodoDePagoEnIos] = React.useState(metodoDePagoEnIosRecived);
    const [metodoDePagoEnAndroid] = React.useState(metodoDePagoEnAndroidRecived);
    const [direccion] = React.useState(direccionRecived);
    const [altura] = React.useState(alturaRecived);
    const [piso] = React.useState(pisoRecived);
    const [codigoPostal] = React.useState(codigoPostalRecived);
    const [barrio] = React.useState(barrioRecived);

    const goBack = () => {
        navigation.goBack("Formulario de compra");
    }

    const totalPrice = () => cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);

    const metodoDeEntrega = () => {
        if (metodoDeEntregaEnIos === "rl") {
            return "Retirar en local (Calasanz 1578)"
        } if (metodoDeEntregaEnIos === "ed") {
            return "Entregar en dirección propia"
        } if (metodoDeEntregaEnAndroid === "rl") {
            return "Retirar en local (Calasanz 1578)"
        } if (metodoDeEntregaEnAndroid === "ed") {
            return "Entregar en dirección propia"
        } else {
            return null
        }
    }

    const metodoDePago2 = () => {
        if (metodoDePagoEnIos === "efectivo") {
            return "Efectivo"
        } if (metodoDePagoEnIos === "mp") {
            return "Mercado Pago"
        } if (metodoDePagoEnAndroid === "efectivo") {
            return "Efectivo"
        } if (metodoDePagoEnAndroid === "mp") {
            return "Mercado Pago"
        } else {
            return null
        }
    }

    const goToHome = () => {
        navigation.dispatch(cleanStackAndGoToMainAction);
    }

    const cleanStackAndGoToMainAction = CommonActions.reset({
        routes: [
            { name: "Home" }
        ],
    });

    const buyConfirm = () => {
        // actualizar stock

        updateStock()



        // mandar mail a ambos (to do)

        handleOnSubmit()

        // alerta compra confirmada 

        Alert.alert('Compra confirmada')

        // limpiar carrito
        clearCart()

        // mandar a home
        goToHome()
    }

    // const sendEmail = () => {
    //     // emailjs.sendForm(`gmail`, "service_i8nbgw7X", e.target, `template_6gmra19`)

    //         .then((result) => {
    //             alert("Message Sent, We will get back to you shortly", result.text);
    //         },
    //             (error) => {
    //                 alert("An error occurred, Please try again", error.text);
    //             });
    // };



    const addOrder = async (object) => {
        try {
            // console.log('Product', object);
            await db.collection("orders").doc().set(object);
        } catch (error) {
            console.log(error);
        }
    };

    const initialState = {
        nombre: name,
        apellido: lastname,
        email: email,
        telefono: telefone,
        productos: cart
    };

    const [values, setValues] = useState(initialState);

    const handleOnSubmit = () => {
        addOrder(values);
    };


    const updateStock = () => {
        cart.forEach(item => {
            const docRef = db.collection("menShirts").doc(item.id);
            docRef.update({ stock: item.stock - item.quantity })
            // const docRef2 = db.collection("legoProducts").doc(item.id);
            // docRef2.update({ stock: item.stock - item.quantity })
        })
    }

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
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Nombre: {name} </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Apellido: {lastname} </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Email: {email} </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Número de teléfono: {telefone} </Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Método de entrega: {metodoDeEntrega()}</Text>
                                    {
                                        (metodoDeEntregaEnAndroid === "ed" || metodoDeEntregaEnIos === "ed") ?
                                            <View>
                                                <Text style={{ marginBottom: '4%', fontSize: 15 }}>Dirección: {direccion} </Text>
                                                <Text style={{ marginBottom: '4%', fontSize: 15 }}>Altura: {altura}</Text>
                                                <Text style={{ marginBottom: '4%', fontSize: 15 }}>Piso: {piso}</Text>
                                                <Text style={{ marginBottom: '4%', fontSize: 15 }}>Código Postal: {codigoPostal} </Text>
                                                <Text style={{ marginBottom: '4%', fontSize: 15 }}>Barrio: {barrio}</Text>
                                            </View>
                                            :
                                            null
                                    }
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Método de pago: {metodoDePago2()}</Text>
                                    <Text style={{ marginBottom: '4%', fontSize: 15 }}>Productos: </Text>
                                    <View>
                                        <View style={{ width: "100%" }}>
                                            {cart.map((item) => {
                                                return (
                                                    <View key={item.title} style={{ marginBottom: 10 }}>
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View>
                                                                <Left>
                                                                    <Thumbnail square source={{ uri: item.img1 }} />
                                                                </Left>
                                                            </View>
                                                            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                                                <Text>{item.quantity} x {item.title}</Text>
                                                                <Text style={{ marginTop: 5, fontSize: 14, color: "grey" }}>$ {item.price}</Text>
                                                            </View>
                                                        </View>
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
                        <Button style={styles.button} onPress={() => { buyConfirm() }} >
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