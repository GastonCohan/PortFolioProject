import React, { useLayoutEffect } from "react";
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import { useCartContext } from "../../context/CartContext";
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { useNavigation, StackActions } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

export const CartComponent = ({ navigation }) => {

    const { cart, clearCart } = useCartContext();

    //Properties

    const navigation2 = useNavigation();

    // Methods

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => navigation2.goBack()}>
                        <Icon name="arrow-back" size={25} color="white"> </Icon>
                    </TouchableOpacity>
                </View>
            )
        })
    }, [])

    const goToBuyForm = () => {
        navigation2.dispatch(StackActions.push("Formulario de Compra"));
    }

    const totalPrice = () => cart.reduce((acc, item) => {
        return acc + item.price * item.quantity
    }, 0);

    const totalCartProducts = () => {
        if (cart.length > 0) {
            return false
        } else {
            return true
        }
    }

    const { removeProduct } = useCartContext();

    return (
        <View style={{ flex: 1 }}>
            {totalCartProducts() ?
                <View style={styles.container}>
                    <Text> No tienes productos en tu carrito</Text>
                </View>
                :
                <View style={{ flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                        {cart.map((item) => {
                            return (
                                <Content key={item.title}>
                                    <List>
                                        <ListItem thumbnail>
                                            <Left>
                                                <Thumbnail square source={{ uri: item.img1 }} />
                                            </Left>
                                            <Body>
                                                <Text>{item.quantity} x {item.title}</Text>
                                                <Text>Talle: {item.size}</Text>
                                                <Text style={{ marginTop: 5, fontSize: 14, color: "grey" }}>$ {item.price}</Text>
                                            </Body>
                                            <Right>
                                                <Button transparent onPress={() => removeProduct(item)}>
                                                    <Text style={{ color: '#7C83FD' }} >Eliminar</Text>
                                                </Button>
                                            </Right>
                                        </ListItem>
                                    </List>
                                </Content>
                            )
                        })}
                    </ScrollView>
                    <View style={{ justifyContent: 'center', alignItems: "center" }}>
                        <View style={{ marginBottom: "15%" }}>
                            <View style={{ marginBottom: '3%' }} >
                                <View style={{ marginBottom: '4%', alignItems: "center" }} >
                                    <Text style={{ color: 'black', fontSize: 16 }}>Total: ${totalPrice()} </Text>
                                </View>
                                <Button style={styles.button} onPress={goToBuyForm}>
                                    <Text style={styles.text}>Comprar</Text>
                                </Button>
                            </View>
                            <Button style={styles.button} onPress={clearCart}>
                                <Text style={styles.text}>Vaciar Carrito</Text>
                            </Button>
                        </View>
                    </View>
                </View>

            }
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