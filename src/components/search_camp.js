import React, {Component} from 'react'
import { View, TextInput, Image, TouchableOpacity, } from 'react-native'
import Resolution from '../utils/resolution'
import botoes_styles from '../styles/botoes_styles'
import Colors from '../styles/Colors'
import input_styles from '../styles/input_styles'
import Icon from 'react-native-vector-icons/Feather'

export default class PromocaoTextoBase extends Component{
    constructor(props){
        super(props)
        this.navigation = props.navigation
        this.state = {
            search_by: "",
        }
    }
    render(){
        return (
            <View style={input_styles.search_background}>
                <View style={input_styles.search_input_background}>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={input_styles.search_input_margin}>
                            <TextInput style={{fontSize: Resolution.isBig() ? 38 : 22}} maxLength={25} placeholder="Buscar" onChangeText={(text) => { this.setState({search_by: text})}} value={this.state.search_by}/>
                        </View>
                        <TouchableOpacity style={botoes_styles.search_bt} onPress={() => {this.state.search_by.trim().length > 0 ? this.navigation.push('Busca', { search_by: this.state.search_by.trim() }) : null}}>
                            <Icon name={"search"} color={Colors.black} size={Resolution.isBig() ? 50 : 25}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}