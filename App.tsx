import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { withAuthenticator } from 'aws-amplify-react-native'
import {Auth, API, graphqlOperation} from 'aws-amplify';
import Amplify from 'aws-amplify'
import config from './aws-exports';
import { getUser } from './src/graphql/queries';
import { createUser } from './src/graphql/mutations';
Amplify.configure({
  ...config,
  Analytics: { 
    disabled: true
  }
});
const randomImgs = [
  "https://pbs.twimg.com/profile_images/1442634650703237120/mXIcYtIs_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1193951507026075648/Ot3GmqGK_400x400.jpg",
  "https://pbs.twimg.com/profile_images/563843814725402624/Vb8k670S_400x400.png",
  "https://pbs.twimg.com/profile_images/1178631635606151168/yIlrcg4o_400x400.jpg",
  "https://pbs.twimg.com/profile_images/1218209106491793408/ZZ7zbeWL_400x400.jpg"
];

const getRandomImg = () => {
  return randomImgs[Math.floor(Math.random() * randomImgs.length)]
}

function App() {
  const [myInfo, setMyInfo] = useState({
    "email": "",
    "email_verified": true,
    "phone_number": "",
    "phone_number_verified": false,
    "sub": "",
    "username": ""
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  // Run this snippet only when app is first mounted
  useEffect(() => {
    const fetchUser = async () => {
      // get Authenticated User from Auth
      const userInfo = await Auth.currentAuthenticatedUser({bypassCache: true});
      setMyInfo({
        ...userInfo.attributes,
        username: userInfo.username
      })
      // Get the user from backend with UID from auth.
      if (userInfo) {
        const userData = await API.graphql(graphqlOperation(getUser, {id: userInfo.attributes.sub}));
        console.log(userData);
        if (userData.data.getUser){
          // user exists in DB
        } else {
          // If no user in DB with id, then create one.
          const newUser = {
            id: userInfo.attributes.sub,
            name: userInfo.username,
            imgUrl: getRandomImg(),
            status: 'Hey there, I am using WhatsCrapp!'
          }
          await API.graphql(graphqlOperation(createUser, {input: newUser}));
        }
        
      }      
    }
    fetchUser()
  }, [])

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation myInfo={myInfo} colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);