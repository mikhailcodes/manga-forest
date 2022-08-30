import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useResetPassword } from '@nhost/react';
import styles from './stylesheets/authScreens';

import { SecondaryBrandButton, AuthButtons } from "../components/buttons";
import { InputField } from "../components/inputs";
import { Ionicons } from '@expo/vector-icons';


const fields = [
  {
    name: 'Email',
    placeholder: 'hello@company.com',
    type: 'email'
  }
]

const oAuth = [
  {
    provider: 'apple',
    text: 'Continue with Apple',
  },
  {
    provider: 'google',
    text: 'Continue with Google',
  },
]

export const PasswordReset = ({ navigation: { goBack }, route }) => {
  const { resetPassword, isLoading, isSent, isError, error } = useResetPassword()

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    await resetPassword('joe@example.com', {
      redirectTo: 'http://localhost:3000/settings/change-password'
    })
  }

  const isAnEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const [errorText, setErrorText] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');

  const handleChange = (value: any) => {
    setFieldEmail(value);
  };

  const onButtonPress = () => {
    isAnEmail(fieldEmail) ? resetPassword(fieldEmail) : errorMessage('failed_regex')

    isError ? errorMessage(error?.message) : '';
    isSent ? console.log('success') : '';
  }


  const errorMessage = (message: any) => {
    message === 'failed_regex' ? setErrorText('Please check email format. Email format is not allowed.') : setErrorText(message)

    setTimeout(() => {
      setErrorText('')
    }, 3000);
  }

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.full_width}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.full_width}>

            <Pressable style={styles.backButton}>
              <Ionicons
                name="ios-arrow-back-circle-outline"
                size={30}
                color="white"
                onPress={() => goBack()}
              />
            </Pressable>

            <Text style={styles.heading}>
              Login to MangaForest
            </Text>

            {fields.map(({ name, placeholder, type }) => (
              <InputField
                name={name}
                key={name}
                type={type}
                defaultValue={route.params?.email}
                placeholder={placeholder}
                onChangeText={(text: any) => handleChange(type, text)}
              >
              </InputField>
            ))}

            <Pressable>
              <Text style={styles.brand_text}>Forgot password?</Text>
            </Pressable>

            <SecondaryBrandButton
              title="Reset Password"
              onPress={onButtonPress}
            ></SecondaryBrandButton>
            {errorText && <Text style={styles.error}>{errorText}</Text>}



            <StatusBar style="light" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};
