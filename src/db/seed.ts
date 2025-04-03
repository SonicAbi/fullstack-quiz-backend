import { reset } from "drizzle-seed";
import * as schema from "./schemas";
import { db } from "./drizzle";
import { allQuestions } from "./questions";

const categories: schema.NewCategory[] = [
  { name: "API" },
  { name: "HTML & CSS" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "JavaScript" },
  { name: "Docker" },
  { name: "Datenbanken" },
];

async function seed() {
  try {
    console.log("🌱 Seeding Database ...");
    await db.insert(schema.categoriesTable).values(categories)    
    await db.insert(schema.questionsTable).values(allQuestions)    
    console.log("✅ Seeding successful.");
  } catch (error) {
    console.error("❌ Error while seeding: ", error);
  } finally {
    process.exit(0)
  }
}

seed()