// memanggil mysql
const mysql = require('mysql');
// koneksi ke database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_node'
});
// jika berhasil
db.connect( (err) => {
    if(err) throw err;
    console.log('mysql connected...');
});
// modul exports agar database bisa dipanggil di file lain
module.exports = db;