import Colors from './Colors'

export default function createStyle(title){
    return {
        title: title,
        headerStyle: {
            backgroundColor: Colors.primaryColor,
        },
        headerTintColor: Colors.black,
        headerTitleStyle: {
            fontSize: 28,
            fontWeight: 'normal',
        },
    }
}