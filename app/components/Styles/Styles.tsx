import { ViewStyle } from 'react-native';


const STYLES = {
    modals: {
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        } as ViewStyle,
        modalTitle: {
            justifyContent: 'center',
            height: 35,
            padding: 8,
            backgroundColor: "#334257",
            width: '75%',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5
        } as ViewStyle,
        modalTitleText: {
            fontSize: 16,
            color: 'white',
            textAlign: "center",
            fontWeight: 'bold',
        } as ViewStyle,
        modalView: {
            marginTop: 0,
            margin: 20,
            backgroundColor: 'white',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            padding: 15,
            alignItems: 'center',
            width: '75%',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        } as ViewStyle,
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        } as ViewStyle,
        modalText: {
            marginBottom: 20,
            textAlign: 'center',
            marginTop: 10

        } as ViewStyle
    },
    buttons: {
        primary: {
            height: 60,
            borderRadius: 30, // Should be half the height for circular
            justifyContent: "center",
            alignItems: "center",
            padding: 16
        } as ViewStyle,
        secondary: {
            height: 60,
            borderRadius: 30, // Should be half the height for circular
            justifyContent: "center",
            alignItems: "center",
            padding: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderColor: "#FFFFFF",
            borderWidth: 1
        } as ViewStyle
    },
}

export default STYLES;