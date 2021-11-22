import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { User } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/core';

export type ContactListItemProps = {
    user: User;
}
const ContactListItem = (props: ContactListItemProps) => {
    const navigation = useNavigation();
    const { user } = props

    const onClick = () => {
        // navigate to chat with this user.
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.mainContainer}>
                <Image source={{ uri: user.imgUrl }} style={styles.avtar} />
                <View style={styles.midContainer}>
                    <View style={styles.titleDateContainer}>
                        <Text style={styles.title}>{user.name}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.lastMsg}>{user.status}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ContactListItem;
