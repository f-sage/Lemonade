import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import TextEntry, { emptyTextEntry } from '@/models/TextEntry';
import { useLocalSearchParams } from 'expo-router';
import { useSQLiteContext } from 'expo-sqlite';
import { useEffect, useState } from 'react';

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

  return (
    <ThemedView>
      <ThemedText selectable={true}>
        {entry.text}
      </ThemedText>
    </ThemedView>
  )
};

export default ViewEntryScreen;
