import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity, FlatList } from "react-native";

export default class FichaScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Calendario', { item: this.props.item})}>
                <Text>
                    {this.props.item.nome}
                </Text>
            </TouchableOpacity>
        )




    }
}