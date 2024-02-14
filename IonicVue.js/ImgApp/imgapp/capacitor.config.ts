import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.imgapp',
  appName: 'imgapp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
