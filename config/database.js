// memanggil mysql
const mysql = require('mysql');
// koneksi ke database
const koneksi = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'belajar_node'
});
// jika berhasil
koneksi.connect( (err) => {
    if(err) throw err;
    console.log('mysql connected...');
});
// modul exports agar database bisa dipanggil di file lain
module.exports = koneksi;