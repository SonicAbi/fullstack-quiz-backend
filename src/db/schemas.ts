import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

// Category Table
export const categoriesTable = pgTable("category", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
});

export const categoryRelations = relations(categoriesTable, ({ many }) => ({
  questions: many(questionsTable),
}));

export const selectCategory = createSelectSchema(categoriesTable);
export const insertCategory = createInsertSchema(categoriesTable);

export type Category = z.infer<typeof selectCategory>;
export type NewCategory = z.infer<typeof insertCategory>;

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

export const selectQuestion = createSelectSchema(questionsTable);
export const insertQuestion = createInsertSchema(questionsTable);

export const categories = [
  { id: 1, name: "API" },
  { id: 2, name: "HtmlCss" },
  { id: 3, name: "React" },
  { id: 4, name: "Typescript" },
  { id: 5, name: "Javascript" },
  { id: 6, name: "Docker" },
  { id: 7, name: "Datenbanken" },
  { id: 8, name: "Kotlin" },
  { id: 9, name: "Microservices" },
  { id: 10, name: "Android" },
  { id: 11, name: "Zusatz" },
  { id: 12, name: "Azure" },
];

export type Question = z.infer<typeof selectQuestion>;
export type NewQuestion = z.infer<typeof insertQuestion>;
