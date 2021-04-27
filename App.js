import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchPage from './src/pages/stack/search_page'
import TabsPage from './src/pages/TabsPage'
import ProductViewPage from './src/pages/stack/product_view_page'
import createAppbarStyle from './src/styles/app_bar_style'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={TabsPage} options={createAppbarStyle('BAZZAAR')}/>
        <Stack.Screen name="Produto" component={ProductViewPage} options={createAppbarStyle('Produto')}/>
        <Stack.Screen name="Categoria" component={SearchPage} options={createAppbarStyle('Categoria')}/>
        <Stack.Screen name="Busca" component={SearchPage} options={createAppbarStyle('Busca')}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}