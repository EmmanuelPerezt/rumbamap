import * as React from 'react';
import { useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';
import { useRouter } from 'expo-router';

import { events } from '@/data/mock';

const PINK = '#f1277b';
const ORANGE = '#f59e0b';
const BLUE = '#3b82f6';

type FilterCategory = 'matches' | 'hospitality' | 'transport';

// ---------------------------------------------------------------------------
// SVG Icon Components
// ---------------------------------------------------------------------------

function MenuIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M3 6h18" stroke="#0f172a" strokeWidth={2} strokeLinecap="round" />
      <Path d="M3 12h18" stroke="#0f172a" strokeWidth={2} strokeLinecap="round" />
      <Path d="M3 18h18" stroke="#0f172a" strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

function BellIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0"
        stroke="#0f172a"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.35-4.35"
        stroke="#94a3b8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function MicIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z"
        stroke="#94a3b8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8"
        stroke="#94a3b8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SoccerIcon({ size = 16 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={10} stroke="#0f172a" strokeWidth={2} />
      <Path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="#0f172a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function UtensilsIcon({ size = 16 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
        stroke="#0f172a"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function BusIcon({ size = 16 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4 6h16M4 10h16M8 14h.01M16 14h.01M5 18h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2zM6 18v2M18 18v2"
        stroke="#0f172a"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CompassIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
        stroke="#0f172a"
        strokeWidth={2}
      />
      <Path
        d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"
        stroke="#0f172a"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function LayersIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="#0f172a"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ArrowRightIcon({ size = 20 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="#ffffff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

// ---------------------------------------------------------------------------
// Filter Pill Data
// ---------------------------------------------------------------------------

const FILTERS: { key: FilterCategory; label: string; Icon: React.FC<{ size?: number }> }[] = [
  { key: 'matches', label: 'Matches', Icon: SoccerIcon },
  { key: 'hospitality', label: 'Hospitality', Icon: UtensilsIcon },
  { key: 'transport', label: 'Transport', Icon: BusIcon },
];

// ---------------------------------------------------------------------------
// Main Screen
// ---------------------------------------------------------------------------

export default function MapScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('matches');

  const featuredEvent = events.find((e) => e.isFeatured) ?? events[0];

  return (
    <View style={styles.container}>
      {/* ---- Map Placeholder (web) ---- */}
      <View style={[styles.map, { backgroundColor: '#e2e8f0' }]}>
        <Text style={{ color: '#94a3b8', fontSize: 16, textAlign: 'center', marginTop: 300 }}>
          Map view (native only)
        </Text>
      </View>

      {/* ---- Header (3.2) ---- */}
      <View style={styles.header}>
        <Pressable style={styles.iconButton}>
          <MenuIcon size={20} />
        </Pressable>

        <View style={styles.headerCenter}>
          <Text style={styles.headerCity}>Guadalajara</Text>
          <Text style={styles.headerYear}>2026</Text>
        </View>

        <Pressable style={styles.iconButton}>
          <BellIcon size={20} />
          <View style={styles.notificationDot} />
        </Pressable>
      </View>

      {/* ---- Search Bar (3.3) ---- */}
      <View style={styles.searchBar}>
        <SearchIcon size={20} />
        <Text style={styles.searchPlaceholder}>Explore Guadalajara...</Text>
        <MicIcon size={20} />
      </View>

      {/* ---- Category Filter Pills (3.4) ---- */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filtersContainer}
        style={styles.filtersScroll}
      >
        {FILTERS.map(({ key, label, Icon }) => {
          const isActive = activeFilter === key;
          return (
            <Pressable
              key={key}
              style={[styles.filterPill, isActive && styles.filterPillActive]}
              onPress={() => setActiveFilter(key)}
            >
              <Icon size={16} />
              <Text style={[styles.filterPillText, isActive && styles.filterPillTextActive]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* ---- Floating Action Buttons (3.7) ---- */}
      <View style={styles.fabContainer}>
        <Pressable style={styles.fabButton}>
          <CompassIcon size={20} />
        </Pressable>
        <Pressable style={styles.fabButton}>
          <LayersIcon size={20} />
        </Pressable>
      </View>

      {/* ---- Upcoming Event Card (3.6) ---- */}
      <View style={styles.eventCard}>
        <View style={styles.eventImagePlaceholder}>
          <Text style={styles.eventImageEmoji}>{'\u26BD'}</Text>
        </View>

        <View style={styles.eventInfo}>
          <Text style={styles.eventLabel}>Upcoming Highlight</Text>
          <Text style={styles.eventTitle} numberOfLines={1}>
            {featuredEvent.title}
          </Text>
          <Text style={styles.eventMeta} numberOfLines={1}>
            {featuredEvent.venueName} {'\u00B7'} {featuredEvent.time}
          </Text>
        </View>

        <Pressable
          style={styles.eventArrowButton}
          onPress={() => router.push(`/event/${featuredEvent.id}`)}
        >
          <ArrowRightIcon size={20} />
        </Pressable>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const GLASS_BG = 'rgba(255, 255, 255, 0.7)';
const GLASS_BORDER = 'rgba(255, 255, 255, 0.3)';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  // Header (3.2)
  header: {
    position: 'absolute',
    top: Platform.OS === 'web' ? 48 : 56,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: GLASS_BG,
    borderWidth: 1,
    borderColor: GLASS_BORDER,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 6,
  },
  headerCity: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0f172a',
  },
  headerYear: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'italic',
    color: PINK,
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PINK,
  },

  // Search Bar (3.3)
  searchBar: {
    position: 'absolute',
    top: 112,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLASS_BG,
    borderWidth: 1,
    borderColor: GLASS_BORDER,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 16,
    color: '#94a3b8',
  },

  // Filter Pills (3.4)
  filtersScroll: {
    position: 'absolute',
    top: 172,
    left: 0,
    right: 0,
  },
  filtersContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  filterPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: GLASS_BG,
    borderWidth: 1,
    borderColor: GLASS_BORDER,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  filterPillActive: {
    borderColor: PINK,
    borderWidth: 1.5,
  },
  filterPillText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },
  filterPillTextActive: {
    color: PINK,
  },

  // FAB (3.7)
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 200,
    gap: 10,
  },
  fabButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  // Event Card (3.6)
  eventCard: {
    position: 'absolute',
    bottom: 120,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: GLASS_BG,
    borderWidth: 1,
    borderColor: GLASS_BORDER,
    borderRadius: 20,
    padding: 14,
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  eventImagePlaceholder: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventImageEmoji: {
    fontSize: 24,
  },
  eventInfo: {
    flex: 1,
    gap: 2,
  },
  eventLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
  },
  eventMeta: {
    fontSize: 13,
    color: '#64748b',
  },
  eventArrowButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: PINK,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: PINK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
});
