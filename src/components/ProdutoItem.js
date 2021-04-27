import React, {Component} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Resolution from '../utils/resolution'
import styles_global from '../styles/global'
import Colors from '../styles/Colors'
import botoes_styles from '../styles/botoes_styles'

export default class ProdutoItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            key: props.key,
            isLeft: props.isLeft,
            produto: props.produto,
            onPress: props.onPress
        }
    }
    getLocationPromo(){
        return this.state.isLeft ? {position: 'absolute', width: Resolution.isBig() ? 220 : 110, height: Resolution.isBig() ? 80 : 50,} : {position: 'absolute', width: Resolution.isBig() ? 200 : 110, height: Resolution.isBig() ? 70 : 50, right: 10}
    }
    getLocationImage(){
        return this.state.isLeft ? {
            width: Resolution.width / 5 * 3,
            height: Resolution.height / 3,
            marginLeft: 10,
            marginTop: 20
        } : {
            width: Resolution.width / 5 * 3,
            height: Resolution.height / 3,
            marginTop: 20,
            marginRight: 20,
            alignSelf: 'flex-end',
        }
    }
    getBoxPosition(){
        return this.state.isLeft ? {position: 'absolute', right: 20, top: ((Resolution.height / 3) / 5), width: '55%'} : {position: 'absolute', left: 0, top: ((Resolution.height / 3) / 5), width: '55%'}
    }
    render(){
        return (
            <View key={this.state.key} style={{marginTop: 10, marginBottom: 20}}>
                { this.state.produto.off > 0 ? (<View style={this.getLocationPromo()}>
                    <View style={botoes_styles.promo_background}>
                        <Text style={botoes_styles.promo_text_s}>{this.state.produto.off}% OFF</Text>
                    </View>
                </View>) : (<></>) }
                <Image key={this.state.produto.id.toString()} resizeMode='cover' style={this.getLocationImage()} source={this.state.produto.image_source}/>
                {/* BOX */}
                <View style={this.getBoxPosition()}>
                    <View style={styles_global.white_box}>
                        <Text style={styles_global.small_topic}>{this.state.produto.name}</Text>
                        <View style={{height: 5}}></View>
                        {this.state.produto.off > 0 ? <Text style={{textDecorationLine: 'line-through', fontSize: Resolution.isBig() ? 24 : 18}}>R${this.state.produto.price}</Text> : <></>}
                        <Text style={{fontSize: Resolution.isBig() ? 52 : 30, marginTop: -5}}>R${this.state.produto.newPrice()}</Text>
                        <Text style={{color: Colors.gray, fontSize: Resolution.isBig() ? 24 : 18}}>{this.state.produto.description}</Text>
                        <Text style={{fontSize: Resolution.isBig() ? 18 : 10}}>{this.state.produto.disponivel}</Text>
                        <View style={{height: 10}}></View>
                    </View>
                    <View style={{position: 'absolute', bottom: -1 * (((Resolution.height / 3) / 5) / 5 * 4), marginHorizontal: '15%', width: '70%', height: ((Resolution.height / 3) / 5)}}>
                        <TouchableOpacity style={botoes_styles.buy_button_back} onPress={this.state.onPress}>
                            <Text style={botoes_styles.buy_button_text}>COMPRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}