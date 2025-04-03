import { Hono } from "hono";
import { errorMiddleware } from "./error-middleware";
import { questionRouter } from "./routes/questionRoutes";

const app = new Hono();

app.route("/questions", questionRouter);

app.get("/", async (c) => {
  return c.text("Welcome to your fullstack quiz database API. 💽");
});

app.onError(errorMiddleware);

export default app;
