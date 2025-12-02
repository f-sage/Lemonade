export interface Survey {
  id: number;
  name: string;
  createdAt: string; // ISO string
}

export const emptySurvey : Survey = {
  id: 0,
  name: '',
  createdAt: ''
}

export interface SurveyRevision {
    id: number;
    surveyId: number; 
    createdAt: string; // ISO string
} 

export const emptySurveyRevision : SurveyRevision = {
    id: 0,
    surveyId: 0, 
    createdAt:''
}

export default Survey;