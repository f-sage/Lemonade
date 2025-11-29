import { SQLiteDatabase } from "expo-sqlite";

export const DB_NAME = "lemonade.db"

export const createDbIfNeeded = async (db: SQLiteDatabase) => {
  console.log("Creating database");
  try {
    // Create a table
    const response = await db.execAsync(
      "CREATE TABLE IF NOT EXISTS textentries (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, createdAt TEXT)"
    );
    console.log("Database created", response);
  } catch (error) {
    console.error("Error creating database:", error);
  }
};
