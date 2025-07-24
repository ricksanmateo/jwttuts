import { Pool } from "pg";

export function getDbPool() {
  return new Pool({
    user: "postgres",
    host: "localhost",
    database: "jwttuts",
    password: "sanmateo",
    port: 5432,
  });
}
