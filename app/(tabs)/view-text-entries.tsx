import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Fonts } from '@/constants/theme';

import { useIsFocused } from '@react-navigation/native';
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface TextEntry{
  id:number;
  text:string;
  datetime:string; // ISO string
}

export default function ViewTextEntriesScreen() {
  const database = useSQLiteContext();
  const [entries, setEntries] = useState<TextEntry[]>([]);
   const isFocused = useIsFocused();

  const loadData = async () => {
    const result = await database.getAllAsync<TextEntry>(`SELECT * FROM textentries LIMIT 50`);
    console.log('loaded data',result);
    setEntries(result ?? []);
  };

   useEffect(() => {
    if(!isFocused) return;
    loadData();
  },[isFocused]);

  return (
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
                {item.text}
              </ThemedText>
              <ThemedText>
                {new Date(item.datetime).toLocaleDateString()}
              </ThemedText>
            </ThemedView>
          }
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemedView>
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
