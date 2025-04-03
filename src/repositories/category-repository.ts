import type { SQL } from "drizzle-orm";
import { db, type Transaction } from "../db/drizzle";
import { type Category } from "../db/schemas";

export const CategoryRepository = (tx?: Transaction) => {
  const client = tx ?? db;
  return {
    async findMany(): Promise<Category[]> {
      return client.query.categoriesTable.findMany();
    },

    async findOne(condition?: SQL<unknown>): Promise<Category | undefined> {
      return client.query.categoriesTable.findFirst({
        where: condition,
      });
    },
  };
};
