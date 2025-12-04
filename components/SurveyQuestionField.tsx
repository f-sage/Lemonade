import { SurveyQuestion } from "@/models/SurveyQuestion";
import { StyleSheet, TextInput, View } from "react-native";

interface SurveyQuestionFieldProps {
  item: SurveyQuestion;
  index: number;
  onChange: (item: SurveyQuestion, index: number) => void;
}

export const SurveyQuestionField = ({item, index, onChange}:SurveyQuestionFieldProps) => {
  const onTextChange = (newText: string)=>{
    item = {...item, text: newText}
    onChange(item, index);
    console.log(item.text)
  }
    return (
        <View style={styles.container}>
            <TextInput 
              placeholder="text...." 
                       value={item.text} 
                       onChangeText={onTextChange}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(210,11,66,0.2)",
    margin:4
  },
})

export default SurveyQuestionField;