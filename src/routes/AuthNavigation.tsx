import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import { LoginScreen } from '../screens/AuthScreens/LoginScreen';
import { PasswordReset } from '../screens/AuthScreens/PasswordReset';
import { RegisterScreen } from "../screens/AuthScreens/RegisterScreen";
import { SplashScreen } from "../screens/AuthScreens/SplashScreen";

const Stack = createStackNavigator();
export const AuthNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Splash_Screen" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Reset" component={PasswordReset} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
