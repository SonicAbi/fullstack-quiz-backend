import type { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { ZodError } from "zod";

export function errorMiddleware(error: unknown, c: Context) {
  console.error(error);

  if (error instanceof HTTPException) {
    return c.json({ error: error.message }, error.status);
  }

  if (error instanceof SyntaxError) {
    return c.json(
      { error: "No valid json provided. Check your request." },
      400
    );
  }

  if (error instanceof ZodError) {
    return c.json({ error: error.issues.flat() }, 400);
  }

  if (error instanceof Error && "code" in error) {
    switch (error.code) {
      case "ECONNREFUSED":
        return c.json({ error: "Couldn't connect to database." }, 500);
      default:
        break;
    }
  }
  return c.json({ error: error }, 500);
}
