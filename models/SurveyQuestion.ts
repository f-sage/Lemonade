export enum AnswerType {
    Text = "text", 
    YesNo = "yesno", // Yes / No question
    SingleAnswer = "single_answer", // choose one option from a predefined list
    MultipleAnswer = "multiple_answer" // may choose multiple options from a predefined list
}

export interface SurveyQuestion {
  id: number;
  surveyId: number;
  createdAt: string; // ISO string
  text: string;
  answerType: AnswerType;
}

export const emptySurveyQuestion : SurveyQuestion = {
  id: 0,
  surveyId:0,
  createdAt: "",
  text:"",
  answerType: AnswerType.Text
}

export default SurveyQuestion;
