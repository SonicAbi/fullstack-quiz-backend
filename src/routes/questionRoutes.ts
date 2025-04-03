import { Hono } from "hono";
import { QuestionService } from "../services/question-service";

 export const questionRouter = new Hono()

questionRouter.get("/", async (c) => {
    const { category } = c.req.queries()
    const questions = await QuestionService.getAllQuestion(category[0])
    return c.json({data: questions})
 } )