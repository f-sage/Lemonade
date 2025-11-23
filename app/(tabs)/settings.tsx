import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { LANGUAGE_KEY } from "@/i18n";

import AsyncStorage from "@react-native-async-storage/async-storage";
import React from 'react';
import { useTranslation } from "react-i18next";
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const SettingsScreen = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageSetting = (newLanguageCode:string)=>{
    i18n.changeLanguage(newLanguageCode)
    AsyncStorage.setItem(LANGUAGE_KEY, newLanguageCode);
  }

  const changeColorScheme = (newColorScheme:"light"|"dark") => {
    Appearance.setColorScheme(newColorScheme);
  }

  return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.paddedWrapper}>
          <ThemedView style={styles.paddedWrapper}>
            <Text>{t('settings.language')}</Text> 

            <TouchableOpacity 
              onPress={() => changeLanguageSetting('en-US')}
              style={styles.button}
            >
              <ThemedText style={styles.buttonText}>
                English
              </ThemedText> 
            </TouchableOpacity>
            
            <TouchableOpacity
              onPress={() => changeLanguageSetting('uk-UA')} 
              style={styles.button}
            >
              <ThemedText style={styles.buttonText}>
                Українська
              </ThemedText>
            </TouchableOpacity>

            <View
              style={styles.divider}
            />

            <TouchableOpacity
              onPress={() => changeColorScheme("dark")} 
              style={styles.button}
            >
              <ThemedText style={styles.buttonText}>
                {t('settings.themes.dark')}
              </ThemedText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => changeColorScheme("light")} 
              style={styles.button}
            >
              <ThemedText style={styles.buttonText}>
                {t('settings.themes.light')}
              </ThemedText>
            </TouchableOpacity>
            
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
  },
  button:{
    backgroundColor:'#bb32ed',
    padding:8,
    margin:2,
    alignItems: 'center',
  },
  buttonText: {
    textTransform: 'uppercase',
    color:'white',
    fontWeight:'bold'
  },
  divider:{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    margin:8
  }
});


export default SettingsScreen;