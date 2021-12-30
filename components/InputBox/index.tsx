import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles';

import {API, Auth, graphqlOperation} from 'aws-amplify'
import {createMessage} from '../../src/graphql/mutations'

const InputBox = () => {

    const [msg, setMsg] = useState('');
    const onPress = () => {
        if (!msg) {
            // Microphone press
        } else {
            // Send message to backend
            console.log('message: ', msg);
            setMsg('');
        }
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.inputContainer}>
            <FontAwesome5 name="laugh-beam" size={25} color="grey"/>
            <TextInput 
             multiline
             value={msg}
             placeholder={'Message'}
             onChangeText={setMsg}
             style={styles.textInput} />
            <Entypo name="attachment" size={22} color="grey" style={styles.icon} />
            {!msg && <Fontisto name="camera" size={22} color="grey" style={styles.icon} />}
            </View>
            <TouchableOpacity 
                onPress={onPress} >
            <View style={styles.sendBtnContainer}>
                {
                    !msg? (<MaterialCommunityIcons name="microphone" size={22} color="white" />):
                    (<MaterialIcons name="send" size={22} color="white" />)
                }
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default InputBox;
