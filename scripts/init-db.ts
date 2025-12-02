import { SQLiteDatabase } from "expo-sqlite";

export const DB_NAME = "lemonade.db"

export const createDbIfNeeded = async (db: SQLiteDatabase) => {
  console.log("Creating database...");
  try {
    // text entries
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS textentries (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, createdAt TEXT)"
    );

    // survey 
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS surveys (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, createdAt TEXT)"
    );

    // survey revision (immutable)
    // a new survey revision is created if the user wishes to update a survey
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS survey_revisions "
      + "(id INTEGER PRIMARY KEY AUTOINCREMENT, createdAt TEXT, surveyId NUMBER, "
      + "FOREIGN KEY(surveyId) REFERENCES surveys(id))"
    );

    // questions belong to survey revisions
    // answerType = 'text' | 'single_answer' | 'multiple_answer' | "yesno"
    // see SurveyQuestion.ts
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS survey_questions "
      + "(id INTEGER PRIMARY KEY AUTOINCREMENT, surveyId INTEGER, createdAt TEXT, "
      + "text TEXT, answerType TEXT, "
      + "FOREIGN KEY(surveyRevisionId) REFERENCES survey_revisions(id))"
    );

    // answer options for questions that have answerType = "option"
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS answer_options "
      + "(id INTEGER PRIMARY KEY AUTOINCREMENT, surveyQuestionId INTEGER, createdAt TEXT, "
      + "text TEXT,"
      + "FOREIGN KEY(surveyQuestionId) REFERENCES survey_questions(id))"
    );

    // a collection of user's answers to questions in one survey
     await db.execAsync(
      "CREATE TABLE IF NOT EXISTS interviews "
      + "(id INTEGER PRIMARY KEY AUTOINCREMENT, createdAt TEXT)"
    )
    
    // user's answer to one question of a survey
    // belongs to a question and to an interview
    await db.execAsync(
      "CREATE TABLE IF NOT EXISTS answers "
      + "(id INTEGER PRIMARY KEY AUTOINCREMENT, surveyQuestionId INTEGER, createdAt TEXT, "
      + "text TEXT, interviewId NUMBER, "
      + "FOREIGN KEY(surveyQuestionId) REFERENCES survey_questions(id), "
      + "FOREIGN KEY(interviewId) REFERENCES interviews(id))"
    );

    console.log("Database created");
  } catch (error) {
    console.error("Error creating database:", error);
  }
};
