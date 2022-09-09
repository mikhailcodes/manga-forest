import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../stylesheets/authScreens';


export function InputField(props: any) {
    const { placeholder, type = 'text', onChangeText, defaultValue, value } = props;
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={styles.view}>
            <Text style={styles.label}>{props.name}</Text>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#6f6f6f"
                textContentType={type}
                autoCorrect={false}
                autoCapitalize='none'
                style={styles.input}
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
                    style={styles.icon}
                    onPress={() => setHidePass(!hidePass)}
                />) : null}
        </View>
    );
}
