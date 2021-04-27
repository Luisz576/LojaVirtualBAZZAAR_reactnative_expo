import React from 'react'
import { View, Text, Image } from 'react-native'
import Resolution from '../../utils/resolution'
import styles_global from '../../styles/global'

export default function CartoesPage(){
    return (
        <View>
            <Image resizeMode='contain' style={{width: '100%', height: Resolution.height / 10 * 4}} source={require('../../imgs/cartoes.png')}/>
            <View style={styles_global.margin_page_with_nav_bar}>
                <Text style={{marginTop: -20, fontWeight: 'bold', fontSize: Resolution.isBig() ? 32 : 14}}>*Aceitamos os mais diversos tipos de cartões</Text>
            </View>
        </View>
    );
}