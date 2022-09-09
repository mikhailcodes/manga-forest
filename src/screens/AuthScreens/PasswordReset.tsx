import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useResetPassword } from '@nhost/react';
import styles from '../../stylesheets/authScreens';

import { PrimaryBrandButton } from "../../components/buttons";
import { InputField } from "../../components/inputs";
import { Ionicons } from '@expo/vector-icons';


const fields = [
  {
    name: 'Email',
    placeholder: 'Your Email',
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

  const [errorText, setErrorText] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const { resetPassword, isLoading } = useResetPassword()

  const isAnEmail = (email: string) => {
    if (email === null) {
      return false
    }

    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChange = (value: any) => {
    setFieldEmail(value);
  };

  const onButtonPress = () => {
    if (isAnEmail(fieldEmail)) {
      resetPassword(fieldEmail).then((response) => {
        response.isError ? responseMessage(response.error?.message, response.error?.status) : ''

        response.isSent ? responseMessage('Please check your inbox for instructions on how to access your account.', 200) : ''
      })
    } else {
      responseMessage('failed_regex', false)
    }
  }

  const responseMessage = (message: any, status: any) => {
    if (status === 200) {
      setSuccessMessage(message)
      setFieldEmail('') // clear the field after success
    } else {
      message === 'failed_regex' ? setErrorText('Please enter a valid email') : setErrorText(`${message}. Please contact support.`);
    }

    setTimeout(() => {
      setErrorText('')
      setSuccessMessage('')
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
              Reset your password
            </Text>

            {fields.map(({ name, placeholder, type }) => (
              <InputField
                name={name}
                key={name}
                type={type}
                value={fieldEmail}
                defaultValue={route.params?.email}
                placeholder={placeholder}
                onChangeText={(text: any) => handleChange(text)}
              >
              </InputField>
            ))}

            <PrimaryBrandButton
              title="Reset Password"
              onPress={onButtonPress}
              isLoading={isLoading}
            ></PrimaryBrandButton>

            {errorText && <View>
              <Text style={styles.error}>{errorText}</Text>
            </View>}

            {successMessage &&
              <View>
                <Text style={styles.brand_text}>{successMessage}</Text>
              </View>}

            <StatusBar style="auto" />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    </>
  );
};
