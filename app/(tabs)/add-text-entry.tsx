import { router } from 'expo-router';
import { useSQLiteContext } from "expo-sqlite";
import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Button, KeyboardAvoidingView, Platform, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemedView } from '../../components/themed-view';

export default function AddTextEntryScreen() {
  const { t } = useTranslation();
  const database = useSQLiteContext();
  const [entryText, setEntryText] = useState("");

  const onSavePressed = async ()=>{
    const currentDateTime = new Date().toISOString();
    try {
      const response = await database.runAsync(
        `INSERT INTO textentries (text, createdAt) VALUES (?, ?)`,
       [entryText, currentDateTime]
      );
      console.log("Item saved successfully:", response?.changes!);
      setEntryText("");
      router.back();
    } catch (error) {
      console.error("Error saving item:", error);
    }
  
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView 
        // iOS needs 'padding', Android usually works best with 'height' 
        // or sometimes no behavior if windowSoftInputMode is set to adjustResize
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
        >
          <ThemedView style={styles.inputContainer}>
            <TextInput 
            multiline 
            placeholder={t("add-text-entry.placeholder")} 
            value={entryText}
            onChangeText={setEntryText}
            />
          </ThemedView>
          <ThemedView style={styles.buttonContainer}>
            <Button title={t("add-text-entry.save")} onPress={onSavePressed}/>
          </ThemedView>
        </KeyboardAvoidingView>
      </SafeAreaView>  
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  inputContainer: {
    flex: 1, // fills space but shrinks when keyboard opens
    padding: 20,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top', // Android fix to start text at top
  },
  buttonContainer: {
    padding: 20,
    backgroundColor:"rgba(1,1,1,0.1)"
  },
  saveButton: {
    padding: 15,
  }
});
