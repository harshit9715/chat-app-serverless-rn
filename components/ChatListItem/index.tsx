import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { ChatRoom } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/core';

import { chatlistItemDate } from '../../utils/dateFormat'
export type ChatListItemProps = {
    chatRoom: ChatRoom;
}
const ChatListItem = (props: ChatListItemProps) => {
    const navigation = useNavigation();
    const { chatRoom } = props

    const onClick = () => {
        navigation.navigate('ChatRoom', chatRoom)
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.mainContainer}>
                <Image source={{ uri: chatRoom.users[0].imgUrl }} style={styles.avtar} />
                <View style={styles.midContainer}>
                    <View style={styles.titleDateContainer}>
                        <Text style={styles.title}>{chatRoom.users[0].name}</Text>
                        <Text style={styles.time}>{chatlistItemDate(chatRoom.lastMsg.createdAt)}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.lastMsg}>{chatRoom.lastMsg.content}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ChatListItem;
