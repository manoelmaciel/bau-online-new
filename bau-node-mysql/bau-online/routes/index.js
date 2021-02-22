var express = require('express');
var router = express.Router();

/* GET /musicas */
router.get('/musicas', function(req, res, next) {
  // console.log('Banco ...')
  req.getConnection((err, connection) => {
    connection.query('SELECT * FROM tb_musicas', [], (err, result) => {
      if (err) {
        return res.status(400).json(err)
      } 
      return res.status(200).json(result)
    })
  });
  // res.render('index', { title: 'Express' });
});

/* GET /notas */
router.get('/notas', function(req, res, next) {
  // console.log('Banco ...')
  req.getConnection((err, connection) => {
    connection.query('SELECT * FROM tb_notas', [], (err, result) => {
      if (err) {
        return res.status(400).json(err)
      } 
      return res.status(200).json(result)
    })
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;
