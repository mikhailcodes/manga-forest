import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSignOut } from '@nhost/react'
import useGlobalStyles from '../stylesheets/mainStyling';
import { Header, SettingsList } from '../components/base';



export const SettingsScreen = ({ navigation: { goBack, navigate } }) => {
  const { signOut } = useSignOut()
  const style = useGlobalStyles();
  const NavigateProfile = () => {
    navigate('Edit Profile')
  }

  const settings = [
    {
      id: '1',
      title: 'Edit Profile',
      onPress: NavigateProfile,

    },
    {
      id: '2',
      title: 'Manage Subscription',
      onPress: useSignOut(),

    },
    {
      id: '3',
      title: 'Need Help? Contact Us',
      onPress: useSignOut(),

    },
    {
      id: '4',
      title: 'Log Out',
      onPress: signOut,
    },
  ];

  // BUTTON NOT WORKING
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={style.viewContainer}>
        <Header></Header>

        <View style={style.pageContainer}>
          <View style={style.headingContainer}>
            <Text style={style.title}>Settings</Text>
            <Text style={style.paragraph}>
              Personal information
            </Text>
          </View>

          {settings.map(({ title, id, onPress }) => (
            <SettingsList
              key={id}
              title={title}
              onPress={onPress}
            >
            </SettingsList>
          ))}


        </View>

      </ScrollView>
      <StatusBar style="auto" />
    </>
  );
};
