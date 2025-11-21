import { EntryListItem } from '@/components/EntryListItem';
import { ThemedView } from '@/components/themed-view';

import { TextEntry } from '@/models/TextEntry';
import { useIsFocused } from '@react-navigation/native';
import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function ViewTextEntriesScreen() {
  const database = useSQLiteContext();
  const [entries, setEntries] = useState<TextEntry[]>([]);
   const isFocused = useIsFocused();

   useEffect(() => {
    if(!isFocused) return;

    const loadData = async () => {
    const result = await database.getAllAsync<TextEntry>(`SELECT * FROM textentries LIMIT 50`);
    console.log('loaded data', result);
    setEntries(result ?? []);
  };

    loadData();
  },
  [isFocused, database]
);

  return (
    <ThemedView style={styles.wrapper}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.wrapper}>
          <FlatList
            data={entries}
            renderItem={({item}) => 
           <EntryListItem entry={item}/>
          }
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ThemedView>
  );
}


const styles = StyleSheet.create({
   wrapper: {
    flex: 1,
    paddingVertical:4,
    paddingHorizontal:8,
    overflow: 'hidden',
  }
});
