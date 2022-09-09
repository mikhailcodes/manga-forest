import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import { LoginScreen } from '../screens/user/LoginScreen';
import { PasswordReset } from '../screens/user/PasswordReset';
import { RegisterScreen } from "../screens/user/RegisterScreen";
import { SplashScreen } from "../screens/user/SplashScreen";

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
