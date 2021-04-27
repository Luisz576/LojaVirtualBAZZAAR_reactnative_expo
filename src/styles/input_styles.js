import { StyleSheet, } from 'react-native'
import Resolution from '../utils/resolution'
import Colors from './Colors'

export default StyleSheet.create({
    search_background: {
        width: '100%',
        height: Resolution.height / 10,
        backgroundColor: Colors.black
    },
    search_input_background: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: Resolution.height / 10 / 3 / 2,
        height: Resolution.height / 10 / 3 * 2,
        backgroundColor: Colors.gray
    },
    search_input_margin: {
        flex: 8,
        paddingVertical: Resolution.height / 100,
        paddingHorizontal: Resolution.height / 100 * 2,
        height: Resolution.height / 100 * 10,
    },
})