import { SurveyQuestion } from "@/models/SurveyQuestion";
import { SQLiteDatabase } from "expo-sqlite";

// creates survey and the first revision and returns revision id
export const createNewSurveyInDb = async (db: SQLiteDatabase, surveyName: string)=>{
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
      

export const saveSurveyQuestionsToDb = async (db: SQLiteDatabase, surveyRevisionId: number, questions: SurveyQuestion[]) => {
    const currentDateTime = new Date().toISOString();
  
    try {
      await db.withTransactionAsync(async () => {
        for (const record of questions) {
          // todo what if a question's text is empty, or it has no type?
          if (record.answerType && record.text) {
            await db.runAsync(
            `INSERT INTO survey_questions (surveyRevisionId, createdAt, text, answerType) VALUES (?, ?, ?, ?)`,
            [surveyRevisionId, currentDateTime, record.text, record.answerType]
            );
          }
          else{
            console.log('A question is missing either type or text and will not be saved: ', record.answerType, "; ", record.text);
          }
        }
      });

    console.log(`Success! Inserted ${questions.length} records into survey_questions table.`);
  } catch (error) {
    console.error("Transaction failed:", error.message);
  }
}