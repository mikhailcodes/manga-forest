import React from 'react';
import { Text, StyleSheet, Pressable, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';
import { useProviderLink } from '@nhost/react';
import styles from '../stylesheets/authScreens';


export function PrimaryBrandButton(props: any) {
    const { onPress, title = 'Button', isLoading } = props;
    return (
        <TouchableOpacity style={styles.primary_button} onPress={onPress} >
            {isLoading ? <ActivityIndicator size="small" color="#000" /> : <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
}


export function SecondaryBrandButton(props: any) {
    const { onPress, title = 'Button', isLoading } = props;
    return (
        <TouchableOpacity style={styles.secondary_button} onPress={onPress} >
            {isLoading ? <ActivityIndicator size="small" color="#000" /> : <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
}

export function AuthButtons(props: any) {
    const { provider, text, onPress } = props;
    const { google, apple } = useProviderLink()
    return (
        <TouchableOpacity style={styles.oauthButton}
            onPress={() => props.provider === 'google' ? WebBrowser.openBrowserAsync(google) : WebBrowser.openBrowserAsync(apple)}
        >
            <Ionicons
                name={'logo-' + provider}
                size={20}
                color="white"
                style={styles.btn_icon}

            />

            <Text style={styles.oauthText}>{text}</Text>
        </TouchableOpacity>
    );
}
