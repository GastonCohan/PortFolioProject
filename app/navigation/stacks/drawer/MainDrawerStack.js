import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeComponent } from '../../../screens/Home/HomeComponent';
import CustomDrawer from '../../CustomDrawer/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function MainDrawerStack() {
    return (
        <Drawer.Navigator
            initialRouteName="Inicio"
            drawerContent={props => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Inicio" component={HomeComponent}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#334257'
                    },
                    headerTintColor: "#fff"
                }}

            />
        </Drawer.Navigator>
    );
}