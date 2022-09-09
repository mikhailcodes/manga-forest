import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { BottomTabs } from './Navigation';
import { AuthNavigation } from './AuthNavigation';
import { useAuthenticationStatus, useSignInEmailPassword } from '@nhost/react';
import { getSecureStore } from '.././modules/@internal';


async function getValueFor(key: string) {
    let result = await getSecureStore(key);
    return result;
}

export const App = () => {
    const { isAuthenticated } = useAuthenticationStatus();
    const { signInEmailPassword, isLoading } = useSignInEmailPassword()

    const authenticateUser = async () => {
        getValueFor('storedUser').then(user => {
            if (user) {
                const storedUser = JSON.parse(user)
                signInEmailPassword(storedUser.email, storedUser.password)
            } else {
                return false
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        authenticateUser();
    }, []);

    return (
        <>
            {isAuthenticated ? (
                <>
                    <BottomTabs />
                </>
            ) : (
                <>
                    <AuthNavigation />
                </>
            )}
        </>
    );
};
