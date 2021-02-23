var express = require('express');
var router = express.Router();

/* GET ... /musicas -- retorna todas as músicas do banco! */
router.get('/musicas', function(req, res, next) {
  req.getConnection((err, connection) => {
    if (err) { 
      console.log(err)
      return res.status(400).json('Error') } 
    connection.query('SELECT * FROM tb_musicas', [], (err, result) => {
      if (err) { 
        console.log(err)
        return res.status(400).json('Error') } 
      return res.status(200).json(result) 
    })
  });
});

module.exports = router;
