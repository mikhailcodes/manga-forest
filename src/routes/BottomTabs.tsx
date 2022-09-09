/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useColorScheme } from 'react-native';

import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from '../stylesheets/mainStyling';

// Screens
import { HomeScreen } from '../../src/screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BookmarkScreen } from '../screens/BookmarkScreen';

// Profile Screens
import { LoginScreen2 } from '../screens/SettingsScreens/LoginScreen';

//const Stack = createStackNavigator();
const Tabs = AnimatedTabBarNavigator();

const TabBarIcon = (props: any) => {
  return (
    <Ionicons
      name={props.name}
      size={props.size ? props.size : 20}
      color={props.tintColor}
    />
  );
};

export const BottomTabs = () => {
  const colorScheme = useColorScheme();
  const tabBgColor = colorScheme === 'light' ? '#141414' : 'black';
  const activeIconColor = colorScheme === 'light' ? 'white' : 'black';
  const tintColorScheme = colorScheme === 'light' ? { tintColor: 'black', subColor: 'white' } : { tintColor: '#4EC300', subColor: 'white' };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeBackgroundColor: activeIconColor,
          tabStyle: [styles.tabStyles, { backgroundColor: tabBgColor }],
        }}
        appearance={{
          shadow: true,
          floating: true,
          whenActiveShow: TabElementDisplayOptions.BOTH,
          dotSize: DotSize.SMALL,
          horizontalPadding: 50,
          dotCornerRadius: 50,
        }}
      >
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={focused ? tintColorScheme.tintColor : tintColorScheme.subColor}
                name="ios-home-outline"
              />
            ),
            tabBarLabel: ({ focused }: any) => null,
          }}
        />

        <Tabs.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={focused ? tintColorScheme.tintColor : tintColorScheme.subColor}
                name="ios-search-outline"
              />
            ),
            tabBarLabel: ({ focused }: any) => null,
          }}
        />

        <Tabs.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={focused ? tintColorScheme.tintColor : tintColorScheme.subColor}
                name="ios-bookmarks-outline"
              />
            ),
            tabBarLabel: ({ focused }: any) => null,
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={focused ? tintColorScheme.tintColor : tintColorScheme.subColor}
                name="ellipsis-horizontal"
              />
            ),
            tabBarLabel: ({ focused }: any) => null,
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};



function ProfileNavigator() {
  const ProfileStack = createStackNavigator()
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <ProfileStack.Screen
        name="Home2"
        component={LoginScreen2}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  )
}
