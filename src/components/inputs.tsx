import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export function InputField(props: any) {
    const { placeholder, type = 'text', onChange } = props;
    return (
        <TextInput
            placeholder={placeholder}
            textContentType={type}
            style={styles.input}
            {...props.type === 'password' ? { secureTextEntry: true } : {}}
            onChangeText={onChange}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: '80%',
        margin: 12,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
});
