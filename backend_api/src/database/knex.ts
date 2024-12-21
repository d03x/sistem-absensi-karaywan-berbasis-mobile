import knek from "knex";
const knex = knek({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_absensi",
    port: 3306,
  },
});

export default knex;
