import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { events, userProfile } from '@/data/mock';
import type { Event } from '@/types';

const PINK = '#f1277b';

// --- SVG Icons ---

function GearIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 00-.48-.41h-3.84a.48.48 0 00-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87a.48.48 0 00.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.26.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.61 3.61 0 0112 15.6z"
        fill="#94a3b8"
      />
    </Svg>
  );
}

function PencilIcon({ size = 16 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
        fill="#ffffff"
      />
    </Svg>
  );
}

function HeartIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={PINK}
      />
    </Svg>
  );
}

// --- Helpers ---

const EVENT_COLORS = ['#f1277b', '#6366f1', '#0ea5e9', '#f59e0b'];

function getEventColor(index: number): string {
  return EVENT_COLORS[index % EVENT_COLORS.length];
}

function getStatusConfig(status?: Event['status']): {
  label: string;
  color: string;
} | null {
  switch (status) {
    case 'tickets-secured':
      return { label: 'TICKETS SECURED', color: '#22c55e' };
    case 'interested':
      return { label: 'INTERESTED', color: '#3b82f6' };
    case 'going':
      return { label: 'GOING', color: '#f59e0b' };
    default:
      return null;
  }
}

// --- Components ---

function AvatarSection() {
  const initials = userProfile.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <View style={styles.avatarContainer}>
      <View style={styles.avatarRing}>
        <View style={styles.avatar}>
          <Text style={styles.avatarInitials}>{initials}</Text>
        </View>
      </View>
      <Pressable style={styles.editAvatarButton} accessibilityLabel="Edit avatar">
        <PencilIcon size={18} />
      </Pressable>
    </View>
  );
}

function SavedEventRow({ event, index }: { event: Event; index: number }) {
  const statusConfig = getStatusConfig(event.status);

  return (
    <View style={styles.eventCard}>
      <View
        style={[
          styles.eventImage,
          { backgroundColor: getEventColor(index) },
        ]}
      />
      <View style={styles.eventInfo}>
        <Text style={styles.eventTitle} numberOfLines={1}>
          {event.title}
        </Text>
        <Text style={styles.eventSubtitle} numberOfLines={1}>
          {event.date} {event.venueName}
        </Text>
        {statusConfig && (
          <View style={styles.statusBadge}>
            <View
              style={[styles.statusDot, { backgroundColor: statusConfig.color }]}
            />
            <Text style={[styles.statusLabel, { color: statusConfig.color }]}>
              {statusConfig.label}
            </Text>
          </View>
        )}
      </View>
      <View style={styles.eventHeart}>
        <HeartIcon size={20} />
      </View>
    </View>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

// --- Main Screen ---

export default function ProfileScreen() {
  const savedEvents = events.filter((e) =>
    userProfile.savedEventIds.includes(e.id)
  );

  return (
    <View style={styles.container}>
      {/* Background */}
      <Image
        source={require('@/assets/images/login-bg.png')}
        style={styles.backgroundImage}
        contentFit="cover"
        blurRadius={20}
      />
      <View style={styles.backgroundOverlay} />

      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Profile Card */}
          <View style={styles.card}>
            {/* Header Row */}
            <View style={styles.headerRow}>
              <Text style={styles.headerTitle}>Profile</Text>
              <Pressable
                style={styles.settingsButton}
                accessibilityLabel="Settings"
              >
                <GearIcon size={20} />
              </Pressable>
            </View>

            {/* User Info */}
            <View style={styles.userInfo}>
              <AvatarSection />
              <Text style={styles.userName}>{userProfile.name}</Text>
              <Text style={styles.userSubtitle}>{userProfile.subtitle}</Text>
              <Pressable style={styles.editProfileButton}>
                <Text style={styles.editProfileText}>Edit Profile</Text>
              </Pressable>
            </View>

            {/* Saved Events */}
            <View style={styles.savedSection}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Saved Events</Text>
                <Pressable>
                  <Text style={styles.seeAllText}>SEE ALL</Text>
                </Pressable>
              </View>
              <View style={styles.eventsList}>
                {savedEvents.map((event, index) => (
                  <SavedEventRow key={event.id} event={event} index={index} />
                ))}
              </View>
            </View>

            {/* Stats Grid */}
            <View style={styles.statsGrid}>
              <StatCard value={userProfile.matchesCount} label="MATCHES" />
              <StatCard value={userProfile.badgesCount} label="BADGES" />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.6,
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 120,
  },

  // Card
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.25,
    shadowRadius: 50,
    elevation: 12,
  },

  // Header
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
  },
  settingsButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // User Info
  userInfo: {
    alignItems: 'center',
    marginBottom: 28,
  },
  avatarContainer: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  avatarRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(241, 39, 123, 0.2)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 6,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: PINK,
    borderWidth: 4,
    borderColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitials: {
    fontSize: 36,
    fontWeight: '700',
    color: '#ffffff',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  userName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  userSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748b',
    marginBottom: 16,
  },
  editProfileButton: {
    backgroundColor: PINK,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 16,
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 6,
  },
  editProfileText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
  },

  // Saved Events
  savedSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
  },
  seeAllText: {
    fontSize: 12,
    fontWeight: '700',
    color: PINK,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  eventsList: {
    gap: 16,
  },
  eventCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 16,
    padding: 12,
    gap: 12,
  },
  eventImage: {
    width: 56,
    height: 56,
    borderRadius: 12,
  },
  eventInfo: {
    flex: 1,
    gap: 2,
  },
  eventTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0f172a',
  },
  eventSubtitle: {
    fontSize: 10,
    color: '#64748b',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusLabel: {
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  eventHeart: {
    padding: 4,
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'rgba(241, 39, 123, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(241, 39, 123, 0.1)',
    borderRadius: 16,
    padding: 17,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: PINK,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
