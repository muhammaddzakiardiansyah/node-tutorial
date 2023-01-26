// memanggil express
const {json, urlencoded} = require('express');
const express = require('express');
// memanggil body parsermembuat
const bodyParser = require('body-parser');
// memanggil koneksi database
const db = require('./config/database');
// membuat port
const port = 3000;
// app
const app = express();

// mengambil form input
app.use(json());
app.use(urlencoded({extended: false}));

// get
app.get('/api/user', (req, res) => {
  db.query(`SELECT * FROM user`, (err, result) => {
    if(err) {
      return res.status(500).json({message: 'gagal', error: err});
    } else {
      console.log(result);
      return res.status(201).json({message: 'success', data: result});
    }
  });
});
// show detail
app.get('/api/user/:id', (req, res) => {
  const {id} = req.params;
  db.query(`SELECT * FROM user WHERE id='${id}'`, (err, result) => {
    if(err) {
      return res.status(500).json({message: 'gagal', error: err});
    } else {
      console.log(result);
      return res.status(201).json({message: 'success', data: result});
    }
  });
})
// post
app.post('/api/user', (req, res) => {
  const {nama, status, alamat, email, no_hp} = req.body
  db.query(`INSERT INTO user (nama, status, alamat, email, no_hp) VALUES ('${nama}', '${status}', '${alamat}', '${email}', '${no_hp}')`, (err, result) => {
    if(err) {
      return res.status(500).json({message: 'faield', error: err});
    } else {
      console.log(req.body);
      return res.status(201).json({message: 'success', data: req.body});
    }
  });
});
// put
app.put('/api/user/:id', (req, res) => {
  const {nama, status, alamat, email, no_hp} = req.body;
  const {id} = req.params;
  db.query(`UPDATE user SET nama='${nama}', status='${status}', alamat='${alamat}', email='${email}', no_hp='${no_hp}' WHERE id='${id}'`, (err, result) => {
    if(err) {
      return res.status(500).json({message: 'gagal', error: err});
    } else {
      return res.status(201).json({message: 'success', data: req.body});
    }
  });
});
// delete
app.delete('/api/user/:id', (req, res) => {
  const {id} = req.params;
  db.query(`DELETE FROM user WHERE id='${id}'`, (err, result) => {
    if(err) {
      return res.status(500).json({message: 'gagal', error: err});
    } else {
      return res.status(201).json({message: 'success delete data'});
    }
  });
});

// menjalankan port
app.listen(port, (err) => {
    if(err) throw err;
    console.log(`success port running at ${port}`);
})