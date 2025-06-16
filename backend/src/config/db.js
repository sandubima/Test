const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database:  'test'
};


async function connectDB(){
    try {
        const connection = await mysql.createConnection(dbConfig);
        console.loglog('Database connected successfully');
        return connection;
    } catch (erro){
        console.error('Database connection failed:', error);
        throw error;
    }
}

module.exports = { connectDB, dbConfig};