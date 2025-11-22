import { ThemedView } from "@/components/themed-view";
import { LANGUAGE_KEY } from "@/i18n";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageSetting = (newLanguageCode:string)=>{
    i18n.changeLanguage(newLanguageCode)
    AsyncStorage.setItem(LANGUAGE_KEY, newLanguageCode);
  }

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.paddedWrapper}>
          <ThemedView style={styles.paddedWrapper}>
            <Text>{t('settings.language')}</Text> 
            <Button title="English" onPress={() => changeLanguageSetting('en-US')} />
            <Button title="Ukrainian" onPress={() => changeLanguageSetting('uk-UA')} /> 
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