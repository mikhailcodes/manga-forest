import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, ImageBackground } from 'react-native';
import { useSignInEmailPassword } from '@nhost/react';

import { BrandButton } from "../components/buttons";
import { InputField } from "../components/inputs";

import image from '../assets/splash_screen.jpg';

const fields = [
  {
    name: 'email',
    placeholder: 'Email',
    type: 'email'
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password'
  }
]

export const UnauthScreen = () => {
  const {
    signInEmailPassword,
    needsEmailVerification,
    isLoading,
    isSuccess,
    isError,
    error
  } = useSignInEmailPassword()

  const isAnEmail = (email: string) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const [errorText, setErrorText] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldPassword, setPassword] = useState('');

  const onButtonPress = () => {
    isAnEmail(fieldEmail) ? signInEmailPassword(fieldEmail, fieldPassword) : errorMessage('failed_regex')

    isError ? errorMessage(error?.message) : '';
    isSuccess ? console.log('success') : '';
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

            <Text style={styles.heading}>
              Login to MangaForest
            </Text>

            {fields.map(({ name, placeholder, type }) => (
              <InputField
                name={name}
                placeholder={placeholder}
                type={type}
                {...{ [name]: name === 'password' ? fieldPassword : fieldEmail, onChange: name === 'password' ? setPassword : setFieldEmail }}
              >
              </InputField>
            ))}

            <BrandButton
              title="Sign In"
              onPress={onButtonPress}
            ></BrandButton>
            {errorText && <Text style={styles.error}>{errorText}</Text>}

            <StatusBar style="light" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};

const styles = StyleSheet.create({
  full_width: {
    width: "100%",
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
  }
});
