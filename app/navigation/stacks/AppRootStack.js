import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { LoginComponent } from "../../screens/Login/LoginComponent";
import { RegisterComponent } from "../../screens/Register/RegisterComponent";
import { HomeComponent } from "../../screens/Home/HomeComponent";
import { MenShirts } from "../../screens/Shop/MenShirts/MenShirts";
import { Cart, CartComponent } from "../../screens/Cart/CartScreen";
import { CartProvider } from "../../context/CartContext";
import { MenHoodies } from "../../screens/Shop/MenHoodies/MenHoodies";
import { MenShoes } from "../../screens/Shop/MenShoes/MenShoes";
import { BuyComponent } from "../../screens/Buy/BuyScreen";
import MainDrawerStack from "./drawer/MainDrawerStack";
import { BuyConfirmComponent } from "../../screens/Buy/BuyConfirmScreen";


const AppStackNavigation = createStackNavigator();

export const AppRootStack = () => {
    return (
        <NavigationContainer>
            <StatusBar style="light" backgroundColor={"#334257"} />
            <CartProvider>
                <AppStackNavigation.Navigator initialRouteName={LoginComponent}>
                    <AppStackNavigation.Screen name={'Login'}
                        component={LoginComponent}
                        options={{ headerShown: false }}
                    />
                    <AppStackNavigation.Screen name={'Registro'}
                        component={RegisterComponent}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />
                    <AppStackNavigation.Screen name={'Home'}
                        component={MainDrawerStack}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <AppStackNavigation.Screen name={'Men Shirts'}
                        component={MenShirts}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />
                    <AppStackNavigation.Screen name={'Men Hoodies'}
                        component={MenHoodies}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />
                    <AppStackNavigation.Screen name={'Men Shoes'}
                        component={MenShoes}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />
                    <AppStackNavigation.Screen name={'Carrito'}
                        component={CartComponent}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />
                    <AppStackNavigation.Screen name={'Formulario de Compra'}
                        component={BuyComponent}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />
                    <AppStackNavigation.Screen name={'Confirmar Compra'}
                        component={BuyConfirmComponent}
                        options={{
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: '#334257'
                            },
                            headerTintColor: "#fff",
                            headerBackTitleVisible: false
                        }} />


                </AppStackNavigation.Navigator>
            </CartProvider>
        </NavigationContainer>
    );
}
