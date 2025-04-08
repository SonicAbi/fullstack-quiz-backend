import { Hono } from "hono";
import { QuestionService } from "../services/question-service";
import { HTTPException } from "hono/http-exception";

export const questionRouter = new Hono();

questionRouter.get("/", async (c) => {
  const { category } = c.req.query();
  const fetchedQuestions = await QuestionService.getAllQuestion(category);
  if (fetchedQuestions.length === 0)
    throw new HTTPException(404, { message: "No such Category Found" });
  return c.json(
    {
      data: fetchedQuestions,
    },
    200
  );
});

questionRouter.get("/random", async (c) => {
  const fetchedQuestions = await QuestionService.fetchRandomQuestions();
  return c.json({ data: fetchedQuestions }, 200);
});
