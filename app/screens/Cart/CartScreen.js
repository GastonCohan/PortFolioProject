import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Cart = () => {

    //Properties

    // Methods

    return (
        <View style={styles.container}>
            <Text>No tienes ningun producto en el carrito.. </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
});