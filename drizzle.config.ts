import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/db/env";

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schemas.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: ENV.DATABASE_URL!,
  },
});
