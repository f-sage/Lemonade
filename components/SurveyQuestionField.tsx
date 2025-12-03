import { StyleSheet, TextInput, View } from "react-native";

export const SurveyQuestionField = ({item, index, onChange}) => {
  const onTextChange = (newText: string)=>{
    item = {...item, text:newText}
    onChange(item, index);
    console.log(item.text)
  }
    return (
        <View style={styles.container}>
            <TextInput placeholder="text...." 
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