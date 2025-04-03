import questionRoutes from "./routes/questionRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import { Hono } from "hono";
import { errorMiddleware } from "./error-middleware";

const app = new Hono();

app.route("/questions", questionRoutes);
app.route("/categories", categoryRoutes);

app.get("/", async (c) => {
  return c.text("Welcome to your fullstack quiz database API. 💽");
});

app.onError(errorMiddleware);

export default app;
