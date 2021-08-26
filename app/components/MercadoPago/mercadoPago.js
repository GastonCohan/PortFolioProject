import React from 'react';
import { MercadoPagoCheckout } from 'react-native-checkout-mercadopago';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class MercadoPago extends React.Component {
    state = {
        status: null
    };

    handlePaymentClick = async () => {
        try {
            const enableDarkFont = false;
            const backgroundColor = '#F44336';

            this.updatePaymentStatus(null);

            const payment = await MercadoPagoCheckout.startForPayment(env['public_key'], env['preference_id'], {
                backgroundColor,
                enableDarkFont
            });

            this.updatePaymentStatus(JSON.stringify(payment, null, 2));
        } catch (error) {
            this.updatePaymentStatus(error.toString());
        }
    };

    handlePaymentDataClick = async () => {
        try {
            const enableDarkFont = false;
            const backgroundColor = '#F44336';

            this.updatePaymentStatus(null);

            const payment = await MercadoPagoCheckout.startForPaymentData(env['public_key'], env['preference_id'], {
                backgroundColor,
                enableDarkFont
            });

            this.updatePaymentStatus(JSON.stringify(payment, null, 2));
        } catch (error) {
            this.updatePaymentStatus(error.toString());
        }
    };

    updatePaymentStatus = status => this.setState(state => ({ status }));

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={styles.button} onPress={this.handlePaymentClick}>
                    <Text style={styles.text}>
                        Confirmar compra por mercado pago $100
                    </Text>
                </TouchableHighlight>
                <Text>
                    {this.state.status}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10
    },
    text: {
        color: 'white'
    }
});