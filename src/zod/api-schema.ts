import { z } from "zod";

export const ApiQuestionResponseSchema = z.object({
    question: z.string(),
    answer: z.string(),
    code: z.string().nullable(),
    categoryName: z.string()
})

export type ApiQuestionResponse = z.infer<typeof ApiQuestionResponseSchema>