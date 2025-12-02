export interface AnswerOption {
  id: number;
  surveyQuestionId: number;
  createdAt: string; // ISO string
  text: string;
}

export const emptyAnswerOption : AnswerOption = {
  id: 0,
  surveyQuestionId: 0,
  createdAt: "",
  text: ""
}

export default AnswerOption;