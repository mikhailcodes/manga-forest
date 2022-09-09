import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { Button, styleheet, Text, View, ImageBackground, Image } from 'react-native';
import gradient_bg from '../../assets/gradient_bg.png';
import useGlobalStyles from '../../stylesheets/mainStyling';
import { SecondaryBrandButton, PrimaryBrandButton } from '../../components/buttons';

export const SplashScreen = ({ navigation }) => {
  const style = useGlobalStyles();
  return (
    <>
      <ImageBackground source={gradient_bg} style={style.largeImageContainer}>
        <View style={style.viewContainer}>
          <Text style={style.headingText}>
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
