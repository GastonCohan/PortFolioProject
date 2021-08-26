import React from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { DrawerItem } from '@react-navigation/drawer';
import { StackActions, CommonActions, useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from 'react-native'
import { LoginComponent } from '../../screens/Login/LoginComponent';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

function CustomDrawer(props) {

    const navigation = useNavigation();

    const cleanStackAndGoToMainAction = CommonActions.reset({
        routes: [
            { name: "Login" }
        ],
    });

    const logOut = async () => {
        firebase.auth().signOut()
        navigation.dispatch(cleanStackAndGoToMainAction);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <DrawerItem
                    label="Home"
                    onPress={() => props.navigation.navigate("Home")}
                />
                <DrawerItem
                    label="Carrito"
                    onPress={() => props.navigation.navigate("Carrito")}

                />
                <View style={{ marginTop: 50, marginBottom: 15 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text> Hombre</Text>
                    </View>
                    <DrawerItem
                        label="Remeras"
                        onPress={() => props.navigation.navigate("Men Shirts")}
                    />
                    <DrawerItem
                        label="Zapatillas"
                        onPress={() => props.navigation.navigate("Men Shoes")}
                    />
                    <DrawerItem
                        label="Buzos"
                        onPress={() => props.navigation.navigate("Men Hoodies")}
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