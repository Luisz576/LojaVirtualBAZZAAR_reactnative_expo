import { StyleSheet } from 'react-native'
import Resolution from '../utils/resolution'
import Colors from './Colors'

export default StyleSheet.create({
    promo_background: {
        backgroundColor: Colors.secundaryColor,
        width: '100%',
        height: '100%',
        //ALIGN
        alignItems: 'center',
        justifyContent: 'center',
        //SHADOWN
        elevation: 12,
        shadowColor: Colors.black,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.3,
        shadowRadius: 10
    },
    promo_text: {
        color: Colors.white,
        fontSize: Resolution.isBig() ? 38 : 26,
    },
    promo_text_s: {
        color: Colors.white,
        fontSize: Resolution.isBig() ? 28 : 20,
    },
    button_bottom: {
        backgroundColor: Colors.secundaryColor,
        width: '100%',
        height: Resolution.height / 10,
        //ALIGN
        alignItems: 'center',
        justifyContent: 'center',
        //POSITION
        position: 'absolute',
        bottom: 0
    },
    image_buttom: {
        width: '100%',
        height: '100%',
        borderRadius: 180,
    },
    buy_button_back: {
        backgroundColor: Colors.secundaryColor,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    },
    buy_button_text: {
        color: Colors.white,
        fontWeight: 'normal',
        fontSize: Resolution.isBig() ? 28 : 20,
    },
    search_bt: {
        flex: 2,
        paddingTop: Resolution.isBig() ? '2%' : '3%'
    },
})