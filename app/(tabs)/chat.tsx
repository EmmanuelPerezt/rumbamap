import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path } from 'react-native-svg';

import { chatMessages } from '@/data/mock';
import type { ChatMessage } from '@/types';

const PINK = '#f1277b';
const BG = '#f8fafc';
const GRAY_TEXT = '#8e8e93';
const BUBBLE_LIGHT = 'rgba(255,255,255,0.7)';

// ---------------------------------------------------------------------------
// SVG Icons
// ---------------------------------------------------------------------------

function SparkleIcon({ size = 20, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z"
        fill={color}
      />
    </Svg>
  );
}

function PaperclipIcon({ size = 22, color = GRAY_TEXT }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.44 11.05L12.25 20.24C10.72 21.77 8.18 21.77 6.65 20.24C5.12 18.71 5.12 16.17 6.65 14.64L15.84 5.45C16.81 4.48 18.37 4.48 19.34 5.45C20.31 6.42 20.31 7.98 19.34 8.95L10.15 18.14C9.66 18.63 8.88 18.63 8.39 18.14C7.9 17.65 7.9 16.87 8.39 16.38L17.58 7.19"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ArrowUpIcon({ size = 20, color = '#fff' }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 19V5M12 5L5 12M12 5L19 12"
        stroke={color}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function GlobeIcon({ size = 16, color = GRAY_TEXT }: { size?: number; color?: string }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={10} stroke={color} strokeWidth={1.8} />
      <Path
        d="M12 2C14.5 4.5 15.5 8 15.5 12C15.5 16 14.5 19.5 12 22C9.5 19.5 8.5 16 8.5 12C8.5 8 9.5 4.5 12 2Z"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M2 12H22" stroke={color} strokeWidth={1.8} />
    </Svg>
  );
}

// ---------------------------------------------------------------------------
// Vibe Avatar
// ---------------------------------------------------------------------------

function VibeAvatar({ size = 40 }: { size?: number }) {
  return (
    <View style={[styles.avatar, { width: size, height: size, borderRadius: size / 2 }]}>
      <SparkleIcon size={size * 0.5} color="#fff" />
    </View>
  );
}

// ---------------------------------------------------------------------------
// Typing Indicator (animated dots)
// ---------------------------------------------------------------------------

function TypingIndicator() {
  const dot1 = useRef(new Animated.Value(0.3)).current;
  const dot2 = useRef(new Animated.Value(0.3)).current;
  const dot3 = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animateDot = (dot: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dot, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0.3,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
      );

    const a1 = animateDot(dot1, 0);
    const a2 = animateDot(dot2, 200);
    const a3 = animateDot(dot3, 400);

    a1.start();
    a2.start();
    a3.start();

    return () => {
      a1.stop();
      a2.stop();
      a3.stop();
    };
  }, [dot1, dot2, dot3]);

  return (
    <View style={styles.typingRow}>
      <VibeAvatar size={32} />
      <View style={styles.typingBubble}>
        {[dot1, dot2, dot3].map((opacity, i) => (
          <Animated.View key={i} style={[styles.typingDot, { opacity }]} />
        ))}
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Message Bubble
// ---------------------------------------------------------------------------

function MessageBubble({
  message,
  showAvatar,
}: {
  message: ChatMessage;
  showAvatar: boolean;
}) {
  const isUser = message.sender === 'user';

  return (
    <View style={[styles.messageRow, isUser && styles.messageRowUser]}>
      {!isUser && (
        <View style={styles.avatarColumn}>
          {showAvatar ? <VibeAvatar size={32} /> : <View style={styles.avatarSpacer} />}
        </View>
      )}

      <View style={[styles.bubbleWrapper, isUser && styles.bubbleWrapperUser]}>
        <View
          style={[
            styles.bubble,
            isUser ? styles.bubbleUser : styles.bubbleAssistant,
          ]}>
          {message.imageUrl ? (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: message.imageUrl }}
                style={styles.messageImage}
                resizeMode="cover"
              />
              {message.imageCaption ? (
                <View style={styles.imageCaptionOverlay}>
                  <Text style={styles.imageCaptionText}>{message.imageCaption}</Text>
                </View>
              ) : null}
            </View>
          ) : null}
          <Text style={styles.messageText}>{message.text}</Text>
        </View>
        <Text style={[styles.timestamp, isUser && styles.timestampUser]}>
          {message.timestamp}
        </Text>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Chat Screen
// ---------------------------------------------------------------------------

export default function ChatScreen() {
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);

  const shouldShowAvatar = (index: number): boolean => {
    const msg = chatMessages[index];
    if (msg.sender === 'user') return false;
    const next = chatMessages[index + 1];
    return !next || next.sender !== 'assistant';
  };

  return (
    <View style={[styles.screen, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <VibeAvatar size={40} />
          <View style={styles.headerInfo}>
            <Text style={styles.headerName}>Asistente Vibe</Text>
            <View style={styles.headerStatusRow}>
              <View style={styles.greenDot} />
              <Text style={styles.headerStatus}>Siempre disponible</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerRight}>
          <GlobeIcon size={16} color={GRAY_TEXT} />
          <Text style={styles.headerLang}>Español</Text>
        </View>
      </View>

      {/* Messages */}
      <ScrollView
        ref={scrollRef}
        style={styles.messageList}
        contentContainerStyle={styles.messageListContent}
        onContentSizeChange={() => scrollRef.current?.scrollToEnd({ animated: false })}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.dateSeparator}>
          <Text style={styles.dateSeparatorText}>Today</Text>
        </View>

        {chatMessages.map((msg, idx) => (
          <MessageBubble key={msg.id} message={msg} showAvatar={shouldShowAvatar(idx)} />
        ))}

        <TypingIndicator />
      </ScrollView>

      {/* Input Bar */}
      <View style={[styles.inputBar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
        <View style={styles.inputBarInner}>
          <View style={styles.attachButton}>
            <PaperclipIcon size={22} color={GRAY_TEXT} />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Escribe un mensaje..."
            placeholderTextColor="#a1a1aa"
          />
          <View style={styles.sendButton}>
            <ArrowUpIcon size={18} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BG,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.08)',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 8,
      },
      android: {
        elevation: 3,
      },
      default: {},
    }),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerInfo: {
    gap: 2,
  },
  headerName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#11181C',
  },
  headerStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  greenDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#34c759',
  },
  headerStatus: {
    fontSize: 14,
    color: GRAY_TEXT,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  headerLang: {
    fontSize: 14,
    color: GRAY_TEXT,
    fontWeight: '500',
  },

  // Avatar
  avatar: {
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Message list
  messageList: {
    flex: 1,
  },
  messageListContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },

  // Date separator
  dateSeparator: {
    alignItems: 'center',
    marginBottom: 16,
  },
  dateSeparatorText: {
    fontSize: 13,
    color: GRAY_TEXT,
    fontWeight: '500',
  },

  // Message rows
  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 4,
    maxWidth: '85%',
  },
  messageRowUser: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
    maxWidth: '80%',
  },
  avatarColumn: {
    marginRight: 8,
    marginBottom: 18,
  },
  avatarSpacer: {
    width: 32,
  },
  bubbleWrapper: {
    flexShrink: 1,
  },
  bubbleWrapperUser: {
    alignItems: 'flex-end',
  },

  // Bubbles
  bubble: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    overflow: 'hidden',
  },
  bubbleAssistant: {
    backgroundColor: BUBBLE_LIGHT,
    borderRadius: 16,
    borderTopLeftRadius: 4,
  },
  bubbleUser: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 16,
    borderTopRightRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.1)',
  },

  // Message text
  messageText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#11181C',
  },

  // Image in bubble
  imageContainer: {
    marginHorizontal: -14,
    marginTop: -10,
    marginBottom: 8,
    overflow: 'hidden',
  },
  messageImage: {
    width: '100%',
    height: 128,
  },
  imageCaptionOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  imageCaptionText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
  },

  // Timestamp
  timestamp: {
    fontSize: 11,
    color: GRAY_TEXT,
    marginTop: 4,
    marginBottom: 12,
    marginLeft: 4,
  },
  timestampUser: {
    textAlign: 'right',
    marginRight: 4,
    marginLeft: 0,
  },

  // Typing indicator
  typingRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 8,
  },
  typingBubble: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    backgroundColor: BUBBLE_LIGHT,
    borderRadius: 16,
    borderTopLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginLeft: 8,
  },
  typingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: GRAY_TEXT,
  },

  // Input bar
  inputBar: {
    paddingHorizontal: 12,
    paddingTop: 8,
    backgroundColor: '#fff',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.08)',
  },
  inputBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  attachButton: {
    padding: 6,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#11181C',
    backgroundColor: BG,
  },
  sendButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
