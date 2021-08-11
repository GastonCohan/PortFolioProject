import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { LoginComponent } from "../../screens/Login/LoginComponent";
import { RegisterComponent } from "../../screens/Register/RegisterComponent";
import { HomeComponent } from "../../screens/Home/HomeComponent";
import { MenShirts } from "../../screens/Shop/MenShirts/MenShirts";
import { Cart } from "../../screens/Cart/CartScreen";
import { CartProvider } from "../../context/CartContext";
import { MenHoodies } from "../../screens/Shop/MenHoodies/MenHoodies";
import { MenShoes } from "../../screens/Shop/MenShoes/MenShoes";
import { NAVBAR_CONFIG_DRAWER } from "../../components/NavBarConfig/NavBarConfig";


const AppStackNavigation = createStackNavigator();

export const AppRootStack = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" backgroundColor={"#334257"} />
            <CartProvider>
                <AppStackNavigation.Navigator initialRouteName={HomeComponent}>
                    <AppStackNavigation.Screen name={'Home'}
                        component={HomeComponent}
                        options={{ headerShown: true, ...NAVBAR_CONFIG_DRAWER }}
                    />
                    <AppStackNavigation.Screen name={'Login'}
                        component={LoginComponent}
                        options={{ headerShown: false }}
                    />
                    <AppStackNavigation.Screen name={'Registro'}
                        component={RegisterComponent}
                        options={{
                            headerShown: true
                        }} />
                    <AppStackNavigation.Screen name={'Men Shirts'}
                        component={MenShirts}
                        options={{
                            headerShown: true,
                        }} />
                    <AppStackNavigation.Screen name={'Men Hoodies'}
                        component={MenHoodies}
                        options={{
                            headerShown: true,
                        }} />
                    <AppStackNavigation.Screen name={'Men Shoes'}
                        component={MenShoes}
                        options={{
                            headerShown: true,
                        }} />
                    <AppStackNavigation.Screen name={'Carrito'}
                        component={Cart}
                        options={{
                            headerShown: true,
                        }} />
                </AppStackNavigation.Navigator>
            </CartProvider>
        </NavigationContainer>
    );
}
