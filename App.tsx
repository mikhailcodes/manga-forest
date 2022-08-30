
import React, { useState, useEffect, useCallback } from 'react';
import { App } from './src/routes/AuthenticatedRoute';
import { nhost, NhostReactProvider } from './hooks/nhost';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import useFonts from './hooks/useFonts';
import { View, Text } from 'react-native';

export default function Base() {
  const LoadFonts = async () => {
    await useFonts();
  };

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await LoadFonts() // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading experience.
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <NhostReactProvider nhost={nhost}>
      <App />
    </NhostReactProvider>
  );
}
