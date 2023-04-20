const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/infra/database.db');

const string = `CREATE TABLE Material(  
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        tipo TEXT(50),
        tamanho INT(11),
        peso VARCHAR(30),
        quantidade INT(8)
    );`

// //Processamento de sinal
process.on('SIGINT', () =>
    db.close(() => {
        console.log('Banco de dados encerrado!');
        process.exit(0);
    })
);

module.exports = db;