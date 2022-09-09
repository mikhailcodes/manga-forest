import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, KeyboardAvoidingView, Pressable } from 'react-native';
import { useSignOut } from '@nhost/react'
import { Header, Avatar } from '../../components/base';
import useGlobalStyles from '../../stylesheets/mainStyling';
import { ProfileFields } from '../../components/fields';
import { InputField } from '../../components/inputs';
import { PrimaryBrandButton } from '../../components/buttons';
import { Ionicons } from '@expo/vector-icons';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';


export const EditProfile = ({ navigation: { goBack, navigate } }) => {
  const style = useGlobalStyles();
  const [formFields, setFormFields] = React.useState({ text: '', email: '', password: '' });

  const handleChange = (name: string, value: string) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <>
      <SafeAreaView style={style.viewContainer}>
        <Header></Header>
        <View>
          <View style={style.pageContainer}>
            <View style={[style.headingContainer, style.horizontalFlex]}>
              <Pressable style={style.backButton}>
                <Ionicons
                  name="ios-arrow-back-circle-outline"
                  size={30}
                  color="#4EC300"
                  onPress={() => goBack()}
                />
              </Pressable>
              <Text style={style.title}>Edit Profile</Text>
            </View>

            <View style={style.avatarContainer}>
              <Avatar></Avatar>
            </View>
            <KeyboardAvoidingView>

              {ProfileFields.map(({ name, placeholder, type }) => (
                <InputField
                  name={name}
                  key={name}
                  type={type}
                  placeholder={placeholder}
                  onChangeText={(text: any) => handleChange(type, text)}

                >
                </InputField>
              ))}

              <PrimaryBrandButton
                title="Save"
                onPress={() => { navigate('Profile') }}
              >

              </PrimaryBrandButton>
            </KeyboardAvoidingView>


          </View>

        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
};
