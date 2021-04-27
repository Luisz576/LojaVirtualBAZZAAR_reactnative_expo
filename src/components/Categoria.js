import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Resolution from '../utils/resolution'
import styles_global from '../styles/global'
import botoes_styles from '../styles/botoes_styles'

export default class Categoria extends Component{
    constructor(props){
        super(props)
        this.navigation = props.navigation
        this.state = {
            image_source: props.image_source,
            name: props.name,
            categoria: props.categoria
        }
    }
    render(){
        return (
            <TouchableOpacity onPress={()=>{
                this.navigation.push('Categoria', { search_for_categoria: true, search_by: this.state.categoria, categoria_name: this.state.name })
            }}>
                <View style={{width: Resolution.isBig() ? 220 : 110, marginRight: Resolution.isBig() ? 40 : 20}}>
                    <View style={{width: '100%', height: Resolution.isBig() ? 220 : 110}}>
                        <Image style={botoes_styles.image_buttom} source={this.state.image_source}/>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles_global.small_title}>{this.state.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}