const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

const Material_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Material" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "tipo" varchar(64),
    "peso" varchar(64),
    "tamanho" varchar(64),
    "quantidade" varchar(64)
);`;

function criarTabelaMaterial () {
    db.run(Material_SCHEMA, (error) => {
        if (error) console.log("erro ao criar tabela de Material");
    });
}

db.serialize( () => {
    criarTabelaMaterial();
});