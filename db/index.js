const { Pool } = require("pg");
const dbParams = require("../lib/db.js");
const pool = new Pool(dbParams);
pool.connect();

module.exports = {
  query: (queryString, queryParams) => {
    console.log('Query String =================>\n');
    console.log('Query Params =================>\n');
    return pool
      .query(queryString, queryParams);
  }
};
