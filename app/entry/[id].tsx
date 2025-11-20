import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TextEntry, emptyTextEntry } from '@/models/TextEntry';
import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';


export const ViewEntryScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const database = useSQLiteContext();
  const [entry, setEntry] = useState<TextEntry>(emptyTextEntry);

   const getFullEntry = async ()=>{
      try {
        const response = await database.getFirstAsync<TextEntry>(
          `SELECT text, datetime FROM textentries WHERE id = ? `, [id]
        );
        console.log("Entry retrieved successfully:", response);
        setEntry(response ?? emptyTextEntry)
      } catch (error) {
        console.error("Error retrieving entry from the DB:", error);
      }
    }

    useEffect(()=>{
      getFullEntry();
    },[id])

    const datetime = new Date(entry.datetime).toLocaleString();

  return (
    <ThemedView style={styles.wrapper}>
      <ThemedText style={styles.date}>{datetime}</ThemedText>
      <ThemedText 
        selectable={true}
        style={styles.text}
      >
      {entry.text}
      </ThemedText>
    </ThemedView>
  )
};

const styles = StyleSheet.create({
  date: {
   fontStyle:'italic'
  },
   wrapper: {
    flex: 1,
    paddingVertical:4,
    paddingHorizontal:16,
    overflow: 'hidden',
  },
  text:{
    marginTop: 8,
    textAlign: "justify", //as of 2025-11-20, this does not work with selectable but hoping for the best!! 
  }
});

export default ViewEntryScreen;
