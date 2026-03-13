import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  Dimensions,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { events } from '@/data/mock';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAP_HEIGHT = SCREEN_HEIGHT * 0.38;
const CARD_OVERLAP = 24;

function ChevronLeftIcon({ size = 20, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
        fill={color}
      />
    </Svg>
  );
}

function BookmarkIcon({ size = 20, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </Svg>
  );
}

function CalendarIcon({ size = 20, color = '#7c3aed' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
        fill={color}
      />
    </Svg>
  );
}

function MapPinIcon({ size = 20, color = '#7c3aed' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"
        fill={color}
      />
    </Svg>
  );
}

function CompassIcon({ size = 20, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"
        fill={color}
      />
    </Svg>
  );
}

function HeartIcon({ size = 20, color = '#64748b' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
        fill={color}
      />
    </Svg>
  );
}

export default function EventDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Event not found</Text>
        <Pressable style={styles.notFoundButton} onPress={() => router.back()}>
          <Text style={styles.notFoundButtonText}>Go back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Map / colored background */}
      <LinearGradient
        colors={['#1a3a4a', '#1e4d5e', '#1a3a4a']}
        style={styles.mapBackground}
      />

      {/* Top navigation bar */}
      <View style={styles.topBar}>
        <Pressable style={styles.glassCircle} onPress={() => router.back()}>
          <ChevronLeftIcon size={22} color="#fff" />
        </Pressable>

        <View style={styles.glassPill}>
          <Text style={styles.glassPillText}>Detalle del Evento</Text>
        </View>

        <Pressable style={styles.glassCircle}>
          <BookmarkIcon size={20} color="#fff" />
        </Pressable>
      </View>

      {/* White card */}
      <View style={styles.card}>
        {/* Drag handle */}
        <View style={styles.dragHandleWrapper}>
          <View style={styles.dragHandle} />
        </View>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces
        >
          {/* Event Header (6.2) */}
          <Text style={styles.featuredTag}>FEATURED EVENT</Text>
          <Text style={styles.eventTitle}>
            {event.title} - {event.subtitle}
          </Text>

          {/* Info Grid (6.3) */}
          <View style={styles.infoGrid}>
            <View style={styles.infoCell}>
              <View style={styles.iconCircle}>
                <CalendarIcon size={20} color="#7c3aed" />
              </View>
              <View style={styles.infoCellText}>
                <Text style={styles.infoLabel}>Date</Text>
                <Text style={styles.infoValue}>
                  {event.date}
                  {'\n'}
                  {event.time}
                </Text>
              </View>
            </View>

            <View style={styles.infoCell}>
              <View style={styles.iconCircle}>
                <MapPinIcon size={20} color="#7c3aed" />
              </View>
              <View style={styles.infoCellText}>
                <Text style={styles.infoLabel}>Location</Text>
                <Text style={styles.infoValue}>
                  {event.venueName.replace(' ', '\n')}
                </Text>
              </View>
            </View>
          </View>

          {/* Social Proof (6.4) */}
          <View style={styles.socialProofRow}>
            <View style={styles.avatarsRow}>
              <View style={[styles.avatar, styles.avatarPink, { zIndex: 3 }]} />
              <View style={[styles.avatar, styles.avatarBlue, { zIndex: 2, marginLeft: -10 }]} />
              <View style={[styles.avatar, styles.avatarGreen, { zIndex: 1, marginLeft: -10 }]} />
              <View style={[styles.avatarCount, { marginLeft: -10 }]}>
                <Text style={styles.avatarCountText}>+{event.attendeeCount}</Text>
              </View>
            </View>
            <Text style={styles.socialProofText}>
              {event.attendeeCount}+ fans attending this event
            </Text>
          </View>

          {/* Description (6.5) */}
          <Text style={styles.aboutHeading}>About the match</Text>
          <Text style={styles.descriptionText}>{event.description}</Text>

          {/* Action Buttons (6.5) */}
          <View style={styles.actionRow}>
            <Pressable style={styles.navigateButton}>
              <CompassIcon size={20} color="#fff" />
              <Text style={styles.navigateButtonText}>Navigate</Text>
            </Pressable>
            <Pressable style={styles.saveButton}>
              <HeartIcon size={20} color="#64748b" />
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a3a4a',
  },

  /* Not found */
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f6f7',
    paddingHorizontal: 24,
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 16,
  },
  notFoundButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: '#f1277b',
    borderRadius: 16,
  },
  notFoundButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },

  /* Map background */
  mapBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: MAP_HEIGHT,
  },

  /* Top navigation bar */
  topBar: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 56 : 40,
    left: 16,
    right: 16,
    zIndex: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  glassCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glassPill: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  glassPillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },

  /* White card */
  card: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: MAP_HEIGHT - CARD_OVERLAP,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 8,
  },
  dragHandleWrapper: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 8,
  },
  dragHandle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e2e8f0',
  },

  /* Scroll */
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  /* Event Header */
  featuredTag: {
    fontSize: 14,
    color: '#94a3b8',
    fontWeight: '600',
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  eventTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 20,
    lineHeight: 34,
  },

  /* Info Grid */
  infoGrid: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  infoCell: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 13,
    gap: 10,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoCellText: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#94a3b8',
    fontWeight: '500',
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    lineHeight: 20,
  },

  /* Social Proof */
  socialProofRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    gap: 10,
  },
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#fff',
  },
  avatarPink: {
    backgroundColor: '#f472b6',
  },
  avatarBlue: {
    backgroundColor: '#60a5fa',
  },
  avatarGreen: {
    backgroundColor: '#34d399',
  },
  avatarCount: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f1f5f9',
    borderWidth: 2,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarCountText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748b',
  },
  socialProofText: {
    flex: 1,
    fontSize: 14,
    color: '#64748b',
  },

  /* Description */
  aboutHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 22,
    marginBottom: 28,
  },

  /* Action Buttons */
  actionRow: {
    flexDirection: 'row',
    gap: 12,
  },
  navigateButton: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1277b',
    borderRadius: 16,
    paddingVertical: 16,
    gap: 8,
    shadowColor: '#f1277b',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  navigateButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  saveButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#e2e8f0',
    borderRadius: 16,
    paddingVertical: 16,
    gap: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#64748b',
  },
});
