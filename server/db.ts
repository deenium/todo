import Pool from "pg-pool";

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: "newpassword",
  port: 5432,
});

export default pool;
