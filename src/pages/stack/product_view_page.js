import React from 'react'
import { View, Image, Text, TouchableOpacity, } from 'react-native'
import Row from '../../components/Row'
import Resolution from '../../utils/resolution'
import createAppbarStyle from '../../styles/app_bar_style'
import produtos_database from '../../services/produtos_database'
import styles_global from '../../styles/global'
import botoes_styles from '../../styles/botoes_styles'

export default function ProductViewPage({ route, navigation }){
  const props = route.params
  const produto = produtos_database.getProductById(props.produto_id) //GET PRODUCT FROM DATABASE
  setTimeout(()=>{ navigation.setOptions(createAppbarStyle(produto.name)) }, 0) //UPDATE TITLE
  return (
    <>
      <View>
          {
            produto.off > 0 ?
            (<View style={{position: 'absolute'}}>
              <View style={{width: Resolution.isBig() ? 220 : 140, height: Resolution.isBig() ? 100 : 60}}>
                  <View style={botoes_styles.promo_background}>
                      <Text style={botoes_styles.promo_text}>{produto.off}% OFF</Text>
                  </View>
              </View>
            </View>)
            : (<></>)
          }
          {
            produto.image_source ? ( <View style={{height: Resolution.height / 10 * 4}}><Image style={{width: '100%', height: '100%'}} source={produto.image_source}/></View>) :
            (<Text style={{marginTop: 60, marginLeft: 20}}>Não foi possível carregar a imagem!</Text>)
          }
          <View style={{height: Resolution.height / 10 * 4}}>
            <View style={styles_global.margin_page}>
              <Text style={styles_global.topic}>{produto.name}</Text>
              <View style={{height: 10}}></View>
              <Row>
                {produto.off > 0 ? (<><Text style={{textDecorationLine:'line-through', fontSize: Resolution.isBig() ? 42 : 26}}>R${produto.price}</Text><View style={{width: '2%'}}></View></>) : (<></>)}
                <Text style={{fontSize: Resolution.isBig() ? 56 : 40}}>R${produto.newPrice()}</Text>
              </Row>
              <View style={{height: Resolution.isBig() ? 30 : 10}}></View>
              <Text style={{fontSize: Resolution.isBig() ? 32 : 16}}>{produto.description}</Text>
            </View>
          </View>
        </View>
        <View style={botoes_styles.button_bottom}>
        <TouchableOpacity onPress={()=>{alert("Sistema de banco não foi implementado!")}}>
          <Text style={styles_global.big_white_text}>COMPRAR AGORA</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}