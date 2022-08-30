import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


import { useProviderLink } from '@nhost/react';

export function SecondaryBrandButton(props: any) {
    const { onPress, title = 'Button' } = props;
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}


export function AuthButtons(props: any) {
    const { provider, text, onPress } = props;
    const { google, apple } = useProviderLink()
    return (
        <Pressable style={styles.oauthButton}
            onPress={() => props.provider === 'google' ? WebBrowser.openBrowserAsync(google) : WebBrowser.openBrowserAsync(apple)}
        >
            <Ionicons
                name={'logo-' + provider}
                size={20}
                color="white"
                style={styles.icon}

            />

            <Text style={styles.oauthText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000',
    },
    oauthButton: {
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6f6f6f',
        position: 'relative',
    },
    oauthText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#6f6f6f',
    },
    icon: {
        position: 'absolute',
        left: 20,
        top: "65%",
    },
});
