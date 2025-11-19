import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TextEntry } from '@/models/TextEntry';
import { StyleSheet } from 'react-native';

export const EntryListItem = ({entry}:{entry:TextEntry}) => {
  const date =new Date(entry.datetime).toLocaleDateString();
  const time =new Date(entry.datetime).toLocaleTimeString();

  return (
    <ThemedView style={styles.itemWrapper}>
      <ThemedView style={styles.date}>
        <ThemedText>
          {date}
        </ThemedText>
        <ThemedText>
          {time}
        </ThemedText>
      </ThemedView>
        <ThemedText style={styles.text} numberOfLines={2}>
          {entry.text}
        </ThemedText>
    </ThemedView>
  )
};

const styles = StyleSheet.create({
  itemWrapper:{
    display:'flex',
    flexDirection:'row',
    gap:8,
    backgroundColor:'rgba(138, 83, 143, 0.2)',
    borderRadius:1,
    margin:1,
    padding:3
  },
  text:{
    margin:2,
    flexShrink:1
  },
  date:{
    backgroundColor:'transparent'
  },})

export default EntryListItem;
