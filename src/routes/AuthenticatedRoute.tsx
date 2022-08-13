import * as React from 'react';
import { Text } from 'react-native';
import { BottomTabs } from './BottomTabs';
import { AuthNavigation } from './AuthNavigation';
import { useAuthenticationStatus } from '@nhost/react';


export const App = () => {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();

    console.log('====================================');
    console.log('Authenticated?', isAuthenticated);
    console.log('====================================');
    return (
        <>
            {isLoading ? (
                <>
                    <Text>Loading...</Text>
                </>
            ) :
                isAuthenticated ? (
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
