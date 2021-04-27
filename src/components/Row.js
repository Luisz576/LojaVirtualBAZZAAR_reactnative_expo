import React, { Component } from 'react';
import { View } from 'react-native'

export default class Row extends Component{
    constructor(props){
        super(props)
        this.children = props.children
    }
    render(){ return ( <View style={{ flexDirection: 'row', }}>{this.children}</View> ) }
}