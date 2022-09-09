import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, Pressable } from 'react-native';
import { useSignInEmailPassword } from '@nhost/react';
import { SignupFields, OauthFields } from '../../components/fields';
import { isAnEmail, storeData } from '../../modules/@internal';
import { PrimaryBrandButton, AuthButtons } from "../../components/buttons";
import { InputField } from "../../components/inputs";
import { Ionicons } from '@expo/vector-icons';
import useGlobalStyles from '../../stylesheets/mainStyling';



export const LoginScreen = ({ navigation: { goBack, navigate }, route }) => {
  const style = useGlobalStyles();
  const { signInEmailPassword, isLoading } = useSignInEmailPassword()

  const [errorText, setErrorText] = useState('');
  const [formFields, setFormFields] = React.useState({ email: '', password: '' });

  const handleChange = (name: string, value: string) => {
    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

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
              Login to MangaForest
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


            <Pressable
              onPress={() =>
                navigate('Reset', { email: formFields.email })
              }
            >
              <Text style={style.brand_text}>Forgot password?</Text>
            </Pressable>

            <PrimaryBrandButton
              title="Login"
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
