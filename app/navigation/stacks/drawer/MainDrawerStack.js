import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeComponent } from '../../../screens/Home/HomeComponent';
import { CartComponent } from '../../../screens/Cart/CartScreen';
import CustomDrawer from '../../CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function MainDrawerStack() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={props => <CustomDrawer {...props} />}
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
                    headerTintColor: "#fff",
                }}
            />


        </Drawer.Navigator>
    );
}