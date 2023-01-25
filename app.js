// memanggil express
const express = require('express');
// memanggil body parsermembuat
const bodyParser = require('body-parser');
// memanggil koneksi database
const mysql = require('./config/database');
const koneksi = require('./config/database');
// membuat port
const port = 3000;
// app
const app = express();

// mengambil form input
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// fungsi menambahkan data user
app.post('/api/user', (req, res) => {
   //   bikin variabel koneksi
   const data = { ...req.body };
   const querySql = 'INSERT INTO user SET ?';
  //    menjalankan koneksi
  koneksi.query(querySql, data, (err, rows, field) => {
    // jika gagal
     if(err) {
        return res.status(500).json({message: 'gagal menambahkan data', error: err});
     }
    //  jika berhasil
    res.status(201).json({success: true, message: 'berhasil menambahkan data'});
  });
});


// menjalankan port
app.listen(port, (err) => {
    if(err) throw err;
    console.log(`success port running at ${port}`);
})