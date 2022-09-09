import React from 'react';
import { Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { useProviderLink } from '@nhost/react';
import useGlobalStyles from '../stylesheets/mainStyling';


export function PrimaryBrandButton(props: any) {
    const style = useGlobalStyles();
    const { onPress, title = 'Button', isLoading } = props;
    return (
        <TouchableOpacity style={style.primary_button} onPress={onPress} >
            {isLoading ? <ActivityIndicator size="small" color="#000" /> : <Text style={style.text}>{title}</Text>}
        </TouchableOpacity>
    );
}


export function SecondaryBrandButton(props: any) {
    const style = useGlobalStyles();
    const { onPress, title = 'Button', isLoading } = props;
    return (
        <TouchableOpacity style={style.secondary_button} onPress={onPress} >
            {isLoading ? <ActivityIndicator size="small" color="#000" /> : <Text style={style.text}>{title}</Text>}
        </TouchableOpacity>
    );
}

export function AuthButtons(props: any) {
    const style = useGlobalStyles();
    const { provider, text, onPress } = props;
    const { google, apple } = useProviderLink()
    return (
        <TouchableOpacity style={style.oauthButton}
            onPress={() => props.provider === 'google' ? WebBrowser.openBrowserAsync(google) : WebBrowser.openBrowserAsync(apple)}
        >
            <Ionicons
                name={'logo-' + provider}
                size={20}
                color="white"
                style={style.btn_icon}

            />

            <Text style={style.oauthText}>{text}</Text>
        </TouchableOpacity>
    );
}
