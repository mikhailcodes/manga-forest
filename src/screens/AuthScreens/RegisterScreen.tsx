import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useSignUpEmailPassword } from '@nhost/react';
import styles from '../../stylesheets/authScreens';

import { useSecureStore } from '../../modules/@internal';

import { PrimaryBrandButton, AuthButtons } from "../../components/buttons";
import { InputField } from "../../components/inputs";
import { Ionicons } from '@expo/vector-icons';

const fields = [
  {
    name: 'Email',
    placeholder: 'Your Email',
    type: 'email'
  },
  {
    name: 'Password',
    placeholder: 'Your Password',
    type: 'password'
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

export const RegisterScreen = ({ navigation: { goBack }, route }) => {

  const { signUpEmailPassword, isSuccess, isLoading, isError, error } = useSignUpEmailPassword()

  const isAnEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const [errorText, setErrorText] = useState('');
  const [formFields, setFormFields] = React.useState({ email: '', password: '' });

  const storeData = (key: any, data: any) => {
    const toJSON = JSON.stringify(data);
    useSecureStore(key, toJSON)
  }

  const handleChange = (name: any, value: any) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onButtonPress = () => {
    Keyboard.dismiss() // dismiss keyboard
    if (isAnEmail(formFields.email)) {
      signUpEmailPassword(formFields.email, formFields.password).then((response) => {
        response.isError ? responseMessage(response.error?.message, response.error?.status) : ''
        response.isSuccess ? storeData('storedUser', response) : '';
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
        style={styles.full_width}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.full_width}>

            <Pressable style={styles.backButton}>
              <Ionicons
                name="ios-arrow-back-circle-outline"
                size={30}
                color="#a3ff65"
                onPress={() => goBack()}
              />
            </Pressable>

            <Text style={[styles.heading, styles.brand_text]}>
              Create an account
            </Text>

            {fields.map(({ name, placeholder, type }) => (
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
            {errorText && <Text style={styles.error}>{errorText}</Text>}

            <View style={styles.divider}>
              <View style={styles.divider_bar}></View>
              <Text style={styles.divider_text}>OR</Text>
              <View style={styles.divider_bar}></View>
            </View>



            {oAuth.map(({ provider, text }) => (
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
