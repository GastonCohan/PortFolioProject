import React, { useState } from 'react';
import { View, Button, Platform, Text, Image } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from "react-native-gesture-handler";

export const DateTimePickerComponent = () => {
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const dateIcon = require('../../assets/ic-date.png');


    const parseDate = (date: any) => {
        const firstDate = JSON.stringify(date);
        const secondDate = firstDate.substr(1, 10);

        return secondDate;
    }

    const parsedDate = parseDate(date);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <View style={{ paddingVertical: 8 }}>
            <Text style={{ marginLeft: 5 }} >Fecha de nacimiento</Text>
            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', height: 40, width: '85%', borderColor: "grey", borderWidth: 2, backgroundColor: "#FFFFFF", borderRadius: 30, padding: 8, paddingLeft: 24, marginLeft: 10 }}>
                    <Text style={{ fontSize: 16, width: "85%" }} >{parsedDate}</Text>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <TouchableOpacity onPress={showDatepicker}>
                        <Image source={dateIcon} style={{ height: 25, width: 25 }} />
                    </TouchableOpacity>
                </View>
            </View>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={false}
                    display="calendar"
                    onChange={onChange}
                    style={{ height: 50, width: "100%", alignItems: 'center', alignSelf: "center", justifyContent: 'center', left: "35%" }}
                />
            )}
        </View>
    );
};
