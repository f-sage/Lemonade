import { SurveyQuestionField } from "@/components/SurveyQuestionField";
import { ThemedView } from "@/components/themed-view";
import { emptySurveyQuestion, SurveyQuestion } from "@/models/SurveyQuestion";
import React, { useState } from "react";
import { Button, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface RenderSurveyQuestionFieldArgs{
  index: number;
  item: SurveyQuestion;
}

const AddSurveyScreen = () => {
    const [fields, setFields] = useState<SurveyQuestion[]>([]);

    const addField = ()=>{
      const newQuestion = emptySurveyQuestion;
      setFields([...fields, newQuestion]);
    }

    const onSavePress = async ()=>{
      //   const surveyRevisionId =  await createNewSurveyInDb (surveyName);  // creates survey and the first revision and returns revision id
      //   await saveSurveyQuestionsToDb (surveyId, fields);
      console.log("fields",fields)
      // show success toast
      // go back
    }

    const onItemUpdate = (item: SurveyQuestion, index: number) => {
      setFields((prev) => Object.assign([], { ...prev, [index]: item }));
    };

    const renderField = ({item, index}: RenderSurveyQuestionFieldArgs) => {
      return(
      <SurveyQuestionField item={item} index={index} onChange={onItemUpdate}/>
      );
    }
                   

  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <ThemedView>
                <Text>
                    add survey
                </Text>
                 <FlatList
                    data={fields}
                    renderItem={renderField}                        
                    keyExtractor={(_item,  index) => index.toString()}
                    />
                <Button title="+" onPress={addField}/>

                <Button title="save" onPress={onSavePress}/>
            </ThemedView> 
        </SafeAreaView>  
    </SafeAreaProvider>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:12
  },
})

export default AddSurveyScreen;
