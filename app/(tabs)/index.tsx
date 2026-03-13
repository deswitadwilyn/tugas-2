import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Decorative ring */}
      <View style={styles.ringOuter}>
        <View style={styles.ringInner}>
          <Image
            source={require('../../assets/images/deswita.jpeg')}
            style={styles.profilePic}
          />
        </View>
      </View>

      {/* SECTION IDENTITAS */}
      <Text style={styles.name}>Deswita Dwilyn</Text>
      <View style={styles.nimBadge}>
        <Text style={styles.nim}>NIM · 243303621225</Text>
      </View>

      {/* DIVIDER */}
      <View style={styles.divider} />

      {/* SECTION MOTIVASI */}
      <View style={styles.bioCard}>
        <Text style={styles.quoteSymbol}>"</Text>
        <Text style={styles.bioText}>
          Grow through what you go through.{'\n'}
          Every step forward is progress.
        </Text>
        <Text style={styles.quoteEnd}>"</Text>
      </View>

      {/* TAG */}
      <View style={styles.tagRow}>
        <View style={styles.tag}><Text style={styles.tagText}>✦ Mobile Dev</Text></View>
        <View style={styles.tag}><Text style={styles.tagText}>✦ React Native</Text></View>
      </View>
    </View>
  );
}

const CREAM = '#F5F0E8';
const GOLD = '#B8972E';
const DARK = '#1C1A16';
const MUTED = '#7A7260';
const CARD_BG = '#242019';
const BORDER = '#3A3426';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  ringOuter: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: GOLD,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22,
  },
  ringInner: {
    width: 148,
    height: 148,
    borderRadius: 74,
    borderWidth: 2,
    borderColor: BORDER,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 26,
    fontWeight: '800',
    color: CREAM,
    letterSpacing: 1,
    marginBottom: 8,
  },
  nimBadge: {
    backgroundColor: '#2A2518',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: GOLD,
    marginBottom: 24,
  },
  nim: {
    fontSize: 12,
    color: GOLD,
    letterSpacing: 2,
    fontWeight: '600',
  },
  divider: {
    width: 60,
    height: 1,
    backgroundColor: GOLD,
    opacity: 0.5,
    marginBottom: 24,
  },
  bioCard: {
    backgroundColor: CARD_BG,
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: BORDER,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  quoteSymbol: {
    fontSize: 40,
    color: GOLD,
    fontWeight: '900',
    lineHeight: 40,
    alignSelf: 'flex-start',
  },
  quoteEnd: {
    fontSize: 40,
    color: GOLD,
    fontWeight: '900',
    lineHeight: 40,
    alignSelf: 'flex-end',
  },
  bioText: {
    color: CREAM,
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 24,
    fontStyle: 'italic',
    letterSpacing: 0.3,
    marginVertical: 8,
  },
  tagRow: {
    flexDirection: 'row',
    gap: 10,
  },
  tag: {
    backgroundColor: '#2A2518',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: BORDER,
  },
  tagText: {
    color: MUTED,
    fontSize: 12,
    letterSpacing: 1,
  },
});