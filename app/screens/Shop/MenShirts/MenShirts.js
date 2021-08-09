import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { ItemCard } from "../../../components/ItemCard";
import SearchBarComponent from "../../../components/SearchBar";

export const MenShirts = () => {

    //Properties

    // Methods

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                <SearchBarComponent />
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: "5%", paddingHorizontal: 10 }}>
                    <ItemCard />
                    <ItemCard />
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