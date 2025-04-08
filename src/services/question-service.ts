import { eq } from "drizzle-orm";
import { QuestionRepository } from "../repositories/question-repository";
import { categoriesTable, questionsTable, type Question } from "../db/schemas";
import type { ApiQuestionResponse } from "../zod/api-schema";

export const QuestionService = {
  async getAllQuestion(category?: string) {
    let condition = undefined;
    if (category) {
      condition = eq(categoriesTable.name, category);
    }
    const result = await QuestionRepository().findMany(condition);
    return result;
  },

  async fetchRandomQuestions() {
    const n: number = 30;
    const randomQuestions: ApiQuestionResponse[] = [];
    const questions = await QuestionRepository().findMany();

    if (n > questions.length) {
      return questions;
    }
    const usedIndices = new Set<number>();

    while (randomQuestions.length < n) {
      const randomIndex = Math.floor(Math.random() * questions.length);

      if (!usedIndices.has(randomIndex)) {
        usedIndices.add(randomIndex);
        randomQuestions.push(questions[randomIndex]);
      }
    }
    return randomQuestions;
  },
};
