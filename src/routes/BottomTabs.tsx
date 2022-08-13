/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { HomeScreen } from '../../src/screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { BookmarkScreen } from '../screens/BookmarkScreen';

const Stack = createStackNavigator();
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
  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor: 'black',
          tabStyle: { paddingBottom: 20 },
        }}
        appearance={{
          shadow: true,
          floating: false,
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
                tintColor={color}
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
                tintColor={color}
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
                tintColor={color}
                name="ios-bookmarks-outline"
              />
            ),
            tabBarLabel: ({ focused }: any) => null,
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color }: any) => (
              <TabBarIcon
                focused={focused}
                tintColor={color}
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
