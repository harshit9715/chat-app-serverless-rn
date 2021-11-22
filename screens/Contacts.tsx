import * as React from 'react';
import { FlatList, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import contactListMock from '../components/ContactListItem/mock'
import ContactListItem from '../components/ContactListItem';

export default function ContactsScreen({ navigation }: RootTabScreenProps<'CHATS'>) {
  return (
    <>
      <View style={styles.container}>
      <FlatList
          data={contactListMock}
          renderItem={({ item }) =>
            <ContactListItem key={item.id} user={item} />
          }
        />
      </View>
    </>
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
