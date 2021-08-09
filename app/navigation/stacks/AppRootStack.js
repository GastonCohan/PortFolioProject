import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StartComponent } from "../../screens/Start/StartComponent";
import { LoginComponent } from "../../screens/Login/LoginComponent";
import { RegisterComponent } from "../../screens/Register/RegisterComponent";
import { HomeComponent } from "../../screens/Home/HomeComponent";
import { MenShirts } from "../../screens/Shop/MenShirts/MenShirts";


const AppStackNavigation = createStackNavigator();

export const AppRootStack = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" backgroundColor={"#334257"} />
            <AppStackNavigation.Navigator initialRouteName={StartComponent}>
                <AppStackNavigation.Screen name={"Start"}
                    component={StartComponent}
                    options={{
                        headerShown: false
                    }} />
                <AppStackNavigation.Screen name={'Login'}
                    component={LoginComponent}
                    options={{
                        headerShown: false
                    }} />
                <AppStackNavigation.Screen name={'Register'}
                    component={RegisterComponent}
                    options={{
                        headerShown: false
                    }} />
                <AppStackNavigation.Screen name={'Home'}
                    component={HomeComponent}
                    options={{
                        headerShown: false
                    }} />
                <AppStackNavigation.Screen name={'Men Shirts'}
                    component={MenShirts}
                    options={{
                        headerShown: true,
                    }} />
            </AppStackNavigation.Navigator>
        </NavigationContainer>
    );
}
