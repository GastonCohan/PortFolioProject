import React, { useState, useEffect } from "react"
import { Image, StyleSheet, View, Alert, Modal, Button, TouchableOpacityBase } from 'react-native';
import { Card, CardItem, Text, Body } from 'native-base';
import { db } from "../firebase/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import STYLES from './Styles/Styles'
import { useCartContext } from "../context/CartContext";


export const ItemCard = (props) => {

    //Properties

    const [productos, setProductos] = useState([]);
    const [errorModalVisible, setErrorModalVisible] = React.useState(false);
    const [contador, setContador] = useState(1);
    const { addToCart } = useCartContext();
    const { cart, clearCart } = useCartContext();
    const [selectProduct, setSelectProduct] = useState({})

    console.log("carrito:", cart)
    // console.log("contador: ", contador)
    // console.log("producto seleccionado: ", selectProduct)

    // Methods

    useEffect(() => {
        // setProducts(productsData);
        getProducts()
    }, []);

    const getProducts = () => {
        const docs = [];
        db.collection(props.collection).onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setProductos(docs)
        })
    }

    const addToCartCheck = (producto) => {
        // return Alert.alert('Funcionabilidad no disponible..')
        setErrorModalVisible(true);
        setSelectProduct(producto)
    }

    const addQuantityProduct = () => {
        setContador(contador + 1)
    }

    const restQuantityProduct = () => {
        if (contador === 1) {
            return contador
        } else {
            setContador(contador - 1)
        }

    }

    const closeModal = () => {
        setErrorModalVisible(false)
        setContador(1)
    }

    return (
        <View style={{ width: '100%' }}>
            {productos.map((producto) => {
                return (
                    // <TouchableOpacity onPress={goToDetailItem}>
                    <Card style={{ flex: 0, marginBottom: '3%' }} key={producto.title}>
                        <CardItem >
                            <Body>
                                <Image source={{ uri: producto.img1 }} style={{ height: 300, width: "100%", flex: 1, marginBottom: "1%" }} resizeMode="stretch" />
                                <Text>
                                    {producto.title}
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem style={{ marginTop: "-3%" }}>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <Text>Talles:</Text>
                                    <Text style={{ marginLeft: "5%" }}>
                                        {producto.talle1}
                                    </Text>
                                    <Text style={{ marginLeft: "10%" }}>
                                        {producto.talle2}
                                    </Text>
                                    <Text style={{ marginLeft: "10%" }}>
                                        {producto.talle3}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', marginTop: "5%" }}>
                                    <Icon name="dollar" size={16} style={{ marginRight: 5 }} />
                                    <Text style={{ fontWeight: 'bold' }}>{producto.price}</Text>
                                </View>
                            </View>
                        </CardItem>
                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, alignItems: "flex-end", marginRight: 15, marginBottom: "3%" }}>
                                <TouchableOpacity onPress={() => { addToCartCheck(producto) }}>
                                    <Icon name="cart-plus" size={25} style={{ marginRight: 10 }} >
                                    </Icon>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card >
                    // </TouchableOpacity>
                )
            })}

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
                            <Text style={STYLES.modals.modalText}>Estás a punto de agregar este producto {selectProduct.title} al carrito. ¿Cuántos desea agregar? </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: "center", marginTop: -5 }}>
                            <Icon name='minus' size={15} onPress={() => { restQuantityProduct() }}></Icon>
                            <Text style={{ fontSize: 20 }}>  {contador}  </Text>
                            <Icon name='plus' size={15} onPress={() => { addQuantityProduct() }}></Icon>
                        </View>

                        <Button color="#334257" title={"Agregar al carrito"} onPress={() => { addToCart(selectProduct, contador); closeModal() }} />
                        <View style={{ marginTop: 10 }}>
                            <Button color="#334257" title={"Cerrar"} onPress={closeModal} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}