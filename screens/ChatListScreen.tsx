import * as React from 'react';
import { FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import ChatListItem from '../components/ChatListItem';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import chatListMock from '../components/ChatListItem/mock'

export default function ChatListScreen({ navigation }: RootTabScreenProps<'CHATS'>) {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatListMock}
        renderItem={({ item }) =>
            <ChatListItem key={item.id} chatRoom={item} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
