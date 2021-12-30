import { useRoute } from '@react-navigation/core';
import React from 'react'
import { View, Text } from 'react-native'
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Message, User } from '../../types';
import {formatAMPM} from '../../utils/dateFormat';
import styles from './style';
export type ChatMessageProps = {
    message: Message,
    user: User,
};

const ChatMesage = ({message, user}: ChatMessageProps) => {
    const colorScheme = useColorScheme();
    const {params} = useRoute();
    console.log('page: ', params);
    const isMyMsg = message.userId === params.myID;
    return (
        <View style={[styles.mainContainer, {backgroundColor: isMyMsg? '#DCF8C5': '#e5e5e5'}, isMyMsg? {marginLeft: 50}: {marginRight: 50}]}>
            {isMyMsg || <Text style={[styles.otherUserTitle, {color: Colors[colorScheme].tint}]}>{user.name}</Text>}
            <Text style={styles.msgContent}>{message.content}</Text>
            <Text style={styles.time} >{formatAMPM(new Date(message.createdAt))}</Text>
        </View>
    )
}

export default ChatMesage
