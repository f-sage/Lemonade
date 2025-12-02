export interface Interview {
  id: number;
  createdAt: string; // ISO string
}

export const emptySurvey : Interview = {
  id: 0,
  createdAt: ''
}

export default Interview;