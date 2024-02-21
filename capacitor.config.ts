import { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: "io.ionic.demo.pg.cap.ng",
  appName: "Photo Gallery Cap Ng",
  bundledWebRuntime: false,
  webDir: "www",
  plugins: {
    LiveUpdates: {
      appId: '922c9e02',
      channel: 'Production',
      autoUpdateMethod: 'none',
    },
    SplashScreen: {
      launchAutoHide: false
    }
  }
};

export default config;
