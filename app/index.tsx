import * as React from 'react';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

function GoogleIcon({ size = 24 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
        fill="#4285F4"
      />
      <Path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <Path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <Path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </Svg>
  );
}

function SoccerBallIcon({ size = 40 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <Path
        d="M20 40C17.233 40 14.633 39.475 12.2 38.425C9.767 37.375 7.65 35.95 5.85 34.15C4.05 32.35 2.625 30.233 1.575 27.8C.525 25.367 0 22.767 0 20 0 17.233.525 14.633 1.575 12.2 2.625 9.767 4.05 7.65 5.85 5.85 7.65 4.05 9.767 2.625 12.2 1.575 14.633.525 17.233 0 20 0 22.767 0 25.367.525 27.8 1.575 30.233 2.625 32.35 4.05 34.15 5.85 35.95 7.65 37.375 9.767 38.425 12.2 39.475 14.633 40 17.233 40 20 40 22.767 39.475 25.367 38.425 27.8 37.375 30.233 35.95 32.35 34.15 34.15 32.35 35.95 30.233 37.375 27.8 38.425 25.367 39.475 22.767 40 20 40V40M30 15L32.7 14.1 33.5 11.4C32.433 9.8 31.15 8.425 29.65 7.275 28.15 6.125 26.5 5.267 24.7 4.7L22 6.6V9.4L30 15V15M10 15L18 9.4V6.6L15.3 4.7C13.5 5.267 11.85 6.125 10.35 7.275 8.85 8.425 7.567 9.8 6.5 11.4L7.3 14.1 10 15V15M7.9 30.4L10.2 30.2 11.7 27.5 8.8 18.8 6 17.8 4 19.3C4 21.467 4.3 23.442 4.9 25.225 5.5 27.008 6.5 28.733 7.9 30.4V30.4M20 36C20.867 36 21.717 35.933 22.55 35.8 23.383 35.667 24.2 35.467 25 35.2L26.4 32.2 25.1 30H14.9L13.6 32.2 15 35.2C15.8 35.467 16.617 35.667 17.45 35.8 18.283 35.933 19.133 36 20 36V36M15.5 26H24.5L27.3 18 20 12.9 12.8 18 15.5 26V26M32.1 30.4C33.5 28.733 34.5 27.008 35.1 25.225 35.7 23.442 36 21.467 36 19.3L34 17.9 31.2 18.8 28.3 27.5 29.8 30.2 32.1 30.4V30.4"
        fill="white"
      />
    </Svg>
  );
}

function MailIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size * 0.8} viewBox="0 0 20 16" fill="none">
      <Path
        d="M18 0H2C.9 0 .01.9.01 2L0 14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V2l8 5 8-5v2z"
        fill="white"
      />
    </Svg>
  );
}

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require('@/assets/images/login-bg.png')}
        style={styles.backgroundImage}
        contentFit="cover"
      />
      {/* Glassmorphism overlay */}
      <View style={styles.glassOverlay} />

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Card */}
        <View style={styles.card}>
          {/* Logo Section */}
          <View style={styles.logoSection}>
            <View style={styles.logoCircle}>
              <SoccerBallIcon size={40} />
            </View>
            <Text style={styles.brandName}>Guadalajara 2026</Text>
            <Text style={styles.brandSubtitle}>HOSPITALITY EXPERIENCE</Text>
          </View>

          {/* Welcome Text */}
          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeTitle}>¡Bienvenido!</Text>
            <Text style={styles.welcomeDescription}>
              Vive la mejor experiencia de hospitalidad en la perla tapatía
              durante el mundial.
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.buttonsSection}>
            <Pressable
              style={styles.googleButton}
              onPress={() => router.replace('/(tabs)')}
            >
              <GoogleIcon size={24} />
              <Text style={styles.googleButtonText}>
                Iniciar sesión con{'\n'}Google
              </Text>
            </Pressable>

            <Pressable style={styles.emailButton}>
              <MailIcon size={20} />
              <Text style={styles.emailButtonText}>Continuar con correo</Text>
            </Pressable>
          </View>

          {/* Footer Links */}
          <View style={styles.footerSection}>
            <Text style={styles.footerText}>
              ¿No tienes una cuenta?{' '}
              <Text style={styles.footerLink}>Regístrate</Text>
            </Text>
            <View style={styles.legalLinks}>
              <Text style={styles.legalLink}>Términos</Text>
              <Text style={styles.legalLink}>Privacidad</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f6f7',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  glassOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    padding: 33,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 12,
  },
  logoSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#f1277b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 4,
  },
  brandName: {
    fontSize: 30,
    color: '#f1277b',
    fontStyle: 'italic',
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  brandSubtitle: {
    fontSize: 14,
    color: '#334155',
    fontWeight: '600',
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  welcomeSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 12,
  },
  welcomeDescription: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonsSection: {
    width: '100%',
    gap: 16,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#f1f5f9',
    paddingVertical: 17,
    paddingHorizontal: 25,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    textAlign: 'center',
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1277b',
    borderRadius: 24,
    paddingVertical: 16,
    paddingHorizontal: 24,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 6,
  },
  emailButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 32,
    gap: 8,
  },
  footerText: {
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  footerLink: {
    fontWeight: '700',
    color: '#f1277b',
  },
  legalLinks: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 8,
  },
  legalLink: {
    fontSize: 12,
    color: '#94a3b8',
    textDecorationLine: 'underline',
  },
});
