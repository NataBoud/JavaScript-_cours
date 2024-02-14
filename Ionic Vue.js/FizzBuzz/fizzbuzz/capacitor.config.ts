import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.fizzbuzz',
  appName: 'fizzbuzz',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
