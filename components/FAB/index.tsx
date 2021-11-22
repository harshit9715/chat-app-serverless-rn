import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import {Auth} from 'aws-amplify'
const FAB = () => {
    const {navigate} = useNavigation();
    const onPress = async () => {
        // await Auth.signOut()
        navigate('Contacts');
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default FAB
