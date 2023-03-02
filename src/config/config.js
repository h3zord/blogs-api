require('dotenv').config();

const { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const options = {
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  dialect: 'postgres',
  define: {
    timestamps: true,
  },
  dialectOptions: {
    schema: 'public',
  },
};

module.exports = {
  development: {
    ...options,
  },
  test: {
    ...options,
  },
};