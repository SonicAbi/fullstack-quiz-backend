import { z } from "zod";

// Typing
declare module "bun" {
  interface Env {
    DB_URL: string;
  }
}

const EnvSchema = z.object({
  DB_URL: z.string().url(),
});

const parsedEnv = EnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.log(
    `Loading Env failed: ${JSON.stringify(parsedEnv.error.format(), null, 2)}`
  );
  process.exit(1);
}

// env successfully parsed now export it
export const ENV = parsedEnv.data;
