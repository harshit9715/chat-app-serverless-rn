import React from 'react'
import { View, Text, FlatList, ImageBackground} from 'react-native'

import { useRoute } from '@react-navigation/core'
import chatsMock from '../components/ChatMessage/mock'
import ChatMesage from '../components/ChatMessage'

import bg_light from '../assets/images/chat_bg_light.png';
import bg_dark from '../assets/images/chat_bg_dark.png';
import useColorScheme from '../hooks/useColorScheme'

const ChatRoomScreen = () => {
    const route = useRoute();
    const colorScheme = useColorScheme();
    const usermap: any = {};
    chatsMock.users.forEach(user => usermap[user.id]=user);
    
    return (
        <ImageBackground 
            style={{width:'100%', height:'100%'}}
            source={colorScheme === 'light'? bg_light: bg_dark}
        >
        <FlatList
            data={chatsMock.messages}
            inverted
            renderItem={({ item }) => (
                <View>
                    <ChatMesage message={item} user={usermap[item.userId]} />
                </View>
            )
            }
        />
        </ImageBackground>
    )
}

export default ChatRoomScreen
