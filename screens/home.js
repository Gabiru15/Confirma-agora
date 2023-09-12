import React,{Component} from "react";
import { Text,StyleSheet,View,TouchableOpacity,FlatList } from "react-native";

const Agendas = require ('../teste.json')

export default class HomeScreen extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    renderItem = ({item,i}) => {
        return (
            <TouchableOpacity  onPress = {() => this.props.navigation.navigate('Calendario',{item:item})}>
                <Text>
                    {item.nome} 
                </Text>
            </TouchableOpacity>
        )
    }
    
    keyExtractor = (item, index) => index.toString();

    render(){
        return(
            <View> 
                <View> 
                    <Text>Confirma Agora</Text>
                </View>
                <View>
                    <FlatList
                    data = {Agendas}
                    renderItem = {this.renderItem} 
                    keyExtractor = {this.keyExtractor} />
                </View>
            </View>
        )
    }
}



