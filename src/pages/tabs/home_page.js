import React from 'react'
import { View, Text, ScrollView, } from 'react-native'
import Categoria from '../../components/Categoria'
import renderItem from '../../utils/renderItem'
import produtos_database from '../../services/produtos_database'
import SearchCamp from '../../components/search_camp'
import styles_global from '../../styles/global'

export default function HomePage({ navigation }){
  var produtos = produtos_database.getProducts()
  var produtosDesconto = produtos.filter(produto => {
    if(produto.off > 0)
      return produto
  })
  var index = -1
  return (
    <ScrollView>
      <SearchCamp navigation={navigation}/>
      <View style={styles_global.margin_page_with_nav_bar}>
        <View>
          <Text style={styles_global.topic}>Categorias</Text>
          <View style={{height: 10}}></View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Categoria navigation={navigation} categoria="masc" name="Masculino" image_source={require('../../imgs/roupa-branca.jpg')}/>
            <Categoria navigation={navigation} categoria="fem" name="Feminino" image_source={require('../../imgs/roupa-branca-fem.jpg')}/>
            <Categoria navigation={navigation} categoria="inf" name="Infantil" image_source={require('../../imgs/roupa-branca.jpg')}/>
            <Categoria navigation={navigation} categoria="juv" name="Juvenil" image_source={require('../../imgs/roupa-branca.jpg')}/>
          </ScrollView>
        </View>
        <View style={{height: 20}}></View>
        <View>
          <Text style={styles_global.topic}>Promoções</Text>
          <View style={{height: 10}}></View>
          { produtosDesconto.map(produto => {index++; return renderItem(navigation, index, produto); }) }
        </View>
      </View>
    </ScrollView>
  )
}