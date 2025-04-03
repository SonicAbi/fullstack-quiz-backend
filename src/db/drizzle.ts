import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schemas.ts"

const pool = new Pool({
    connectionString: process.env.DB_URL
})

export const db = drizzle({ client: pool, schema })

export type Transaction = Parameters<Parameters<typeof db.transaction>[0]>[0]