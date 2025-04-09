import { Hono } from "hono";
import { errorMiddleware } from "./error-middleware";
import { questionRouter } from "./routes/questionRoutes";
import { categoryRouter } from "./routes/categoryRoutes";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";


const app = new Hono();
app.use(cors());
app.route("/questions", questionRouter);
app.route("/categories", categoryRouter)

app.get("/", async (c) => {
  return c.text("Welcome to your fullstack quiz database API. 💽");
});

app.onError(errorMiddleware);


// to run with node
if (!process.versions.bun) {
  // check if not running on bun
  console.log(`Server running on ${process.env.PORT}`);
  serve({
    fetch: app.fetch,
    port: parseInt(process.env.PORT || "3000", 10),
  });
}

export default {
  fetch: app.fetch,
  port: process.env.PORT,
};