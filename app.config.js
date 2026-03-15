/** @type {import('expo/config').ExpoConfig} */
module.exports = {
  expo: {
    name: 'rumbamap',
    slug: 'rumbamap',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'rumbamap',
    userInterfaceStyle: 'automatic',
    newArchEnabled: false,
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSLocationWhenInUseUsageDescription:
          'Necesitamos tu ubicación para mostrarte eventos cercanos en el mapa.',
      },
      config: {
        // TODO: agrega tu Google Maps API key aquí o en EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
      bundleIdentifier: 'com.anonymous.rumbamap',
    },
    android: {
      permissions: ['ACCESS_FINE_LOCATION', 'ACCESS_COARSE_LOCATION'],
      config: {
        googleMaps: {
          // TODO: agrega tu Google Maps API key aquí o en EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
        },
      },
      adaptiveIcon: {
        backgroundColor: '#E6F4FE',
        foregroundImage: './assets/images/android-icon-foreground.png',
        backgroundImage: './assets/images/android-icon-background.png',
        monochromeImage: './assets/images/android-icon-monochrome.png',
      },
      edgeToEdgeEnabled: true,
      predictiveBackGestureEnabled: false,
      package: 'com.anonymous.rumbamap',
    },
    web: {
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
          dark: {
            backgroundColor: '#000000',
          },
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      reactCompiler: true,
    },
  },
};
