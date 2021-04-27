import React from 'react'
import { View, Image, Text, ScrollView, ColorPropType } from 'react-native'
import Resolution from '../../utils/resolution'
import MapView, { Marker } from 'react-native-maps'
import styles_global from '../../styles/global'

const storeLocation= {latitude: -23.5884573, longitude: -46.6842844, latitudeDelta: 0.0042, longitudeDelta: 0.0031 }

export default function SobrePage(){
    return (
        <ScrollView>
            <Image style={{width: '100%', height: Resolution.height / 10 * 4}} source={require('../../imgs/loja.jpg')}/>
            <View style={{marginTop: -1 * Resolution.width / 2 / 2, marginLeft: 20, }}>
                <MapView style={{width: Resolution.width / 2, height: Resolution.width / 2,}} showsBuildings={false} scrollEnabled={false} zoomEnabled={false} showsPointsOfInterest={false} rotateEnabled={false} region={storeLocation}><Marker coordinate={storeLocation} pinColor={"red"} title={"BAZZAAR"}/></MapView>
            </View>
            <View style={styles_global.margin_page_with_nav_bar}>
                <Text style={{fontSize: Resolution.isBig() ? 24 : 14}}>Av 18 de abril, bairro Centro em São Paulo - SP, Brasil</Text>
                <View style={{height: Resolution.isBig() ? 25 : 10}}></View>
                <Text style={styles_global.topic}>Sobre a loja</Text>
                <Text style={{textAlign: 'justify', fontSize: Resolution.isBig() ? 26 : 15, marginRight: 20}}>Estamos no mercado a mais de 5 anos, já atendemos diversos clientes, de todas as regiões do Brasil. Nós nos orgulhamos por nosso comprometimento com nossos clientes.</Text>
                <View style={{height: Resolution.isBig() ? 25 : 10}}></View>
                <Text style={styles_global.topic}>Entre em contato</Text>
                <View style={{height: Resolution.isBig() ? 10 : 4}}></View>
                <Text style={{fontSize: Resolution.isBig() ? 28 : 16}}>(00) 000000000 - Whatsapp</Text>
                <View style={{height: Resolution.isBig() ? 10 : 4}}></View>
                <Text style={{fontSize: Resolution.isBig() ? 28 : 16}}>(00) 0000-0000 - Telefone</Text>
                <View style={{height: Resolution.isBig() ? 10 : 4}}></View>
                <Text style={{fontSize: Resolution.isBig() ? 28 : 16}}>bazzaar@atendimento.com</Text>
            </View>
        </ScrollView>
    );
}