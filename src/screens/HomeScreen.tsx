import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, useColorScheme } from 'react-native';
import { useUserData } from '@nhost/react';
import style from '../stylesheets/mainStyling';



export const HomeScreen = ({ navigation }: any) => {
  const colorScheme = useColorScheme();
  const userData = useUserData()
  return (
    <View style={colorScheme === 'light' ? style.lightContainer : style.darkContainer}>
      <Text>Home screen! {userData?.displayName} </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Profile')}
      />


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
