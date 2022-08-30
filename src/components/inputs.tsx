import React, { useState } from 'react';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function InputField(props: any) {
    const { placeholder, type = 'text', onChangeText, defaultValue } = props;
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

const styles = StyleSheet.create({
    view: {
        marginVertical: 15,
    },
    input: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6f6f6f',
        padding: 10,
        paddingLeft: 20,
        backgroundColor: 'transparent',
        color: '#fff',
        position: 'relative',
        textTransform: 'lowercase',

    },
    label: {
        color: '#6f6f6f',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 42,
    },
});
