// the db table is 'answers'

export interface InterviewAnswer {
  id: number;
  createdAt: string; // ISO string
  surveyQuestionId: number;
  interviewId: number;
  text: string;
}

export const emptyInterviewAnswer : InterviewAnswer = {
  id: 0,
  createdAt: '',
  surveyQuestionId: 0,
  interviewId: 0,
  text: ''
}

export default InterviewAnswer;