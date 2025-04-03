import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import type { z } from "zod";

// Category Table
export const categoriesTable = pgTable("category", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const categoryRelations = relations(categoriesTable, ({ many }) => ({
  questions: many(questionsTable),
}));


// Question Table
export const questionsTable = pgTable("question", {
  id: serial("id").primaryKey(),
  question: text("question").unique().notNull(),
  answer: text("answer").notNull(),
  code: text("code"),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categoriesTable.id),
});

export const questionRelations = relations(questionsTable, ({ one }) => ({
  category: one(categoriesTable, {
    fields: [questionsTable.categoryId],
    references: [categoriesTable.id],
  }),
}));

export const insertQuestion = createInsertSchema(questionsTable);
export type NewQuestion = z.infer<typeof insertQuestion>;
