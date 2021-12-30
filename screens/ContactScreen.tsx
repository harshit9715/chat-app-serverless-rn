import * as React from 'react';
import { useEffect, useState } from 'react';

import { FlatList, StyleSheet } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import contactListMock from '../components/ContactListItem/mock'
import ContactListItem from '../components/ContactListItem';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { listUsers } from '../src/graphql/queries';
import { useRoute } from '@react-navigation/core';

export default function ContactsScreen({ navigation }: RootTabScreenProps<'CHATS'>) {
  const [users, setUsers] = useState([]);
  const {params} = useRoute()
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userList = await API.graphql(graphqlOperation(listUsers))
        console.log(userList);
        const otherUsers = userList.data.listUsers.items.filter(u => u.id !== params?.myID)
        setUsers(otherUsers)
      } catch (err) {
        console.error(err);
      }
    };
    fetchUsers();
  }, [])
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={users}
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
