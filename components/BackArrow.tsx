import { AntDesign } from '@expo/vector-icons'
import { NavigationProp } from '@react-navigation/core'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import { RootStackParamList } from '../types'

export type backArrowProps={
    navigation: NavigationProp<RootStackParamList>
} 
const BackArrow = ({navigation}: backArrowProps) => {
    return (
        <TouchableHighlight onPress={() => navigation.goBack()} style={{borderRadius: 30, height: 30, width: 30, justifyContent:'center', alignItems:'flex-start', flex:0}}>
            <AntDesign name="arrowleft" size={25} color='white'  />
        </TouchableHighlight>
    )
}

export default BackArrow
