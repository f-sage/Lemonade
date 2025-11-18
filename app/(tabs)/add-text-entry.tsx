import { Button, ScrollView, StyleSheet, TextInput } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

import { Fonts } from '@/constants/theme';


export default function AddTextEntryScreen() {
  const onSavePressed = ()=>{

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

            <TextInput multiline placeholder='Write some text...'/>
            
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
