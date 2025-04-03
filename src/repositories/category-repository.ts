import type { SQL } from "drizzle-orm";
import { db, type Transaction } from "../db/drizzle";
import { categoriesTable, type Category } from "../db/schemas";

export const CategoryRepository = (tx?: Transaction) => {
    const client = tx ?? db
    return {
        async findMany(condition?: SQL<unknown>): Promise<Category[]> {
            return client.query.categoriesTable.findMany({
                where: condition,
                with: {
                    questions: true
                }
            })
        },

        async findOne(condition?: SQL<unknown>): Promise<Category | undefined> {
            return client.query.categoriesTable.findFirst({
                where: condition,
                with: {
                    questions: true
                }
            })
        }
    }
}