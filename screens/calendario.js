import React,{Component} from "react";
import { Text,StyleSheet,View,TouchableOpacity,FlatList } from "react-native";

export default class CalendarioScreen extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render (){
return (
    <View> 
        <Text>Calendário{this.props.route.params.item}</Text>
    </View>
)




 }
}

