import { Pool } from "pg";

const pool = new Pool({
  port: parseInt(process.env.DB_PORT || "5432")
});

export const connectToDB = async () => {
  try {
    await pool.connect();
  } catch (err) {
    console.log(err);
  }
};