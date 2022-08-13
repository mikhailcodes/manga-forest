import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useSignInEmailPassword } from '@nhost/react';
import image from '../../src/assets/splash_screen.jpg';

export const UnauthScreen = () => {
  const {
    signInEmailPassword,
    needsEmailVerification,
    isLoading,
    isSuccess,
    isError,
    error
  } = useSignInEmailPassword()

  const onButtonPress = () => {
    console.log({ needsEmailVerification, isLoading, isSuccess, isError, error })
    signInEmailPassword('testmikhailarden@gmail.com', 'AAaa01!!')
  }

  return (
    <>
      <View style={styles.largeImageContainer}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        </ImageBackground>
      </View>

      <View style={styles.container}>

        <Button
          onPress={onButtonPress}
          title="Click Me After"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "120%",
    resizeMode: "contain",
  },
  largeImageContainer: {
    height: "60%",
    display: "flex",
    justifyContent: "center",
  }
});
