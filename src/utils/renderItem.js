import React from 'react'
import ProdutoItem from '../components/ProdutoItem'

export default function renderItem(navigation, index, produto){
    return ( <ProdutoItem key={index.toString()} produto={produto} isLeft={(index % 2 == 0)} onPress={() => {navigation.push('Produto', { produto_id: produto.id })}}/> )
}