const up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.string("email").notNullable().unique();
    table.string("role").notNullable();
    table.boolean("active").defaultTo(true);
    table.string("created_at").defaultTo(knex.fn.now());
    table.string("updated_at").defaultTo(knex.fn.now());
  });
};

const down = function (knex) {
  return knex.schema.dropTable("users");
};

export { up, down };
