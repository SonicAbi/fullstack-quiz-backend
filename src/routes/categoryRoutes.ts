import { Hono } from "hono";
import { CategoryService } from "../services/category-service";
import { HTTPException } from "hono/http-exception";

export const categoryRouter = new Hono();

categoryRouter.get("/", async (c) => {
  const { category } = c.req.query();
  if (category) {
    const result = await CategoryService.getOneCategory(category);
    if (!result)
      throw new HTTPException(404, { message: "No such Category found" });
    return c.json(result, 200);
  }
  const categories = await CategoryService.getAllCategories();
  return c.json({ data: categories }, 200);
});
