
import React from 'react';
import { App } from './src/routes/AuthenticatedRoute';
import { nhost, NhostReactProvider } from './src/lib/nhost';

export default function Base() {

  return (
    <NhostReactProvider nhost={nhost}>
      <App />
    </NhostReactProvider>
  );
}
