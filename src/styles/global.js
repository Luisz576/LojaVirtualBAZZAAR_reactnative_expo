import { StyleSheet, } from 'react-native'
import Resolution from '../utils/resolution'
import Colors from './Colors'

export default StyleSheet.create({
    big_white_text: {
        fontSize: Resolution.isBig() ? 48 : 30,
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color: Colors.white
    },
    topic: {
        fontSize: Resolution.isBig() ? 36 : 24,
        textDecorationLine: 'underline',
    },
    small_topic: {
        fontSize: Resolution.isBig() ? 32 : 20,
        textDecorationLine: 'underline',
    },
    margin_page: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    margin_page_with_nav_bar: {
        marginLeft: '5%',
        marginTop: '5%',
        marginBottom: Resolution.height / 10
    },
    small_title: {
        fontSize: Resolution.isBig() ? 24 : 16,
    },
    white_box: {
        padding: 10,
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderColor: `${Colors.gray}22`,
        width: '100%',
    }
})