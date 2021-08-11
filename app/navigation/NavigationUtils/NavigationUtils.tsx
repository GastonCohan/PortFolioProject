import { DrawerActions } from "@react-navigation/native";

class NavigationUtils {
    navigation: any;

    toggleDrawer() {
        this.navigation.dispatch(DrawerActions.openDrawer());
    }
}

const navigationUtils = new NavigationUtils();

export {
    navigationUtils
}