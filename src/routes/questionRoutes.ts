import { Hono } from "hono";
import { QuestionService } from "../services/question-service";
import { HTTPException } from "hono/http-exception";

export const questionRouter = new Hono();

questionRouter.get("/", async (c) => {
  const { category } = c.req.query();
  const fetchedQuestions = await QuestionService.getAllQuestion(category);
  if (fetchedQuestions.length === 0)
    throw new HTTPException(404, { message: "No such Category Found" });
  return c.json(fetchedQuestions,200);
});
