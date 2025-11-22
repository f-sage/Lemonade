import { ThemedView } from "@/components/themed-view";
import "@/i18n";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.paddedWrapper}>
          <ThemedView style={styles.paddedWrapper}>
            <Text>{t('settings.language')}</Text> 
            <Button title="English" onPress={() => i18n.changeLanguage('en-US')} />
            <Button title="Ukrainian" onPress={() => i18n.changeLanguage('uk-UA')} /> 
          </ThemedView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
   paddedWrapper: {
    flex: 1,
    paddingVertical:16,
    paddingHorizontal:16,
  }
});


export default SettingsScreen;