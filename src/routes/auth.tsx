import * as React from 'react';

import { BottomTabs } from './BottomTabs';
import { AuthNavigation } from './AuthNavigation';
import { useAuthenticationStatus } from '@nhost/react';

export const Navigation = () => {
    const { isAuthenticated, isLoading } = useAuthenticationStatus();

    console.log('====================================');
    console.log('Authenticated?', isAuthenticated);
    console.log('====================================');
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
