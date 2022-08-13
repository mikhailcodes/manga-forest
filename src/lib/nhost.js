import { REACT_APP_NHOST_SUBDOMAIN, REACT_APP_NHOST_REGION } from '@env'
import { NhostClient, NhostReactProvider } from '@nhost/react';
const nhost = new NhostClient({
    subdomain: REACT_APP_NHOST_SUBDOMAIN,
    region: REACT_APP_NHOST_REGION,
});

export { nhost, NhostReactProvider };
