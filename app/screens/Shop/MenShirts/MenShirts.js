import React, { useLayoutEffect } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { ItemCard } from "../../../components/ItemCard";
import SearchBarComponent from "../../../components/SearchBar";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

export const MenShirts = ({ navigation }) => {

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

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                <SearchBarComponent />
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: "5%", paddingHorizontal: 10, width: '100%' }}>
                    <ItemCard collection="menShirts" />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});