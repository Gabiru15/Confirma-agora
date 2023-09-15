import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList, Button } from "react-native";
import { MaterialDatetimePickerAndroid } from 'react-native-material-datetime-picker';


export default class CalendarioScreen extends Component {
    constructor(props) {
        super(props)
        this.state = { date: '', time: '' }
    }

    showTimePicker = () => {
        MaterialDatetimePickerAndroid.show({
            value: this.state.time,
            titleText: 'Escolha o horário do corte',
            mode: AndroidPickerMode.TIME,
            is24Hours: true,
            inputMode: AndroidTimeInputMode.CLOCK,
            onChange: (time) => {
                this.setState ({time:time})
            },
        });
    };

    showDatePicker = () => {
        const {date} = this.state
        MaterialDatetimePickerAndroid.show({
            value: date,
            titleText: 'Escolha o dia do corte',
            mode: AndroidPickerMode.DATE,
            minimumDate: subWeeks(today, 3),
            maximumDate: addWeeks(today, 4),
            inputMode: AndroidDateInputMode.CALENDAR,
            type: AndroidDatePickerType.DEFAULT,
            onChange: (date) => {
                this.setState ({date:date})
            },
        });
    };


    render() {
        return (
            <View>
                <Text>Calendário{this.props.route.params.item.nome}</Text>
                <View>
                    <Button onPress={this.showDatePicker} title="Show date picker" />
                    <Button onPress={this.showTimePicker} title="Show time picker" />
                    <Text>Date: {date.toLocaleString()}</Text>
                    <Text>Time: {time.toLocaleString()}</Text>
                </View>
            </View>

        )


    }
}


