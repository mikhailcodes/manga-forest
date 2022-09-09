import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Button, StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import gradient_bg from '../../assets/gradient_bg.png';
import styles from '../../stylesheets/authScreens';
import { SecondaryBrandButton, PrimaryBrandButton } from '../../components/buttons';

export const SplashScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground source={gradient_bg} style={styles.largeImageContainer}>
        <View style={styles.viewContainer}>
          <Text style={styles.headingText}>
            Welcome to MangaForest
          </Text>

          <PrimaryBrandButton
            title="Create an account"
            onPress={() => navigation.navigate('Register')}
          ></PrimaryBrandButton>

          <SecondaryBrandButton
            title="Login"
            onPress={() => navigation.navigate('Login')}
          ></SecondaryBrandButton>

        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </>
  );
};
