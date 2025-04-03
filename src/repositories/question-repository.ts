import { eq, type SQL } from "drizzle-orm";
import { db, type Transaction } from "../db/drizzle";
import { categoriesTable, questionsTable, type Question } from "../db/schemas";
import type { ApiQuestionResponse } from "../zod/api-schema";
export const QuestionRepository = (tx?: Transaction) => {
  const client = tx ?? db;
  return {
    async findMany(condition?: SQL<unknown>): Promise<ApiQuestionResponse[]> {
      if (!condition) {
        return client
          .select({
            question: questionsTable.question,
            answer: questionsTable.answer,
            code: questionsTable.code,
            categoryName: categoriesTable.name,
          })
          .from(questionsTable)
          .innerJoin(
            categoriesTable,
            eq(categoriesTable.id, questionsTable.categoryId)
          );
      }

      const category = await client.query.categoriesTable.findFirst({
        where: condition,
        columns: { id: true },
      });

      if (!category) return [];

      return client
        .select({
          question: questionsTable.question,
          answer: questionsTable.answer,
          code: questionsTable.code,
          categoryName: categoriesTable.name,
        })
        .from(questionsTable)
        .innerJoin(
          categoriesTable,
          eq(categoriesTable.id, questionsTable.categoryId)
        )
        .where(eq(questionsTable.categoryId, category.id));
    },

    async findOne(condition?: SQL<unknown>): Promise<Question | undefined> {
      return client.query.questionsTable.findFirst({
        where: condition,
      });
    },
  };
};
