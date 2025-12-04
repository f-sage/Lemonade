import { AnswerType, SurveyQuestion } from "@/models/SurveyQuestion";
import { useTranslation } from "react-i18next";
import { StyleSheet, TextInput, View } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

interface SurveyQuestionFieldProps {
  item: SurveyQuestion;
  index: number;
  onChange: (item: SurveyQuestion, index: number) => void;
}

export const SurveyQuestionField = ({item, index, onChange}:SurveyQuestionFieldProps) => {
  const { t } = useTranslation();

  const answerTypes = [
    { label: t("survey.answer-types."+AnswerType.Text), answerType: AnswerType.Text },
    { label: t("survey.answer-types."+AnswerType.YesNo), answerType: AnswerType.YesNo },
    { label: t("survey.answer-types."+AnswerType.SingleAnswer), answerType: AnswerType.SingleAnswer },
    { label: t("survey.answer-types."+AnswerType.MultipleAnswer), answerType: AnswerType.MultipleAnswer }
  ]

  const onTextChange = (newText: string)=>{
    item = {...item, text: newText}
    onChange(item, index);
  }

  const onTypeChange = ({answerType} : {answerType: AnswerType})=>{
    item = {...item, answerType}
    onChange(item, index);
  }

    return (
        <View style={styles.container}>
            <TextInput 
              placeholder="text...." 
              value={item.text} 
              onChangeText={onTextChange}   
            />
            <Dropdown
              value = {item}
              onChange = {onTypeChange}
              data = {answerTypes}
              labelField = "label"
              valueField = "answerType"
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"rgba(210,11,66,0.2)",
    margin:4,
    gap:8
  },
})

export default SurveyQuestionField;