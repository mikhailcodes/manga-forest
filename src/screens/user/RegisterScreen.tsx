import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useSignUpEmailPassword } from '@nhost/react';
import style from '../../styleheets/authScreens';

import { storeData, isAnEmail } from '../../modules/@internal';

import { PrimaryBrandButton, AuthButtons } from "../../components/buttons";
import { InputField } from "../../components/inputs";
import { Ionicons } from '@expo/vector-icons';
import { generateUsername } from 'friendly-username-generator';
import useGlobalStyles from '../../stylesheets/mainStyling';

import { SignupFields, OauthFields } from '../../components/fields';

export const RegisterScreen = ({ navigation: { goBack }, route }) => {
  const style = useGlobalStyles();
  const { signUpEmailPassword, isLoading } = useSignUpEmailPassword()

  const [errorText, setErrorText] = useState('');
  const [formFields, setFormFields] = React.useState({ email: '', password: '' });


  const handleChange = (name: any, value: any) => {
    setFormFields({ ...formFields, [name]: value, });
  };

  const onButtonPress = () => {
    const username = generateUsername();
    const options = { displayName: username, defaultRole: 'user', locale: 'en' }
    Keyboard.dismiss() // dismiss keyboard

    if (isAnEmail(formFields.email)) {
      signUpEmailPassword(formFields.email, formFields.password, options).then((x) => {
        storeData('storedUser', x)
      }).catch((error) => {
        responseMessage(error.message, error.status)
      })
    } else {
      responseMessage('failed_regex', false)
    }
  }

  const responseMessage = (message: any, status: any) => {
    message === 'failed_regex' ? setErrorText('Please enter a valid email') : setErrorText(`${message}.`);
    setTimeout(() => {
      setErrorText('')
    }, 5000);
  }


  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={style.full_width}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={style.full_width}>

            <Pressable style={style.backButton}>
              <Ionicons
                name="ios-arrow-back-circle-outline"
                size={30}
                color="#a3ff65"
                onPress={() => goBack()}
              />
            </Pressable>

            <Text style={[style.heading, style.brand_text]}>
              Create an account
            </Text>

            {SignupFields.map(({ name, placeholder, type }) => (
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
              title="Create Account"
              onPress={onButtonPress}
              isLoading={isLoading}
            ></PrimaryBrandButton>
            {errorText && <Text style={style.error}>{errorText}</Text>}

            <View style={style.divider}>
              <View style={style.divider_bar}></View>
              <Text style={style.divider_text}>OR</Text>
              <View style={style.divider_bar}></View>
            </View>



            {OauthFields.map(({ provider, text }) => (
              <AuthButtons
                key={provider}
                text={text}
                provider={provider}
                onPress={provider}
              ></AuthButtons>
            ))}


            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};
