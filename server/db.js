import { Pool } from "pg";
import "dotenv/config";

export function getDbPool() {
  return new Pool({
    user: "postgres",
    host: "localhost",
    database: "jwttuts",
    password: process.env.DB_PASSWORD,
    port: 5432,
  });
}
