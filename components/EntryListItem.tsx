import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import { TextEntry } from '@/models/TextEntry';
import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export const EntryListItem = ({entry}:{entry:TextEntry}) => {
  const backgroundColor = useThemeColor({}, 'transparentBackground');
  
  const date =new Date(entry.datetime).toLocaleDateString();
  const time =new Date(entry.datetime).toLocaleTimeString();
  const linkHref = '/entry/'+entry.id.toString();

  return (
    <Link href={linkHref}>
      <View style={{...styles.itemWrapper, backgroundColor}}>
        <View style={styles.date}>
          <ThemedText>
            {date}
          </ThemedText>
          <ThemedText>
            {time}
          </ThemedText>
        </View>
          <ThemedText style={styles.text} numberOfLines={2}>
            {entry.text}
          </ThemedText>
      </View>
    </Link>
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
