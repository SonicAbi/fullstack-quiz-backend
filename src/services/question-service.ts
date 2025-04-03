import { eq } from "drizzle-orm"
import { QuestionRepository } from "../repositories/question-respository"
import { categoriesTable, questionsTable } from "../db/schemas"

export const QuestionService = {
    async getAllQuestion(category?: string) {
        let condition = undefined
        if (category) {
            condition = eq(categoriesTable.name, category)
        }
        const result = await QuestionRepository().findMany(condition)
        return result
    }
}