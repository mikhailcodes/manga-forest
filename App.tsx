import React from 'react';
import { Navigation } from './src/routes/auth';
import { nhost, NhostReactProvider } from './src/lib/nhost';

export default function App() {
  return (
    <NhostReactProvider nhost={nhost}>
      <Navigation />
    </NhostReactProvider>
  );
}
