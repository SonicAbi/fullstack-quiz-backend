import { Hono } from "hono";
import { QuestionService } from "../services/question-service";

export const questionRouter = new Hono();

questionRouter.get("/", async (c) => {
  const { category } = c.req.query();
  const fetchedQuestions = await QuestionService.getAllQuestion(category);
  if (fetchedQuestions.length === 0)
    return c.json({ message: "No such Category Found" });
  return c.json({ data: fetchedQuestions });
});
