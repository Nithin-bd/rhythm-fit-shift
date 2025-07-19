import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d6f06984e5df49e5802b1006f417e790',
  appName: 'rhythm-fit-shift',
  webDir: 'dist',
  server: {
    url: 'https://d6f06984-e5df-49e5-802b-1006f417e790.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#0a0a0a',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#00f5ff'
    }
  }
};

export default config;