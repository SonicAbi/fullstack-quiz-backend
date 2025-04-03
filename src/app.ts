import { Hono } from "hono";
import { errorMiddleware } from "./error-middleware";
import { questionRouter } from "./routes/questionRoutes";
import { categoryRouter } from "./routes/categoryRoutes";

const app = new Hono();

app.route("/questions", questionRouter);
app.route("/categories", categoryRouter)

app.get("/", async (c) => {
  return c.text("Welcome to your fullstack quiz database API. 💽");
});

app.onError(errorMiddleware);

export default app;
