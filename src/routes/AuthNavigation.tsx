import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import { UnauthScreen } from '../screens/UnauthScreen';

const Stack = createStackNavigator();
export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={UnauthScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
