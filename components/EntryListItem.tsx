import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TextEntry } from '@/models/TextEntry';
import { StyleSheet } from 'react-native';

export const EntryListItem = ({entry}:{entry:TextEntry}) => {
  return (
    <ThemedView style={styles.itemWrapper}>
        <ThemedText style={styles.date}>
            {new Date(entry.datetime).toLocaleDateString()}
        </ThemedText>
        <ThemedText style={styles.text}>
            {entry.text}
        </ThemedText>
    </ThemedView>
  )
};

const styles = StyleSheet.create({
  itemWrapper:{
    display:'flex',
    flexDirection:'row',
    backgroundColor:'#d3ffc2',
    borderRadius:1,
    margin:1,
    padding:3
  },
  text:{
    flexGrow:2,
    backgroundColor:"#567ea3"
  },
  date:{
    flexGrow:1,
    backgroundColor:"#84d9d9"
  },})

export default EntryListItem;
