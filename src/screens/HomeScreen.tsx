import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text>Home screen! </Text>
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
