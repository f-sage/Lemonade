import { ThemedView } from "@/components/themed-view";
import React from "react";
import { StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AddSurveyScreen = () => {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ThemedView>
                <Text>
                    add survey
                </Text>
            </ThemedView> 
        </SafeAreaView>  
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AddSurveyScreen;
