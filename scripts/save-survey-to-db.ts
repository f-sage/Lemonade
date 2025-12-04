import { SQLiteDatabase } from "expo-sqlite";

// creates survey and the first revision and returns revision id
export const createNewSurveyInDb = async (db:SQLiteDatabase, surveyName: string)=>{
      const currentDateTime = new Date().toISOString();
      const surveyCreationResult = await db.runAsync(
        `INSERT INTO surveys (name, createdAt) VALUES (?, ?)`,
       [surveyName, currentDateTime]
      );

      const surveyId = surveyCreationResult.lastInsertRowId;

      const revisionCreationResult = await db.runAsync(
        `INSERT INTO survey_revisions (surveyId, createdAt) VALUES (?, ?)`,
       [surveyId, currentDateTime]
      ); 
     
      const surveyRevisionId = revisionCreationResult.lastInsertRowId;
      return surveyRevisionId;
}
      

// const saveSurveyQuestionsToDb = async (surveyRevisionId:number, fields) => {

// }