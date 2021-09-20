import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from '@react-navigation/drawer';
import { CommonActions, useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from 'react-native'
import firebase from 'firebase';

function CustomDrawer(props) {

    const navigation = useNavigation();

    const cleanStackAndGoToMainAction = CommonActions.reset({
        routes: [
            { name: "Login" }
        ],
    });

    const logOut = async () => {
        try {
            await firebase.auth().signOut();
            navigation.dispatch(cleanStackAndGoToMainAction);
        } catch (error) {
            console.log(error);
        }
    }

    const goToHome = () => {
        props.navigation.navigate("Home")
        props.navigation.closeDrawer()
    }

    const goToCart = () => {
        props.navigation.navigate("Carrito")
        props.navigation.closeDrawer()
    }

    const goToMenShrits = () => {
        props.navigation.navigate("Men Shirts")
        props.navigation.closeDrawer()
    }

    const goToMenShoes = () => {
        props.navigation.navigate("Men Shoes")
        props.navigation.closeDrawer()
    }

    const goToMenHoodies = () => {
        props.navigation.navigate("Men Hoodies")
        props.navigation.closeDrawer()
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="Inicio"
                    onPress={() => goToHome()}
                />
                <DrawerItem
                    label="Carrito"
                    onPress={() => goToCart()}

                />
                <View style={{ marginTop: 50, marginBottom: 15 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text> Hombre</Text>
                    </View>
                    <DrawerItem
                        label="Remeras"
                        onPress={() => goToMenShrits()}
                    />
                    <DrawerItem
                        label="Zapatillas"
                        onPress={() => goToMenShoes()}
                    />
                    <DrawerItem
                        label="Buzos"
                        onPress={() => goToMenHoodies()}
                    />
                </View>
                <View style={{ marginTop: 25, marginBottom: 15 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text> Mujer </Text>
                    </View>
                    <DrawerItem
                        label="Remeras"
                        onPress={() => props.navigation.navigate("Woman Shirts")}
                    />
                    <DrawerItem
                        label="Zapatillas"
                        onPress={() => props.navigation.navigate("Woman Shoes")}
                    />
                    <DrawerItem
                        label="Buzos"
                        onPress={() => props.navigation.navigate("Woman Hoodies")}
                    />
                </View>
            </DrawerContentScrollView>
            <View style={{ justifyContent: 'flex-end', marginBottom: 30, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => logOut()}>
                    <Text style={{ fontSize: 15, color: "#268FFF" }}> Cerrar Sesion</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default CustomDrawer;