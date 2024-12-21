// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
  development: {
    client: "mysql2",
    connection: {
      database: "db_absensi",
      user: "root",
      password: "root",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      database: "db_absensi",
      user: "root",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: "db_absensi",
      user: "root",
      password: "root",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
