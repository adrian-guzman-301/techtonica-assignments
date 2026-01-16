import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: 'tpl925_3',
  host: 'localhost',
  database: 'cards_db',
  port: 5432,
})

export default pool;