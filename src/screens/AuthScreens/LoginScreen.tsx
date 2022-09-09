import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useSignInEmailPassword } from '@nhost/react';
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

export const LoginScreen = ({ navigation: { goBack, navigate }, route }) => {
  const { signInEmailPassword, isLoading } = useSignInEmailPassword()

  const isAnEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const [errorText, setErrorText] = useState('');
  const [formFields, setFormFields] = React.useState({ email: '', password: '' });

  const handleChange = (name: string, value: string) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const storeData = (key: any, data: any) => {
    const toJSON = JSON.stringify(data);
    useSecureStore(key, toJSON)
  }

  const onButtonPress = () => {
    Keyboard.dismiss() // dismiss keyboard
    if (isAnEmail(formFields.email)) {
      signInEmailPassword(formFields.email, formFields.password).then((response) => {

        response.isError ? responseMessage(response.error?.message, response.error?.status) : ''

        response.isSuccess ? storeData('storedUser', { email: formFields.email, password: formFields.password }) : '';
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
              Login to MangaForest
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


            <Pressable
              onPress={() =>
                navigate('Reset', { email: formFields.email })
              }
            >
              <Text style={styles.brand_text}>Forgot password?</Text>
            </Pressable>

            <PrimaryBrandButton
              title="Login"
              onPress={onButtonPress}
              isLoading={isLoading}
            ></PrimaryBrandButton>
            {errorText && <Text style={styles.error}>{errorText}</Text>}

            <View style={styles.divider}>
              <View style={styles.divider_bar}></View>
              <Text style={styles.divider_text}>OR</Text>
              <View style={styles.divider_bar}></View>
            </View>


            {oAuth.map(({ provider, text, onPress }) => (
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
