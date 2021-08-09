import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card, CardItem, Text, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ItemCard = () => {

    //Properties

    // Methods

    return (
        <Card style={{ flex: 0, width: '100%' }}>
            <CardItem >
                <Body>
                    <Image source={{ uri: 'https://i.pinimg.com/564x/a0/ed/e8/a0ede89717a03dd2a4071fe07ac105f1.jpg' }} style={{ height: 300, width: "100%", flex: 1, marginBottom: "1%" }} />
                    <Text>
                        Remera New Collection Body
                    </Text>
                </Body>
            </CardItem>
            <CardItem style={{ marginTop: "-3%" }}>
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <Text>Talles: </Text>
                        <Text style={{ marginLeft: "10%" }}>
                            L
                        </Text>
                        <Text style={{ marginLeft: "10%" }}>
                            M
                        </Text>
                        <Text style={{ marginLeft: "10%" }}>
                            S
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', marginTop: "5%" }}>
                        <Icon name="dollar" size={16} style={{ marginRight: 10 }} />
                        <Text style={{ fontWeight: 'bold' }}>3.495</Text>
                    </View>
                </View>
            </CardItem>
        </Card >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});