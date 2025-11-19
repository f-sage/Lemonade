import { Button, ScrollView, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { Fonts } from '@/constants/theme';
import { router } from 'expo-router';
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";

export default function AddTextEntryScreen() {
  const database = useSQLiteContext();
  const [entryText, setEntryText] = useState("");

  const onSavePressed = async ()=>{
    const currentDateTime = new Date().toISOString();
    try {
      const response = await database.runAsync(
        `INSERT INTO textentries (text, datetime) VALUES (?, ?)`,
       [entryText, currentDateTime]
      );
      console.log("Item saved successfully:", response?.changes!);
      router.back();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  
  }

  return (
    <ScrollView>
         <ThemedView style={styles.wrapper}>
           <ThemedText
             type="title"
             style={{
               fontFamily: Fonts.rounded,
             }}>
            Add entry
           </ThemedText>

            <TextInput 
              multiline 
              placeholder='Write some text...'
              value={entryText}
              onChangeText={setEntryText}
            />
            
            <Button title="Save" onPress={onSavePressed}/>
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
