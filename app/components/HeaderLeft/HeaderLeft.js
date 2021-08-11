import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";
import { navigationUtils } from "../../navigation/NavigationUtils/NavigationUtils";

const toggleDrawerMenuIcon = require("../../assets/ic-drawer-menu.png")

export const HeaderLeft = () => {
    return (
        <TouchableOpacity style={{ marginLeft: 16 }} onPress={() => navigationUtils.toggleDrawer()}>
            <Image source={toggleDrawerMenuIcon} style={{ tintColor: "#FFFFFF" }} />
        </TouchableOpacity>
    );
}