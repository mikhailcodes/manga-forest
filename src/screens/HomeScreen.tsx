import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
import { useUserData } from '@nhost/react';
import useGlobalStyles from '../stylesheets/mainStyling';

import { MainSlider, CategoryPills } from '../components/base';

export const HomeScreen = ({ navigation }: any) => {
  const style = useGlobalStyles();
  const userData = useUserData()
  return (
    <>
      <MainSlider></MainSlider>
      <SafeAreaView style={style.viewContainer}>
        <View>
          <CategoryPills></CategoryPills>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};
