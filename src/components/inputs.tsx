import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useGlobalStyles from '../stylesheets/mainStyling';


export function InputField(props: any) {
    const style = useGlobalStyles();
    const { placeholder, type = 'text', onChangeText, defaultValue, value } = props;
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={style.view}>
            <Text style={style.label}>{props.name}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#6f6f6f"
                textContentType={type}
                autoCorrect={false}
                autoCapitalize='none'
                style={style.input}
                value={value}
                {...props.type === 'email' ? { keyboardType: 'email-address' } : {}}
                {...props.type === 'password' ? { secureTextEntry: hidePass } : {}}
                {...props.defaultValue ? { defaultValue: defaultValue } : {}}
                onChangeText={onChangeText} />

            {props.type === 'password' ? (
                <Ionicons
                    name={hidePass ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                    color="white"
                    style={style.icon}
                    onPress={() => setHidePass(!hidePass)}
                />) : null}
        </View>
    );
}
