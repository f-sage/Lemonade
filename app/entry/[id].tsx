import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useLocalSearchParams } from 'expo-router';

export const ViewEntryScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <ThemedView>
      <ThemedText selectable={true}>
        entry id: {id}
      </ThemedText>
    </ThemedView>
  )
};

export default ViewEntryScreen;
