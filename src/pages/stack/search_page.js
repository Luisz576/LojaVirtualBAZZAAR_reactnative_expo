import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import produtos_database from '../../services/produtos_database'
import Resolution from '../../utils/resolution'
import renderItem from '../../utils/renderItem'
import styles_global from '../../styles/global'

export default function SearchPage({ route, navigation }){
    const props = route.params
    var produtos = []
    if(props.search_for_categoria)
        produtos = produtos_database.getProductsByCategory(props.search_by)
    else
        produtos = produtos_database.getProductsByName(props.search_by)
    var index = -1
    return (
        <ScrollView style={styles_global.margin_page}>
            <Text style={styles_global.topic}>{props.search_for_categoria ? props.categoria_name : props.search_by }</Text>
            <View>
                { produtos.length > 0 ?
                    produtos.map(produto => { index++; return renderItem(navigation, index, produto); }) :
                    <Text style={{fontSize: Resolution.isBig() ? 28 : 14}}>{ props.search_for_categoria ?
                        "Não há nenhum produto cadastrado nesta categoria!" :
                        `Nenhum resultado para: ${props.search_by}` }</Text> }
            </View>
        </ScrollView>
    )
}