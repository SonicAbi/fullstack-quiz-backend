import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schemas.ts"

const pool = new Pool({
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  user: process.env.PGUSER,
  port: parseInt(process.env.PGPORT || "5432", 10),
  database: process.env.PGDATABASE,
  ssl: { rejectUnauthorized: false },
});

export const db = drizzle({ client: pool, schema })

export type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0]