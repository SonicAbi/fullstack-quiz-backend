import { z } from "zod";

// Typing (optional – wird für Bun verwendet)
declare module "bun" {
  interface Env {
    PGHOST: string;
    PGUSER: string;
    PGPASSWORD: string;
    PGPORT: string;
    PGDATABASE: string;
  }
}

// Zod-Schema zur Validierung aller ENV-Variablen
const EnvSchema = z.object({
  PGHOST: z.string().url(),
  PGUSER: z.string().min(1, "PGUSER is required"),
  PGPASSWORD: z.string().min(1, "PGPASSWORD is required"),
  PGPORT: z.string().regex(/^\d+$/, "PGPORT must be a number as string"),
  PGDATABASE: z.string().min(1, "PGDATABASE is required"),
});

// Safe Parse
const parsedEnv = EnvSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error(
    `❌ ENV validation failed:\n${JSON.stringify(
      parsedEnv.error.format(),
      null,
      2
    )}`
  );
  process.exit(1);
}

// Export validated env
export const ENV = parsedEnv.data;
