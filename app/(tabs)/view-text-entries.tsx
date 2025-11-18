import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';

import { FlatList, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ViewTextEntriesScreen() {
  const entries=["123","456"];
  return (
  <ScrollView>
    <ThemedView style={styles.wrapper}>
       <ThemedText
        type="title"
        style={{
        fontFamily: Fonts.rounded,
        }}>
        Entries
        </ThemedText>

      <SafeAreaProvider>
        <SafeAreaView style={styles.wrapper}>
          <FlatList
            data={entries}
            renderItem={({item}) => 
            <ThemedView>
              <ThemedText>
                {item}
              </ThemedText>
            </ThemedView>
          }
            keyExtractor={item => item}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemedView>
  </ScrollView>
  );
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
   wrapper: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
});
