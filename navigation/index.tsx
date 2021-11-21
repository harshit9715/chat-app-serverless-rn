/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome, Ionicons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, View } from 'react-native';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import LABEL from '../constants/Labels';
import ChatListScreen from '../screens/ChatListScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import BackArrow from '../components/BackArrow';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme !== 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {

        backgroundColor: Colors[colorScheme].tint,
      },
      headerShadowVisible: false,
      headerTintColor: Colors[colorScheme].background,
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Stack.Screen name="Root" component={MainTabNavigator}
        options={{
          title: 'WhatsCrapp',
          headerRight: () => (
            <View style={{ flexDirection: 'row', width: 60, justifyContent: 'space-between', marginRight: 2 }}>
              <Octicons name="search" size={22} color='white' />
              <MaterialCommunityIcons name='dots-vertical' color='white' size={22} />
            </View>
          ),
        }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} options={({ route, navigation }) => ({
        title: route.params.users[0].name, 
        headerLeft: () =>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', left: -10 }}>
            <BackArrow navigation={navigation} />
            <Image source={{ uri: route.params.users[0].imgUrl }} style={{ height: 35, width: 35, borderRadius: 30 }}
            />
          </View>,
        headerRight: () =>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 100}}>
          <Ionicons name="videocam" size={22} color='white' />
          <MaterialIcons name="call" size={22} color='white' />
          <SimpleLineIcons name='options-vertical' color='white' size={18} />
        </View>,
        headerTitleStyle: {
          fontWeight:'400'
        }
      })} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="CHATS"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: {
          backgroundColor: Colors[colorScheme].tint,
        },
        tabBarItemStyle: {
          width: 'auto',
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 3,
        },
        tabBarLabelStyle: {
          fontWeight: 'bold'
        },
      }}
    >
      <MainTab.Screen
        name="CAMERA"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'CAMERA'>) => ({
          tabBarIcon: () => <FontAwesome name="camera" size={22} color="white" />,
          tabBarShowLabel: false,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <MainTab.Screen
        name="CHATS"
        component={ChatListScreen}
        options={{
          title: 'CHATS',
          tabBarLabelStyle: { width: LABEL.tabWidth, fontWeight: 'bold' },
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <MainTab.Screen
        name="STATUS"
        component={TabTwoScreen}
        options={{
          title: 'STATUS',
          tabBarLabelStyle: { width: LABEL.tabWidth, fontWeight: 'bold' },
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <MainTab.Screen
        name="CALLS"
        component={TabTwoScreen}
        options={{
          title: 'CALLS',
          tabBarLabelStyle: { width: LABEL.tabWidth, fontWeight: 'bold' },
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
