module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'react',
  },
  migrations: {
    directory: './migrations', 
  },
};

