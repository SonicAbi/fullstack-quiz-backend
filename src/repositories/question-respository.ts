import { eq, type SQL } from "drizzle-orm";
import { db, type Transaction } from "../db/drizzle";
import { categoriesTable, questionsTable, type Question } from "../db/schemas";
export const QuestionRepository = (tx?: Transaction) => {
  const client = tx ?? db;
  return {
    async findMany(condition?: SQL<unknown>) {
      return client
        .select()
        .from(questionsTable)
        .innerJoin(
          categoriesTable,
          eq(questionsTable.categoryId, categoriesTable.id)
        )
        .where(condition);
    },

    async findOne(condition?: SQL<unknown>): Promise<Question | undefined> {
      return client.query.questionsTable.findFirst({
        where: condition,
      });
    },
  };
};
