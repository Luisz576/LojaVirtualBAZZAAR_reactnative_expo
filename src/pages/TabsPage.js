import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../styles/Colors'
import Icon from 'react-native-vector-icons/Feather'
import HomePage from './tabs/home_page'
import SobrePage from './tabs/sobre_page'
import CartoesPage from './tabs/cartoes_page'
import Resolution from '../utils/resolution'

const Tab = createBottomTabNavigator()

const icons = {
    Home: { name: 'home' },
    Sobre: { name: 'shopping-bag' },
    Cartoes: { name: 'credit-card' }
}

export default function TabsPage({ navigation }){
    return (
        <Tab.Navigator 
            screenOptions={ ({route}) => ({
                tabBarIcon: ({ color, size }) => {
                        const { name } = icons[route.name]
                        return (<Icon name={name} color={color} size={size}/>)
                    }
            })  }
            tabBarOptions={{
                inactiveBackgroundColor: Colors.primaryColor,
                activeBackgroundColor: Colors.primaryColor,
                tabStyle: {
                    height: Resolution.height / 10,
                    bottom: Resolution.height / 10 - 50
                },
                labelStyle: {
                    fontSize: Resolution.isBig() ? 28 : 18,
                    paddingVertical: Resolution.isBig() ? 20 : 0,
                    paddingHorizontal: Resolution.isBig() ? 20 : 0,
                },
                activeTintColor: Colors.black,
                inactiveTintColor: `${Colors.black}aa`
            }}>
            <Tab.Screen name="Home" children={() => <HomePage navigation={navigation}/>}/>
            <Tab.Screen name="Sobre" component={SobrePage}/>
            <Tab.Screen name="Cartoes" component={CartoesPage}/>
        </Tab.Navigator>
    );
}