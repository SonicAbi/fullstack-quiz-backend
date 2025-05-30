import * as schema from "./schemas";
import { db } from "./drizzle";
import path from "path";
import * as fs from "fs";
import { sql } from "drizzle-orm";

const seedCategories = async () => {
  try {
    for (const category of schema.categories) {
      await db
        .insert(schema.categoriesTable)
        .values({
          id: category.id,
          name: category.name,
        })
        .onConflictDoNothing();
    }
    console.log("Categories erfolgreich geseedet.🌱");
  } catch (error) {
    console.error("Fehler beim Senden der Categories ❗️:", error);
  }
};
const seedDirectory = path.join(__dirname, "questions");

// Hilfsfunktion, um alle Seed-Dateien zu laden
const loadSeedData = async () => {
  const files = fs.readdirSync(seedDirectory);
  const seedData: any[] = [];

  for (const file of files) {
    if (file.endsWith(".ts")) {
      const modulePath = path.join(seedDirectory, file);
      const module = await import(modulePath);
      Object.keys(module).forEach((key) => {
        if (Array.isArray(module[key])) {
          seedData.push(...module[key]);
        }
      });
    }
  }
  return seedData;
};

const seedQuestions = async () => {
  try {
    const allQuestions = await loadSeedData();
    for (const question of allQuestions) {
      await db.insert(schema.questionsTable).values({
        categoryId: question.categoryId,
        question: question.question,
        answer: question.answer,
        code: question.code,
      }).onConflictDoNothing();
    }
    console.log("Questions erfolgreich geseedet.🌱");
  } catch (error) {
    console.log("Fehler beim Laden der Questions.❗️", error);
  } finally {
    process.exit(0)
  }
};
await db.execute(sql`DELETE FROM question`);
await db.execute(sql`ALTER SEQUENCE question_id_seq RESTART WITH 1`);
await db.execute(sql`DELETE FROM category`);
await db.execute(sql`ALTER SEQUENCE category_id_seq RESTART WITH 1`);
seedCategories();
seedQuestions();
