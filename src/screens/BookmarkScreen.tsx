import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import style from '../stylesheets/mainStyling';

export const BookmarkScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <View style={colorScheme === 'light' ? style.lightContainer : style.darkContainer}>
      <Text>Bookmark screen!</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
