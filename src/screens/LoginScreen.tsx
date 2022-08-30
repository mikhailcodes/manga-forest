import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useSignInEmailPassword } from '@nhost/react';
import styles from './stylesheets/authScreens';

import { SecondaryBrandButton, AuthButtons } from "../components/buttons";
import { InputField } from "../components/inputs";
import { Ionicons } from '@expo/vector-icons';


const fields = [
  {
    name: 'Email',
    placeholder: 'hello@company.com',
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

export const LoginScreen = ({ navigation: { navigate } }) => {
  const { signInEmailPassword, isSuccess, isError, error } = useSignInEmailPassword()

  const isAnEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const [errorText, setErrorText] = useState('');
  const [formFields, setFormFields] = React.useState({ email: '', password: '' });

  const handleChange = (name: any, value: any) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onButtonPress = () => {
    isAnEmail(formFields.email) ? signInEmailPassword(formFields.email, formFields.password) : errorMessage('failed_regex')

    isError ? errorMessage(error) : '';
    isError ? errorMessage(error?.message) : '';
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
                onPress={() => console.log('pressed')}
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

            <SecondaryBrandButton
              title="Login"
              onPress={onButtonPress}
            ></SecondaryBrandButton>
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

            <StatusBar style="light" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};
