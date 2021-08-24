import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeComponent } from '../../../screens/Home/HomeComponent';
import { CartComponent } from '../../../screens/Cart/CartScreen';

const Drawer = createDrawerNavigator();

export default function MainDrawerStack() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={HomeComponent}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#334257'
                    },
                    headerTintColor: "#fff"
                }}

            />
            <Drawer.Screen name="Carrito" component={CartComponent}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#334257'
                    },
                    headerTintColor: "#fff"
                }} />
        </Drawer.Navigator>
    );
}