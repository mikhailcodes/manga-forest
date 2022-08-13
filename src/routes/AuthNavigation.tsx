import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Auth screens
import { UnauthScreen } from '../screens/UnauthScreen';

const Tab = createBottomTabNavigator();
export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={UnauthScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
